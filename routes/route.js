import express,{Router} from 'express'
import { addUserController } from '../controller/addUserController.js';

const router = express.Router();

router.post('/adduser', addUserController)

export default router;