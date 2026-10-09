import React from "react";
import ListShops from "../listShops/ListShops";
import {useState} from "react"

import styles from "./WindowCreateEntry.module.css"

function WindowCreateEntry ({contractInstance, adres,getEntrys,getBalance1,web3, role}) {

    let [shop, setShop] = useState([]);
    let [Entry, setEntry] = useState()
    let [estimation, setEstimation] = useState()

    let getAdresShop = (event)=>{
        setShop(event.target.value)
        console.log(event.target.value)
    }
    let entry = (event)=>{
        setEntry(event.target.value)
    }

    let est = (event)=>{
        setEstimation(event.target.value)
    }

    let btnEntry = async()=>{
        as (estimation,Entry,shop,adres,contractInstance,getEntrys,web3,getBalance1)
        // getBalance1(web3,adres)
    }
    console.log(role)
    if(role == 2){
        console.log(role)
        return (
            <div className={styles.createEntr}>
                <ListShops contractInstance = {contractInstance} getAdresShop = {getAdresShop}/>
                <input type="text" placeholder="Comment" onChange={entry}/>
                <input type="text" placeholder="Estimation" onChange={est} className={styles.btnCreate}/>
                <button onClick={btnEntry} className={styles.btnCreate}>Comment</button>
            </div>
        )
    }
    
}

async function as (estimation,Entry,shop,adres,contractInstance,getEntrys,web3,getBalance1){
    let result = await contractInstance.methods.create_entry(estimation,Entry,shop).send({from: adres, gas:2000000})
    getBalance1(web3,adres)
    getEntrys(contractInstance)
}

export default WindowCreateEntry