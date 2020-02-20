import { Router } from 'express'
import { postAddCourse, getAllCourses } from '../controllers/course.controller'

export const courseRouter = Router()

// /api/add-product
courseRouter.post('/add-course', postAddCourse)

courseRouter.get('/getAllAlbums', getAllCourses)