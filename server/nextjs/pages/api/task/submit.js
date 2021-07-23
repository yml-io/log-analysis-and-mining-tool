import Cors from 'cors'
import initMiddleware from '../../../lib/init_middleware'
import TaskRunner from '../../../service/TaskRunner';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res)

  const {nodeTree, keywords, buildProfile} = req.body;

  const taskRunner = new TaskRunner(nodeTree, keywords, buildProfile);
  const analysisDiagram = await taskRunner.run();
  res.status(200).json({data: { diagram: analysisDiagram }})
}
