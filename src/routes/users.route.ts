import express from 'express';
import UserController from '../controllers/user.controller';

const userController = new UserController();

const route = express.Router();

route.post('/users', userController.inserUser);

export default route;