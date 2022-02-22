import { Router } from 'express'
import Controller from './controller.js'

const router = new Router();

router.get('/', Controller.index);

export default router;