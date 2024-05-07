import  express from 'express';
import { createCourse, deleteCourse, getCourses,  updateCourse } from '../controllers/courseController.js';

const courseRouter = express.Router();

courseRouter.post('/create', createCourse);
courseRouter.get('/', getCourses);
// courseRouter.get('/:id', getCourse);
courseRouter.put('/update/:id', updateCourse);
courseRouter.delete('/delete/:id', deleteCourse);

export default courseRouter;