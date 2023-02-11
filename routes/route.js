import express,{Router} from 'express'
import { addUserController } from '../controller/addUserController.js';
import { getUserController, editUserController , editUserDataController, deleteUserDataController} from '../controller/getUserController.js';
const router = express.Router();

router.post('/adduser', addUserController)
router.get('/getuser', getUserController)
router.get('/:id', editUserController)
router.post('/:id', editUserDataController)
router.delete('/:id', deleteUserDataController)
export default router; 