import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import fs from "fs";
import { search } from '../../../service/IndexService';

const cors = initMiddleware(
    Cors({
        methods: ['POST', 'OPTIONS'],
    })
);

export default async function handler(req, res) {
    // Run cors
    await cors(req, res)
    const { keyword } = req.body;
    const newIndexName = 'test-index';
    const resultList = await search(newIndexName, keyword);
    res.status(200).json({
        status: 0,
        data: {
            type: 'searchResult',
            hits: resultList,
        }
    });
}