import { useEffect } from "react";
import Web3 from "web3";
import React from "react";
function Weeb3(params) {
    const providerURL = process.env.PROVIDERURL || "http://localhost:8545";
    useEffect(()=>{
        const web3 = new Web3(providerURL)
        let provider = window.ethereum;

        if(typeof provider !== 'undefined'){
            provider.request({method:'eth_requestAccounts'}).then(accounts =>{
                console.log(accounts);
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }, []);
    return<div>Web3</div>;



}

export default Weeb3;