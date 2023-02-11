// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract trans {

     // Register user
    struct User {
        string fName;
        string lName;
        string mobile;
        string dob;
        uint256 age;
        string nationality;
        string gender;
    }
    
    // Variables - uint
    uint256 noofUser = 0;
    uint256 k=0;
    //variables - bool
    bool private transcationStatus = false;
    bool loginstatus = false;


    //mapping
    mapping (string => address payable) public usersWithAddress;
    mapping (string => User) public users;
    mapping (uint256 => string) public allUserId;
    mapping(string => bytes32) public usernamecreditainals;  //Store username;
    mapping(string => bytes32) public passwordcreditainals; //Store password;
    mapping (bytes32 => Transaction) public transactions; // for each transcation id corresponding transcation details are stored
    mapping(string => bytes32[]) public translog; //       userid   transcationids for each users transcationids are mapped with them
    mapping(string => bytes32[]) public receivetrans;

    //Events
    event flag(bytes32 s1);
    event check(string sender, string receiver, uint256 amount, uint256 datetime);
    event status(bool transcationStatus, uint256 subsidy);
    event loopchk (string str1, address ad1);

    // create a users
    function createUser(string memory _userId, string memory _fName, string memory _lName, string memory _mobile, string memory _dob, uint256 _age, string memory _nationality, string memory _gender) public {
        if(!chkexisitinguserId(_userId)){
            users[_userId] = User(_fName, _lName, _mobile, _dob, _age,_nationality,_gender);
            noofUser++;
            allUserId[k] = _userId;
            k++;
        }
    }

    //Function used to check existing userid which promotes to create unique userId;
    function chkexisitinguserId(string memory _userId) public view returns (bool) {
        bool isexist = false;
        for(uint a =0;a<k;a++){
            if(keccak256(abi.encodePacked(_userId)) == keccak256(abi.encodePacked(allUserId[a]))){
                isexist = true;
                break;
            }
        }
         return isexist;
    }

    //Returns wheather the user exist or not
    function getuserbool(string memory _userId, string memory _Sname) public view returns (bool){
        User memory user = users[_userId];
        return keccak256(abi.encodePacked(user.fName)) == keccak256(abi.encodePacked(_Sname));
    }

    function mapaddress(string memory _userId, address payable _addr) public{
        usersWithAddress[_userId] = _addr;
    }

    function getuserAddr(string memory _userId) public view returns (address payable){
        return usersWithAddress[_userId];
    }

    //Returns user details
    function getUser(string memory _userId) public view returns (string memory, string memory, string memory, string memory, uint256, string memory, string memory) {
        User memory user = users[_userId];
        return (user.fName, user.lName, user.mobile, user.dob, user.age, user.nationality, user.gender);
    }

    // Returns total number of users
    function getnoofUser() public view returns (uint256){
        return noofUser;
    }

     //Setup initial user creditanials for 1st time login
    function createuserNameandpassword(string memory _user_Id, string memory _firstname, string memory mobile, string memory dob) public{
        usernamecreditainals[_user_Id] = keccak256(abi.encodePacked(_user_Id, mobile));
        passwordcreditainals[_user_Id] = keccak256(abi.encodePacked(_firstname, dob));
    }

    //update user creditanials of the user 
    function updateusercreditainals(string memory _user_Id, string memory _username, string memory _password, string memory mobile, string memory dob) public {
        usernamecreditainals[_user_Id] = keccak256(abi.encodePacked(_username, mobile));
        passwordcreditainals[_user_Id] = keccak256(abi.encodePacked(_password, dob));
    }

    event logindetails(bytes32 username, bytes32 password);
    //check user creditanials for logging in 
    function checkusercreditanials(string memory _userName, string memory _passWord,string memory _userId, string memory mobile, string memory dob) public returns (bool){
          if((keccak256(abi.encodePacked(_userName,mobile)) == usernamecreditainals[_userId]) && (keccak256(abi.encodePacked(_passWord,dob)) == passwordcreditainals[_userId])){
              loginstatus = true;
              emit logindetails(usernamecreditainals[_userId], passwordcreditainals[_userId]);
          }
          return loginstatus;
    }

    //Transcation Structure
    struct Transaction {
        string sender;
        string receiver;
        uint256 amount;
        string message;
        uint256 datetime;
    }

    //storeTranscationDetails => store the details of each transcations 
    function storeTransactionDetails(string memory _userId, string memory _sender, string memory _receiver, string memory _recID, uint256 _amount, string memory _message, uint256 _datetime) public {
        //unique transferid is created using keccak256 hash by passing transcation details and hash is produced as output
        bytes32 transferid = keccak256(abi.encodePacked(_sender, _receiver, _amount, _message, _datetime));
        //Hash is used as index for storing each transcation and also retrieved using this hash
        transactions[transferid] = Transaction(_sender, _receiver, _amount, _message, _datetime);
        translog[_userId].push(transferid);
        receivetrans[_recID].push(transferid);

        emit flag(transferid);
    }
    // this function returns value of each function for corresponding transferid         
    function gettranscationid(bytes32 _tid) public view returns (string memory, string memory, uint256, uint256){

        return (transactions[_tid].sender, transactions[_tid].receiver,transactions[_tid].amount,transactions[_tid].datetime);
    }

    
    
    //returns all the transcations done by the each users by passing userid as input and returns as array of strings
    function gettranscationhistory(string memory _userId) public returns (string[] memory , 
                                                                          string[] memory, 
                                                                          uint256[] memory, 
                                                                          uint256[] memory)
        {
    
        //len stores the total number of transcation done by the user.
        uint256 len = translog[_userId].length;
        string[] memory sender    = new string[](len);
        string[] memory receiver  = new string[](len);
        uint256[] memory amount   = new uint256[](len);
        uint256[] memory datetime = new uint256[](len);
        
        for(uint256 i=0;i<translog[_userId].length;i++){
          
          sender[i]   = transactions[translog[_userId][i]].sender;
          receiver[i] = transactions[translog[_userId][i]].receiver;
          amount[i]   = transactions[translog[_userId][i]].amount;
          datetime[i] = transactions[translog[_userId][i]].datetime;

          emit check(sender[i], receiver[i],amount[i], datetime[i]);
        }
        
        return (sender, receiver,amount,datetime);
    }
    //ReceiveTranscationHistory
    function getreceivetranscationhistory(string memory _userId) public returns(string[] memory, 
                                                                                string[] memory,
                                                                                uint256[] memory,
                                                                                uint256[] memory)
    {
       //len stores the total number of transcation done by the user.
                      uint256 len = receivetrans[_userId].length;
        string[]  memory sender   = new string[] (len);
        string[]  memory receiver = new string[] (len);
        uint256[] memory amount   = new uint256[](len);
        uint256[] memory datetime = new uint256[](len);

        for(uint256 i=0;i<receivetrans[_userId].length;i++){
          
          sender[i]   = transactions[receivetrans[_userId][i]].sender;
          receiver[i] = transactions[receivetrans[_userId][i]].receiver;
          amount[i]   = transactions[receivetrans[_userId][i]].amount;
          datetime[i] = transactions[receivetrans[_userId][i]].datetime;

          emit check(sender[i], receiver[i],amount[i], datetime[i]);
        }
        
        return (sender,receiver,amount,datetime);


    }

   
   

    constructor() payable{}

    receive() external payable {}

    function checktransfertype(string memory str1,string memory str2)public pure returns (bool) {
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }
    // Transfer Money
    function transfermoney(
        string memory _Sname, 
        string memory _S_userid, 
        string memory _Rname, 
        string memory _R_userid,
        string memory transtype,  
        uint256 amt) external payable{
                
            address payable temp;
            uint256 amount =0;
            //TransferType    -   subsidy allocation  
            //petrol          =    20%
            //Food            =    20%
            //LPG             =    15%
            //1000000000000000000
             
             if(getuserbool(_S_userid, _Sname) && getuserbool(_R_userid,_Rname)){
                 //Retrieve address of receiver
                 temp = getuserAddr(_R_userid);

                if(checktransfertype("petrol",transtype)){
                    //deducting 20 % amount total amount 
                    amount = (amt*20)/100;
                    amt = amt - amount;
                    temp.transfer(amt);
                    transcationStatus = true;
                    uint256 time = block.timestamp;
                    storeTransactionDetails(_S_userid, _Sname, _Rname, _R_userid, amt, transtype, time );
       
                    emit status(transcationStatus , amt);
                }
                
                else if(checktransfertype("food",transtype)){
                    
                    //deducting 20 % amount total amount 
                    amount = (amt*20)/100;
                    amt = amt - amount;
                    temp.transfer(amt);
                    transcationStatus = true;
                    uint256 time = block.timestamp;
                    storeTransactionDetails(_S_userid, _Sname, _Rname, _R_userid, amt, transtype, time );
       
                    emit status(transcationStatus , amt);
                }
                
                else if(checktransfertype("LPG",transtype)){
                    
                    //deducting 20 % amount total amount 
                    amount = (amt*15)/100;
                    amt = amt - amount;
                    temp.transfer(amt);
                    transcationStatus = true;
                    uint256 time = block.timestamp;
                    storeTransactionDetails(_S_userid, _Sname, _Rname, _R_userid, amt, transtype, time );
       
                    emit status(transcationStatus , amt);
                }
                
                else{

                    temp.transfer(amt);
                    transcationStatus = true;
                    uint256 time = block.timestamp;
                    storeTransactionDetails(_S_userid, _Sname, _Rname, _R_userid, amt, transtype, time );
       
                    emit status(transcationStatus, amt);
                }
            }
        }

        function getwalletbalance(address addr) public view returns(address) {

        }



        function sendsubsidyfund(uint amt) external payable{
            string memory _user_id = "";
            address payable tempAdd;

            for(uint256 j=0;j<k;j++){
                _user_id = allUserId[j];
                tempAdd = usersWithAddress[_user_id];
                tempAdd.transfer(amt);
                emit loopchk (_user_id,tempAdd);
            }
        }

    //function getloan(string memory _userId)


//  contracts need to develop
//  +---------+------------------------------+----------------+
//  | Number  |      Contract Name           |    Status      |
//  |---------+------------------------------+----------------+
//  |  1      |     user registration        |     Done ✅    |
//  |  2      |      Retrieve users          |     Done ✅    |
//  |  3      |  Store transcations details  |     Done ✅    |
//  |  4      | Retrieve transcation details |     Done ✅    |
//  |  5      |       Transfermoney          |     Done ✅    |
//  |  6      |       Receive History        |     Done ✅    |
//  |  7      |       Get Loan               |     pending ❌ |
//  |  8      |       Refugee subsidy fund   |     Done ✅    |
//  |  9      |       Circle of Trust        |     pending ❌ |
//  |  10     |       User Login             |     Done ✅    |
//  |  11     |     Business Registration    |     pending ❌ |
//  |  12     |    Government Functionalities|     pending ❌ |
//  +---------+------------------------------+----------------+
//
//

}