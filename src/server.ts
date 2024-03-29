import { getPort } from '@common/utils/envConfig';
import { app, logger } from '@src/app';

const port = getPort();

const server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});

const onCloseSignal = () => {
  logger.info('Sigint received, shutting down');
  server.close(() => {
    logger.info('Server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
