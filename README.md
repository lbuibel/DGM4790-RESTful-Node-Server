# Utah Bike Route API

## Restful Crud Node Server - DGM4790

- Mongoose as your data modeling tool
Mongoose used for [Route Schema](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/models/course.js)

- Cloud-based MongoDB as your data store
Connection to MongoDB is made in [index.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/index.js)

- At least 3 endpoints to GET data from your server
All three can be found in [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)
1. First GET endpoint retrieves all routes stored in data store
2. Second GET endpoint searches a specific route based on _id parameter
3. Third GET endpoint returns all the routes at or below an average grade (entered as a paramter)

- At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs

- At least 1 endpoint allowing user to create an item via POST
Creating an item is done via the '/add-course' route also found in [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)

- At least 1 endpoint allowing user to delete an item via DELETE
Can be done via '/delete-course/:courseId' and is found on [router.js](https://github.com/lbuibel/DGM4790-RESTful-Node-Server/blob/master/server/routes/course.router.js)

- Your datastore will contain at least 25 items
- Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
- All of your source code will be properly uploaded to GitHub
- Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs