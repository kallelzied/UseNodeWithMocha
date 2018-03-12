var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
    beforeEach('this function initialized Roles', function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['user']);
    });
    describe('isAuthorized', function(){
        
        it.only('Should return false if not authorized', function(){
            assert.equal(false, authController.isAuthorized('admin'));
        })
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        })
        it.only('should not allow a get if not authorized');
        it('should allow get if authorized');
    })
    describe.skip('isAuthorizedAsync', function(){
        it('Should return false if not authorized', function(done){
            authController.isAuthorizedAsync('admin', 
            function(isAuth){
                assert.equal(false, isAuth);
                done();
            });
        })
    })
});