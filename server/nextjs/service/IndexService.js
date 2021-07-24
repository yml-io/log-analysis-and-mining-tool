import ESClient from '../lib/es_client';
import { once } from 'events';
import { createInterface } from 'readline';
import ResourceManager from './ResourceManager';

const indexing = async (root, keywords) => {
    const newIndexName = 'test-index';
    const TIME_FORMAT_STR = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{4}) (\w+) \[([^\]]+)\] (\w+) - (.*)$/;
    const resourceManager = new ResourceManager(root, {});
    // create index for new indexing task commit
    await ESClient.indices.create({
        index: newIndexName,
        body: {
            mappings: {
                properties: {
                    id: { type: 'keyword' },
                    data: { type: 'keyword' },
                    level: { type: 'keyword' },
                    threadId: { type: 'keyword' },
                    process: { type: 'keyword' },
                    message: { type: 'text' },
                    date: { type: 'date' }
                }
            }
        }
    }, { ignore: [400] });
    // indexing line text to ES
    let queue = [root];
    while (queue.length > 0) {
        const { id, labelText, resourceName, nodeType, nodeDetailType, checkedPlugin, children } = queue.shift();
        // this is a group node
        if (children && children.length > 0) {
            queue = queue.concat(children);
        } else if (resourceName) {
            // read resource
            const resource = await resourceManager.getReadStream(resourceName);
            let readBuffer = [];
            try {
                const rl = createInterface({
                    input: resource,
                    crlfDelay: Infinity
                });

                rl.on('line', async (line) => {
                    const text = line.trim();
                    const cap_group = TIME_FORMAT_STR.exec(text);
                    if (cap_group) {
                        re_date = cap_group[1]
                        re_level = cap_group[2]
                        re_thread_id = cap_group[3]
                        re_process = cap_group[4]
                        re_message = cap_group[5]

                        const newItem = {
                            data: re_date,
                            level: re_level,
                            threadId: re_thread_id,
                            process: re_process,
                            message: re_message,
                        };
                        readBuffer.push(newItem);
                    }

                    if (line.length > 100) {
                        // make a bulk insert
                        const body = readBuffer.flatMap(doc => [{ index: { _index: newIndexName } }, doc]);
                        const { body: bulkResponse } = await ESClient.bulk({ refresh: true, body });

                        if (bulkResponse.errors) {
                            const erroredDocuments = []
                            // The items array has the same order of the dataset we just indexed.
                            // The presence of the `error` key indicates that the operation
                            // that we did for the document has failed.
                            bulkResponse.items.forEach((action, i) => {
                                const operation = Object.keys(action)[0]
                                if (action[operation].error) {
                                    erroredDocuments.push({
                                        // If the status is 429 it means that you can retry the document,
                                        // otherwise it's very likely a mapping error, and you should
                                        // fix the document before to try it again.
                                        status: action[operation].status,
                                        error: action[operation].error,
                                        operation: body[i * 2],
                                        document: body[i * 2 + 1]
                                    })
                                }
                            })
                            console.log(erroredDocuments)
                        }
                    
                        const { body: count } = await ESClient.count({ index: newIndexName })
                        console.log(`bulk ${count} record into ElasticSearch.`)

                        readBuffer = [];
                    }
                });
                await once(rl, 'close');

            } catch (err) {
                console.error(err);
            }
        }
    }
    // here we are forcing an index refresh, otherwise we will not
    // get any result in the consequent search
    await ESClient.indices.refresh({ index: 'test-index' })

    const result = Object.assign({}, keywords);
    for (let c of keywords) {
        console.log(`search category ${c} record from ElasticSearch.`)
        keywords.map(async (k) => {
            const { body } = await ESClient.search({
                index: newIndexName,
                // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
                body: {
                    query: {
                        match: { message: k }
                    }
                }
            });
            const foundCount = body.hits.hits.length;
            result.filter(c => e.category == c).foundCount[k] = foundCount;
        });
    }
    return result;
}

export const search = async (indexName, keyword) => {
    const { body } = await ESClient.search({
        index: indexName,
        // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
        body: {
            query: {
                match: { message: keyword }
            }
        }
    });

    return body.hits.hits;
};

export default {
    submit: (documentTree, keywords) => {
        return indexing(documentTree, keywords);
    }
}