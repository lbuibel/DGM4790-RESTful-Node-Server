const Course = require('../models/course')

// ADDING INDIVIDUAL COURSE
export const postAddCourse = (req, res, next) => {
    const name = req.body.name
    const type = req.body.type
    const miles = req.body.miles
    const startingElevation = req.body.startingElevation
    const finalElevation = req.body.finalElevation
    const averageGradient = (((finalElevation - startingElevation) / (miles * 5280)) * 100).toFixed(1)
    const iframeData = req.body.iframeData
    const course = new Course({
      name: name,
      type: type,
      miles: miles,
      startingElevation: startingElevation,
      finalElevation: finalElevation,
      averageGradient: averageGradient,
      iframeData: iframeData
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

// RETURNING COURSES LESS THAN SELECTED AVERAGE GRADIENT
export const getMaxAverageGrade = (req, res, next) => {
    const maxGrade = req.params.maxGrade
    Course.find()
        .then(courses => {
            res.json(courses.filter(course => course.averageGradient <= maxGrade))
            console.log('courses')
        })
        .catch(err => {
            console.log(err)
        })
}

// RETURNING COURSES LESS THAN SELECTED DISTANCE
export const getMaxMiles = (req, res, next) => {
    const maxMiles = req.params.maxMiles
    Course.find()
        .then(courses => {
            res.json(courses.filter(course => course.miles <= maxMiles))
            console.log('courses')
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
        res.send('Course Deleted')
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
    const updateStartingElevation = req.body.startingElevation
    const updateFinalElevation = req.body.finalElevation
    const updateiframeData = req.body.iframeData

    Course.findById(courseId)
    .then(course => {
        course.name =  updateName
        course.type = updateType
        course.miles = updateMiles
        course.startingElevation = updateStartingElevation
        course.finalElevation = updateFinalElevation
        return course.save()
    })
    .then(result => {
        console.log('Course updated')
        res.send('Course Updated')
    })
    .catch(err => {console.log(err)})
}

// SEARCHING A SPECIFIC COURSE BY ID
export const getCourse = (req, res, next) => {
    const courseId = req.params.courseId
    Course.findById(courseId)
    .then(course => {
        res.json(course)
        console.log('Course found')
    })
    .catch(err => {console.log(err)})
}