//-------------------------------------Returning array of users data-------------------------------------------------

let fs = require('fs'); //import module file system to read and write conent to file
let FILE_PATH = "./assets/persons.json"; //to read the file
let personRepo = {

    //GET METHOD  Retrieve a list of all person objects.
    get: function (resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { //if there's error he will get the error object if not he will get the data
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        })
    },

    //GET Method   Retrieve a specific person object by its ID.
    getById: function (id,resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { //if there's error he will get the error object if not he will get the data
            if (error) {
                reject(error);
            } else {
                let users =JSON.parse(data)
                let user = users.find((u)=>u.id == id);
                resolve(user);
            }
        })
    },


    //POST  Create a new person object.
    insert:function (user,resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { //if there's error he will get the error object if not he will get the data
            if (error) {
                reject(error);
            } else {
                let users =JSON.parse(data)
                if(user){
                    users.push(user)
                }
                fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                    if (error) {
                        reject(error);
                    }else{
                        resolve(user);
                    }
                })
            }
        })
    },


        //PUT  Update a specific person object by its ID.
        update:function (id,newUserData,resolve, reject) {
            fs.readFile(FILE_PATH, function (error, data) { //if there's error he will get the error object if not he will get the data
                if (error) {
                    reject(error);
                } else {
                    let users =JSON.parse(data)
                    let user = users.find((u)=>u.id == id); //Once we found the user after comparing the ids we need to update the data that is passed
                    if(user){
                        Object.assign(user,newUserData); //so it updates user using newUserData
                    } else{
                        let ex = new Error("User Not Found");
                        reject(ex);
                        return;
                    }
                    

                    fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                        if (error) {
                            reject(error);
                        }else{
                            resolve(user);
                        }
                    })
                }
            })
        },
        // update: function(index, newUserData, resolve, reject) {
        //     // Read the data from the file
        //     fs.readFile(FILE_PATH, function(error, data) {
        //       if (error) {
        //         reject(error);
        //       } else {
        //         // Parse the JSON data into an array of person objects
        //         let users = JSON.parse(data);
          
        //         // Find the person object to be updated using the index
        //         let user = users[index];
          
        //         if (user) {
        //           // Update the properties of the retrieved person object with the new values
        //           Object.assign(user, newUserData);
          
        //           // Write the updated data back to the file
        //           fs.writeFile(FILE_PATH, JSON.stringify(users), function(error) {
        //             if (error) {
        //               reject(error);
        //             } else {
        //               resolve(user);
        //             }
        //           });
        //         } else {
        //           // If the person object is not found, reject the promise with an error message
        //           let ex = new Error("User not found");
        //           reject(ex);
        //         }
        //       }
        //     });
        //   },
               //DELETE - Delete a specific person object by its ID.
               delete:function (id,resolve, reject) { //Same as read
                fs.readFile(FILE_PATH, function (error, data) { //if there's error he will get the error object if not he will get the data
                    if (error) {
                        reject(error);
                    } else {
                        let users =JSON.parse(data)
                        let user = users.find((u)=>u.id == id); //Once we found the user after comparing the ids we need to update the data that is passed
                        if(user){
                            Object.assign(user,newUserData); //so it updates user using newUserData
                        } else{
                            let ex = new Error("User Not Found");
                            reject(ex);
                            return;
                        }
                        
    
                        fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                            if (error) {
                                reject(error);
                            }else{
                                resolve(user);
                            }
                        })
                    }
                })
            },

                           //DELETE - Delete a specific person object by its ID.
                           delete:function (id,resolve, reject) { //Same as read
                            fs.readFile(FILE_PATH, function (error, data) { //we will read it //if there's error he will get the error object if not he will get the data
                                if (error) { 
                                    reject(error);
                                } else {
                                    let users =JSON.parse(data)
                                    let index = users.findIndex((u)=>u.id == id); //we need the index //Once we found the user after comparing the ids we need to update the data that is passed
                                    if(index >-1){ //we found the user
                                       users.splice(index,1);             //we are going to remove user using index
                                    } else{
                                        let ex = new Error("User Not Found");
                                        reject(ex);
                                        return;
                                    }
                                    
                
                                    fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                                        if (error) {
                                            reject(error);
                                        }else{
                                            resolve("User got Deleted");
                                        }
                                    })
                                }
                            })
                        },
}

module.exports = personRepo;