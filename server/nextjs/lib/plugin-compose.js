import fs from 'fs';
import path from 'path';

export const createComposeMiddleware = (cached, composeList) => {
    if (!Array.isArray(composeList)) {
        throw TypeError("require [compose list] list of middleware id");
    }
    return function(context) {
        let index = -1;
        return dispatch(0);
        function dispatch(i) {
            index++;
            if (i >= composeList.length) return null;
            const fn = cached[composeList[i]].exports.handler;
            return fn(context, dispatch.bind(null, i+1));
        }
    }
}

// plugin loader
export const loadCachedMiddleware = () => {
    const pluginDir = `./plugins`;
    // scan plugin dir
    const pluginDirList = fs.readdirSync(pluginDir);
    const middlewares = {};
    for (let folder of pluginDirList) {
        const filePath = path.join(pluginDir, folder);
            // const stat = fs.statSync(filePath);
        const manifest = path.join(filePath, 'manifest.json');
        const mf = path.join(filePath, 'module.js');
        try{
            const meta = JSON.parse(fs.readFileSync(manifest, 'utf-8'))
            const content = fs.readFileSync(mf);
            const fn = new Function('n', content);
            const exports = fn();
            const component = {
                index: path.join(filePath, 'module.html')
            };
            middlewares[meta.id] = Object.assign({}, meta, {exports, component});
            
        } catch(loadException) {
            console.log(`can not load middleware: ${folder}, ${loadException}`);
        }
    }
    return middlewares;
}

