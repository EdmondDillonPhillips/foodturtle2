import express, { Request, Response } from 'express';
import cors from 'cors';
import { logger } from './middleware/logger';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  logger.info('Root endpoint hit');
  res.json({ 
    message: 'Food Turtle Backend — Real Structure + TypeScript = WORKING TEST',
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
  console.log(`BACKEND IS ALIVE → http://localhost:${PORT}`);
});
