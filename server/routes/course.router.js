import { Router } from 'express'
import { postAddCourse, getAllCourses, postDeleteCourse, postEditCourse, getCourse } from '../controllers/course.controller'

export const courseRouter = Router()

// /api/add-product
courseRouter.post('/add-course', postAddCourse)

courseRouter.get('/getAllCourses', getAllCourses)

courseRouter.get('/get-course/:courseId', getCourse)

courseRouter.post('/delete-course/:courseId', postDeleteCourse)

courseRouter.post('/update-course/:courseId', postEditCourse)

