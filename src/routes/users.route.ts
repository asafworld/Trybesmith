import express from 'express';
import UserController from '../controllers/user.controller';
import UsersCheckFields from '../middlewares/user.middleware';

const userController = new UserController();
const userCheckFields = new UsersCheckFields();

const route = express.Router();

route.post('/users', userCheckFields.checkFields, userController.inserUser);

export default route;