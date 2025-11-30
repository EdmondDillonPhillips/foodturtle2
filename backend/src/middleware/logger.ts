import winston from 'winston';
import 'winston-daily-rotate-file';

const transport = new (require('winston-daily-rotate-file') as any)({
  filename: 'logs/foodturtle-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

export const logger = winston.createLogger({
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

import fs from 'fs';
if (!fs.existsSync('logs')) fs.mkdirSync('logs');
