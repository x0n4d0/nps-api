import 'reflect-metadata';
import express from 'express';

import '../database';

import { userRoutes } from '../routes/user';

const app = express();

app.use(express.json());
app.use(userRoutes);

export { app };