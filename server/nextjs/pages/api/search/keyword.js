import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import fs from "fs";
import { search } from '../../../service/IndexService';

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
        methods: ['POST', 'OPTIONS'],
    })
)

export default async function handler(req, res) {
    // Run cors
    await cors(req, res)

    const { keyword } = req.body;
    const newIndexName = 'test-index';
    const result = await search(newIndexName, keyword);
    res.status(200).json({ status: 0, data: { result } });
}