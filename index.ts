import express from 'express';
import http from 'http';
import bodypaser from 'body-paser';
import cookiePaser from 'cookie-paser';
import cors from 'cors'

const app = express();

 app.use(cors({
    Credentials: true,
}));

app.use(Compression());
app.use(cookiePaser());
app.use(bodypaser.json());

const server = http.createserver(app);
 