const express=require('express');

const route=express.Router();
const services = require('../service/render');
const controller= require('../controller/controller')

/** 
 * @description it's home.html (homepage)
 *@method GET/ 
 */
route.get('/',services.homeRoutes);
/** 
 * @description add a new user
 *@methodGET/add_all_user 
 */
route.get('/add_user',services.add_user);

/** 
 * @description update a document
 *@method GET/update_user
 */
route.get('/update_user',services.update_user);


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);



module.exports = route