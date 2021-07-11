import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import formidable from "formidable";
import fs from "fs";
import {createUploadFileName, saveUploadedFile} from '../../../lib/uploadUtil';

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
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  console.log(req.body);

  const form = new formidable.IncomingForm();
  await form.parse(req, async function (err, fields, files) {
    const uploadedFile = files.file;
    const savedFileName = createUploadFileName(uploadedFile.name);
    await saveUploadedFile(uploadedFile, savedFileName)
    .then(savedFileName => res.status(201).json({status: 0, data: {resourceName: savedFileName}}))
    .catch(ioe => res.status(500).json({status: 1, error: {message: "save file error"}}));
  });
}