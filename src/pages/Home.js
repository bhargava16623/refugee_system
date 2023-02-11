import React,{ Component } from 'react'
//import { UserProvider } from '../components/comps/RefugeeContext'
import { Refugeeform } from '../components/comps/Refugeeform'
import Web3 from 'web3';
import Refugeeabi from '../abis/Refugee.json';


class Home extends Component{

  async componentDidMount(){
    await this.loadblockchaindatas()
   }

   async loadblockchaindatas(){
    const providerURL = process.env.PROVIDERURL || "http://localhost:8545";


    const web3 = new Web3(providerURL)


    const accounts = await web3.eth.getAccounts()
    this.state({account: accounts[0]})

    const networkID = await web3.eth.getId()
    const networkData = Refugeeabi.networks[networkID]

    const abi = Refugeeabi.abi

    const address = Refugeeabi.networks[networkID].address

    if(networkData){
      const Refugee = web3.eth.Contract(abi,address)
      this.setState({Refugee})
    }else{
      window.alert('Refugee Contract is not deployed');
    }
   }
   constructor(){
    super()
    this.createUser = this.createUser.bind(this)
   }

   createUser(_userID,fname,lname,mobile,dob,nationality,gender){
    this.state.Refugee.methods.createUser(_userID,fname,lname,mobile,dob,nationality,gender).send({from:this.state.accounts})
    .once('receipt',(receipt)=>{
      window.alert("User added Successfully")
    })

   }

   render(){
    return (
     <div>
          <Refugeeform createUser = {this.createUser}/>
      </div>
    );
   }
}

export default Home;