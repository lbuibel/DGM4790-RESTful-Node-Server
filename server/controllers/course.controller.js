const Course = require('../models/course')


// ADDING INDIVIDUAL COURSE
export const postAddCourse = (req, res, next) => {
    const name = req.body.name
    const type = req.body.type
    const miles = req.body.miles
    const startPoint = req.body.startPoint
    const endPoint = req.body.endPoint
    const startingElevation = req.body.startingElevation
    const finalElevation = req.body.finalElevation
    const maxGradient = req.body.maxGradient
    const course = new Course({
      name: name,
      type: type,
      miles: miles,
      startPoint: startPoint,
      endPoint: endPoint,
      startingElevation: startingElevation,
      finalElevation: finalElevation,
      maxGradient: maxGradient
    });
    course
    .save()
    .then(result => {
        console.log('Created course')
        res.send('Created course! Check database')
    })
    .catch(err =>{
        console.log(err)
    })
}


// RETURNING ALL COURSES
export const getAllCourses = (req, res, next) => {
    Course.find()
        .then(courses => {
            res.json(courses)
            console.log(courses)
        })
        .catch(err => {
            console.log(err)
        })
}
