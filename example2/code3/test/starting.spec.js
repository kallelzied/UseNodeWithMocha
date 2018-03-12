var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function(){
    it('should deal with objects', function(){
        var obj = {name: 'Zied', gender:'male'};
        var objB = {name: 'Zied', gender:'male'};

        obj.should.have.property('name').equal('Zied');
        obj.should.deep.equal(objB);
    })
    it('should allow testing nulls', function () {
        var iAmNull = null;
        should.not.exist(iAmNull);
    })
});