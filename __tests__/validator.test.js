'use strict';
const validator=require('../src/middleware/validator');

describe('Validator Test',()=>{
    let req={ query: {name:""}};
    let res={};
    let next=jest.fn();

    test('Test validate name ', ()=>{
        validator(req,res,next);
        expect(next).toHaveBeenCalledWith('Enter a name');
    })
})