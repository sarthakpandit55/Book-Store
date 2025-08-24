import express, { Router } from 'express';

import { getBook } from '../controller/bookController.js';

const route = express.Router();

route.get('/', getBook);

export default route;