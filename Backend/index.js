let express = require('express'); //import express //require method is used to import any module
const cors = require('cors');

let app = express(); //inialize express server and call it as a function

let router = express.Router(); //define the router router determine how application responds to client request to the end point

let personRepo = require('./routes/person');

app.use(express.json()); // we are gonna receive the data inside the body of post method
app.use(cors());
app.use('/',router); //add some string to the router url



router.get('/persons',function(req,res,next){ 
    personRepo.get(function(data){
        //Wrap data in JSON
         res.status(200).json({
            data
            

    })
    },function(err){
        next(err);
    });

    

    
})

//GET Method   Retrieve a specific person object by its ID.

router.get('/persons/:id',function(req,res,next){ 
    let id = req.params.id;    //get the id passed by the request //whatever paramters pass it will avalible in params object
    personRepo.getById(id,function(data){
        //Wrap data in JSON
         res.status(200).json({
        "status":200,
        "statusText":"Ok",
        "message":"User data feteched succesfully",
        "data":data

    })
    },function(err){
        next(err);
    });
      
})
//Get BY INDEX 


router.get('/persons/:index', function(req, res, next) {
    // Retrieve the index of the person to be retrieved from the request parameters
    let index = parseInt(req.params.index);
  
    // Retrieve the person object to be retrieved from the Datalist array using the index
    let person = Datalist[index];
  
    // Send a success response with the retrieved person object in the response body
    res.status(200).json({
      "success": true,
      "message": "Person retrieved successfully",
      "data": person
    });
  });



//POST Method - Create a new person object.

router.post('/persons',function(req,res,next){ 
    personRepo.insert(req.body,function(data){ //we will recive body object in the body of post request
        //Wrap data in JSON
         res.status(201).json({
        "status":201,
        "statusText":"Created!",
        "message":"User Created Succesfully!",
        "data":data

    })
    },function(err){
        next(err);
    });
      
})


//PUT Method - Update a specific person object by its ID.

router.put('/persons/:id',function(req,res,next){  //which user we would like to update
    personRepo.update(req.params.id,req.body,function(data){  //we need to mention the id 
        //Wrap data in JSON
         res.status(200).json({
        "status":200,
        "statusText":"Update",
        "message":"User Updated Succesfully!",
        "data":data

    })
    },function(err){
        res.status(404).json({
            "status":404,
            "statusText":err.message,
            "error":err.message,
            "data":err
    
        })
    });
      
})
//update by index
router.put('/persons/:index', function(req, res, next) {
    // Retrieve the index of the person to be updated from the request parameters
    let index = parseInt(req.params.index);
  
    // Retrieve the person object to be updated from the Datalist array using the index
    let person = Datalist[index];
  
    // Update the properties of the retrieved person object with the new values from the request body
    person.name = req.body.name;
    person.gender = req.body.gender;
    person.age = req.body.age;
    person.email = req.body.email;
  
    // Send a success response with the updated person object in the response body
    res.status(200).json({
      "success": true,
      "message": "Person updated successfully",
      "data": person
    });
  });




//DELETE Method -Delete a specific person object by its ID.

router.delete('/persons/:id',function(req,res,next){  //which user we would like to update
    personRepo.delete(req.params.id,function(data){  //we need to mention the id 
        //Wrap data in JSON
         res.status(200).json({
        "status":200,
        "statusText":"User deleted",
        "message":"User with id "+req.params.id+" Deleted Succesfuly"

    })
    },function(err){
        res.status(404).json({
            "status":404,
            "statusText":err.message,
            "error":err.message,
            "data":err
    
        })
    });
      
})



//----------------------------------------------------------------------------------------------------------------
app.listen(5000,function(){  //Port number            
console.log("App is running on http://localhost:5000");  //to coniform app is runnning
})