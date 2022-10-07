import express from 'express';
import LoginController from '../controllers/login.controller';
import LoginFieldsCheck from '../middlewares/login.middleware';

const route = express.Router();

const loginController = new LoginController();
const loginFieldsCheck = new LoginFieldsCheck();
route.post('/login', loginFieldsCheck.checkFields, loginController.login);

export default route;