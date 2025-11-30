const express = require('express');
const cors = require('cors');
const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/foodturtle-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    transport,
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  logger.info('Root endpoint hit');
  res.json({ 
    message: 'Food Turtle backend + Winston = ALIVE TEST',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  logger.info(`Backend running on http://localhost:${PORT}`);
  console.log(`BACKEND IS WORKING → http://localhost:${PORT}`);
});
