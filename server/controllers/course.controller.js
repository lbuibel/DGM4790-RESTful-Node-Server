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

// UPDATING EXHISTING COURSE
export const postEditCourse = (req, res, next) => {
    const courseId = req.params.courseId

    const updateName = req.body.name
    const updateType = req.body.type
    const updateMiles = req.body.miles
    const updateStartPoint = req.body.startPoint
    const updateEndPoint = req.body.endPoint
    const updateStartingElevation = req.body.startingElevation
    const updateFinalElevation = req.body.finalElevation
    const updateMaxGradient = req.body.maxGradient
    const updateAverageGradient = req.body.averageGradient
    const updateGoogleRoute = req.body.googleRoute

    Course.findById(courseId)
    .then(course => {
        course.name =  updateName
        course.type = updateType
        course.miles = updateMiles
        course.startPoint = updateStartPoint
        course.endPoint = updateEndPoint
        course.startingElevation = updateStartingElevation
        course.finalElevation = updateFinalElevation
        course.maxGradient = updateMaxGradient
        course.averageGradient = updateAverageGradient
        course.googleRoute = updateGoogleRoute
        return course.save()
    })
    .then(result => {
        console.log('Course updated')
        res.send('Course Updated')
    })
    .catch(err => {console.log(err)})
}

// SEARCHING A SPECIFIC COURSE
export const getCourse = (req, res, next) => {
    const courseId = req.params.courseId
    Course.findById(courseId)
    .then(course => {
        res.json(course)
        console.log('Course found')
    })
    .catch(err => {console.log(err)})
}