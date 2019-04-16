
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const userController = require('./../src/user/userController');


chai.use(chaiHttp);
describe('FirstTest', function() {

	



describe('/POST user', () => {
        it('post: user', (done) => {
            let user = {name: "matheus",
				login: "gatona",
				password: "12345678",
			    user:[]};	
              
              chai.request('http://localhost:3000')
              .post('/src/user/userController')
              .send(user) // vamos enviar esse arquivo
              .end((err, res) => {
                  res.should.have.status(200);
                done();
              });
        });

    });
  });
