import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import fs from "fs";
import { loadCachedMiddleware,  } from '../../../lib/plugin-compose';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  console.log(req.body);
  const cachedMiddleware = loadCachedMiddleware();
  const metaList = Object.values(cachedMiddleware);
  res.status(200).json({status: 0, data: {plugins: metaList}});
}