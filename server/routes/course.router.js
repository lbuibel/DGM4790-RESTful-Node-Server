import { Router } from 'express'
import { postAddCourse, getAllCourses, postDeleteCourse, postEditCourse, getCourse, getMaxAverageGrade, getMaxMiles } from '../controllers/course.controller'

export const courseRouter = Router()

courseRouter.get('/getAllCourses', getAllCourses)

courseRouter.get('/get-course/:courseId', getCourse)

courseRouter.get('/maxAverageGrade/:maxGrade', getMaxAverageGrade)

courseRouter.get('/maxMiles/:maxMiles', getMaxMiles)

courseRouter.post('/add-course', postAddCourse)

courseRouter.post('/delete-course/:courseId', postDeleteCourse)

courseRouter.post('/update-course/:courseId', postEditCourse)

