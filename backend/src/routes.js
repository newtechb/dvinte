import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import authMiddleware from './app/middlewares/auth'

import AlignmentController from './app/controllers/AlignmentController'
import ClassController from './app/controllers/ClassController'
import DivinityController from './app/controllers/DivinityController'
import CharacterController from './app/controllers/CharacterController'
import PortraitController from './app/controllers/PortraitController'
import RaceController from './app/controllers/RaceController'

import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/sessions', SessionController.store)
routes.post('/users', UserController.store)

routes.use(authMiddleware)

routes.get('/users', UserController.index)
routes.put('/users', UserController.update)

routes.post('/alignments', AlignmentController.store)
routes.get('/alignments', AlignmentController.index)

routes.post('/classes', ClassController.store)
routes.get('/classes', ClassController.index)

routes.post('/divinities', DivinityController.store)
routes.get('/divinities', DivinityController.index)

routes.post('/characters', CharacterController.store)
routes.get('/characters', CharacterController.index)

routes.post('/portraits', upload.single('file'), PortraitController.store)
routes.get('/portraits', PortraitController.index)

routes.post('/races', RaceController.store)
routes.get('/races', RaceController.index)

export default routes