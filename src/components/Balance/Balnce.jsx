import React, { useEffect, useState } from "react";
import Web3 from "web3";

function Balance ({adres,web3,getBalance1,balance}) {

    // let [balance, setBalance] = useState("")
    // getBalance1(adres,web3)
    
    
    useEffect(()=>{
        getBalance1(web3,adres)
        
    }, [balance])
    return (
        <p>Balance: {balance}</p>
    )
}



export default Balance