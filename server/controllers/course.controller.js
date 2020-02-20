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
    const averageGradient = (((finalElevation - startingElevation) / (miles * 5280)) * 100).toFixed(1)
    const googleRoute = `https://www.google.com/maps/dir/${startPoint}/${endPoint}/`
    const course = new Course({
      name: name,
      type: type,
      miles: miles,
      startPoint: startPoint,
      endPoint: endPoint,
      startingElevation: startingElevation,
      finalElevation: finalElevation,
      maxGradient: maxGradient,
      averageGradient: averageGradient,
      googleRoute: googleRoute
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

// DELETE COURSE
export const postDeleteCourse = (req, res, next) => {
    const courseId = req.params.courseId
    Course.findByIdAndRemove(courseId)
    .then(()=> {
        console.log('Course deleted')
        res.redirect('/course/getAllCourses')
    })
    .catch(err => {
        console.log(err)
    })
}

