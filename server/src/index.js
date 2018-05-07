import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

import initConfigs from './configs';
import initAPI from './api';
import initAuth from './auth';

const app = express();
const port = 3333;

initConfigs(app);

app.use('*', cors());

initAPI(app);

initAuth(app);

app.listen(
    port,
    err =>
        err
            ? console.log(`ERROR: ${err}`)
            : console.log(`Express running on PORT: http://localhost:${port}`)
);
