import {Router} from 'express';
import {
    getAll,
    addOne,
    createDummyData
} from '../controller/Action.controller';

const router = Router();

router.get('/', getAll);
router.get('/createDummyData', createDummyData);
router.post('/add', addOne);

export default router;