import { Router } from 'express'
import { postAddCourse, getAllCourses, postDeleteCourse } from '../controllers/course.controller'

export const courseRouter = Router()

// /api/add-product
courseRouter.post('/add-course', postAddCourse)

courseRouter.get('/getAllCourses', getAllCourses)

courseRouter.post('/delete-course/:courseId', postDeleteCourse)

