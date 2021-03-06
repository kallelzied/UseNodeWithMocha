var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function(){
    beforeEach('this function initialized Roles', function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['user']);
    });
    describe('isAuthorized', function(){
        
        it('Should return false if not authorized', function(){
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.false;
        })
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        })
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    })
    describe('isAuthorizedAsync', function(){
        it('Should return false if not authorized', function(done){
            authController.isAuthorizedAsync('admin', 
            function(isAuth){
                isAuth.should.be.false;
                done();
            });
        })
    })
    describe('isAuthorizedPromise', function(){
        it('Should return false if not authorized', function(){
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        })
    })
    describe('getIndex', function(){
        it('should render index', function(){
            var req = {};
            var res = {
                render: sinon.spy()
            };
            authController.getIndex(req, res);
//          console.log(res.render);
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        })
    })
});