import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";

import styles from "./Shops.module.css"

function Shops({contractInstance,adres,role,web3}){

    let [shops,setShops] = useState([])

    let [shopAdres,setShopAdres] = useState("")
    let [name,setName] = useState("")
    let [city,setCity] = useState("")

    useEffect(()=>{
        givShops(contractInstance,setShops)
        console.log(shops)
    },[])

    // console.log(web3.eth.accounts.create(web3.utils.randomHex(32)).address)
    let getAdres = (event)=>{
        setShopAdres(event.target.value)
        console.log(event.target.value)
        console.log(1)
    }
    let getName = (event)=>{
        setName(event.target.value)
        console.log(event.target.value)
    }
    let getCity = (event)=>{
        setCity(event.target.value)
        console.log(event.target.value)
    }

    let click = ()=>{
        addShop(contractInstance,adres,shopAdres,name,city,setShops)
        givShops(contractInstance,setShops)
    }

    let deleteShop = (event)=>{
        let shopDel = event.target.id
        console.log(event.target.id)
        deleteShopFun(contractInstance,adres,shopDel,givShops,setShops)
    }
    if(role==1){
        return (
            <div>
                <div className={styles.addShBlock}>
                    <h3>Add shop</h3>
                    <input type="text" placeholder="Adres shop" onChange={getAdres}/>
                    <input type="text" placeholder="Name shop" onChange={getName}/>
                    <input type="text" placeholder="City" onChange={getCity}/>
                    <button onClick={click}>Add</button>
                </div>
                <div className="">
                    <h3>List shops</h3>
                    <ul className={styles.ulShop}>
                        {shops.map(({adres, status_work})=>(
                            <li>
                                <div>
                                    <p>Adres: {adres}</p> 
                                </div>
                                <button id = {adres} className={styles.btnDel} onClick={deleteShop}>Delete</button>
                            </li>    
                        ))}
                    </ul>
                </div>            
            </div>
        )
    }
}

async function givShops(contractInstance,setShops){
    let result = await contractInstance.methods.getShops().call()
    console.log(result)
    let mass = []
    for(let i = 0; i < result.length;i++){
        if(result[i].status_work){
            mass.push(result[i])
        }
    }
    setShops(mass)
}

async function addShop(contractInstance,adres,shop,nameShop,city,setShops){
    let result = await contractInstance.methods.registration_shop(shop,nameShop,city).send({from:adres, gas: 500000})
    givShops(contractInstance,setShops)
}

async function deleteShopFun(contractInstance,adres,shopDel,givShops,setShops){
    console.log(adres,shopDel)
    let result = await contractInstance.methods.remove_shop(shopDel).send({from:adres,gas:500000})
    givShops(contractInstance,setShops)
}


export default Shops