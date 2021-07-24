import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import { loadCachedMiddleware, } from '../../../lib/plugin-compose';
import fs from 'fs';

const cors = initMiddleware(
    Cors({
        methods: ['POST', 'OPTIONS'],
    })
);

export default async function handler(req, res) {
    // Run cors
    await cors(req, res)

    const queryPluginId = req.body.id;
    const cachedMiddleware = loadCachedMiddleware();
    const componentPage = cachedMiddleware[queryPluginId].component.index;
    const htmlContent = fs.readFileSync(componentPage, 'utf-8');
    res.status(200).json({
        status: 0,
        data:
        {
            type: 'pluginDetail',
            id: queryPluginId,
            htmlContent: htmlContent,
        }
    });
}