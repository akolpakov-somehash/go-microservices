import express from 'express';
import cors from 'cors';
import env from './config';
import errorHandler from './errorHandler';
import router from './routes';


const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(router);

app.listen(env.SERVER_PORT, () => {
    console.log(`RESTful API is listening on port ${env.SERVER_PORT}`);
});
