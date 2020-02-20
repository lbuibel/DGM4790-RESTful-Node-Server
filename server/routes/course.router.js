import { Router } from 'express'
import { postAddCourse, getAllCourses, postDeleteCourse, postEditCourse, getCourse, getMaxAverageGrade } from '../controllers/course.controller'

export const courseRouter = Router()

// /api/add-product
courseRouter.get('/getAllCourses', getAllCourses)

courseRouter.get('/get-course/:courseId', getCourse)

courseRouter.get('/maxAverageGrade/:maxGrade', getMaxAverageGrade)

courseRouter.post('/add-course', postAddCourse)

courseRouter.post('/delete-course/:courseId', postDeleteCourse)

courseRouter.post('/update-course/:courseId', postEditCourse)

