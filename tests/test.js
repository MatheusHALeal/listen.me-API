
const request = require('request');
//import { expect, request } from 'chai';
const userController = require('../../src/user/userController');



describe('FirstTest', function() {

	let user = {name: "matheus",
				login: "gatona",
				password: "12345678",
				user:[]};	





  describe('new user test test ', function() {
    it('should return 201 and the user resource', async () => {
      const response = await request(userController).post(user);
    	
      //expect(response).to.have.status(201);

    });
    });
  });
