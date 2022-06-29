import express from 'express';
import {json, urlencoded} from 'body-parser';
import fileupload from 'express-fileupload';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import {connect} from './router/share/db';
import config from './config';

import {trainingRouter, actionRouter,videoRouter} from "./router"

export const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(json());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(
    urlencoded({
        extended: true
    }) // alow use parameter when req
);
app.use(fileupload());
app.use(morgan('dev'));


app.use('/api/actions', actionRouter);
app.use('/api/models', trainingRouter);
app.use('/api/videos', videoRouter);


export const start = async () => {
    try {
        await connect();
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}/api/`);
        });
    } catch (e) {
        console.error(e);
    }
};
