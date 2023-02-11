const { assert } = require('chai')

const Refugee = artifacts.require("./Refugee.sol")
require('chai').use(require('chai-as-promised')).should()
contract('Refugee',(accounts) => {
    let refugee

    before(async() => {
        refugee = await Refugee.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async () => {
            const address = refugee.address
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)
        })
    })

    describe('CreateUser', async() => {
        let result, NoofUser;
        before(async() => {
            result = await refugee.createUser('Ashwin02','Ashwin','Kumar','02-10-2002','9080980256','India',20);
            NoofUser = await refugee.noofUser();
        })
        
        it('create Refugee', async () => {
            console.log(result.logs)
            //Success
            const event = result.logs[0].args
            assert.equal(NoofUser,1,'No of User is 1')
            assert.equal(event.UserId,'Ashwin02','userId is correct')
            assert.equal(event.fName,'Ashwin','First Name is correct')
            assert.equal(event.lName,'Kumar','Last Name is correct')
            assert.equal(event.dob,'02-10-2002','Dob is correct')
            assert.equal(event.mobileno,'9080980256','Mobile Number is correct')
            assert.equal(event.age.toNumber(),20,'Age is correct')
        })
    })

    describe('getUserDetails', async() => {
        let 
        before(async() => {

        })
    })
})










































             //1-Failure : User Must have UserId
            //await refugee.createUser('','Ashwin','Kumar','02-10-2002','9080980256','India',20).should.be.rejected;
            //2-Failure : User Must have FirstName
            //await refugee.createUser('Ashwin02','','Kumar','02-10-2002','9080980256','India',20).should.be.rejected;
            // //3-Failure : User Must have Last Name 
            // await refugee.createUser('Ashwin02','Ashwin','','02-10-2002','9080980256','India',20).should.be.rejected;
            // //4-Failure : User Must have Dob 
            // await refugee.createUser('Ashwin02','Ashwin','kumar','','9080980256','India',20).should.be.rejected;
            // //5-Failure : User Must have Mobile Number 
            // await refugee.createUser('Ashwin02','Ashwin','kumar','02-10-2002','','India',20).should.be.rejected;
            // //6-Failure : User Must have Nationality
            // await refugee.createUser('Ashwin02','Ashwin','kumar','02-10-2002','9080980256','',20).should.be.rejected;
            // //Failure : User Must have Age
            // await refugee.createUser('Ashwin02','Ashwin','kumar','02-10-2002','9080980256','India',0).should.be.rejected;
            