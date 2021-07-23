import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import fs from "fs";
import { loadCachedMiddleware, } from '../lib/plugin-compose';

export const config = {
    api: {
        bodyParser: false
    }
};

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'OPTIONS'],
    })
)

export default async function handler(req, res) {
    // Run cors
    await cors(req, res)

    const queryPluginId = req.query.id;
    console.log(queryPluginId);
    const cachedMiddleware = loadCachedMiddleware();
    const widgetComponent = cachedMiddleware[queryPluginId].component;
    res.status(200).json({
        status: 0, data: [
            {
                id: queryPluginId,
                plugins: widgetComponent
            }]
    });
}