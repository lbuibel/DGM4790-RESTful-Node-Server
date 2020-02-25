# Utah Bike Route API

## Restful Crud Node Server - DGM4790

- Mongoose as your data modeling tool
Mongoose used for [Route Schema](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/models/course.js)

- Cloud-based MongoDB as your data store
Connection to MongoDB is made in [index.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/index.js)

- At least 3 endpoints to GET data from your server
All three can be found in [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)

1. First GET endpoint retrieves all routes stored in data store - [](https://bike-routes-api.herokuapp.com/course/getAllCourses)
2. Second GET endpoint searches a specific route based on _id parameter - [example](https://bike-routes-api.herokuapp.com/course/get-course/5e546bfd9650db2fd89c1d22)

3. Third GET endpoint returns all the routes at or below an average grade (entered as a paramter) - [example](https://bike-routes-api.herokuapp.com/course/maxAverageGrade/3)

- At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
Editing a route requires an _id, and can be done at:

'https://bike-routes-api.herokuapp.com/course/update-course/5e5446e99650db2fd89c1d1c'


- At least 1 endpoint allowing user to create an item via POST
Creating an item is done via the '/add-course' route also found in [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)

- At least 1 endpoint allowing user to delete an item via DELETE
Can be done via '/delete-course/:courseId' and is found on [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)

- Your datastore will contain at least 25 items
All items are saved on MongoDB but can be found [here](https://bike-routes-api.herokuapp.com/course/getAllCourses)

- Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
I deployed my app with heroku, here is a [link](https://bike-routes-api.herokuapp.com/course/maxAverageGrade/4) that returns all the routes that have an average grade less than 4%

- [x] All of your source code will be properly uploaded to GitHub

- Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs
to run this locally, clone the repo and run 'npm install', to run the app use npm run serve

### Using The API

POST'ing a new route consist of adding this info:

`
name: //String (required)
type: //String (required - pavement gravel etc)
miles: //Number (required)
startPoint: //String (required - coordinates)
endPoint: //String (required - coordinates)
startingElevation: //Number (required)
finalElevation: //Number (required)
maxGradient: //Number (not required)

averageGradient: //number (not required - calculated with user entered elevations)
googlerRoute: //String (not required - generated with starting and ending point entered by user)

`

### Delete
An _id is requried to remove a route from the database. _id's can be found [here](https://bike-routes-api.herokuapp.com/course/getAllCourses)

### Searching Specific Route
An _id can be used to search for a specific route, view the Wolf Creek Pass Route [here](https://bike-routes-api.herokuapp.com/course/get-course/5e546bfd9650db2fd89c1d22)

### Searching Routes based on average grade
Passing in the maximum grade as a paremter will return all the routes with an average grade less than the entered parameter

View all the routes with an average grade less than 3 [here](https://bike-routes-api.herokuapp.com/course/maxAverageGrade/3)



