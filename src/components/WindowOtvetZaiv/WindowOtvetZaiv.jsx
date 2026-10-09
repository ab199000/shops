import React, { useEffect, useState } from "react";
import BtnOtvetZaiv from "../BtnOtvetZaiv";

import styles from "./WindowOtvetZaiv.module.css"

function WindowOtvetZaiv ({contractInstance, adres, role}){

    let j = -1

    let [zaiv,setZaiv] = useState()

    let [id,setId] = useState()

    useEffect(()=>{
        getZaiv (contractInstance,setZaiv,setId)
    },[])

    let recycling = ()=>{
        getZaiv (contractInstance,setZaiv,setId)
    }

    
    if(role == 1){
        if(zaiv != undefined){
            return (
                <div>
                    <h3>Otvet zaiv</h3>
                    <div>
                        <ul>
                            {zaiv.map(({owner,role,shop,deystvie,status})=>{
                                j++
                                return(
                               <li className={styles.bl}>
                                    <p>User:{owner}</p>
                                    <p>Shop:{shop}</p>
                                    <BtnOtvetZaiv contractInstance={contractInstance} deystvie={deystvie} id={id[j]} adres={adres} recycling= {recycling}/>
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>
            )
        }
    }
    
    
}

async function getZaiv (contractInstance,setZaiv,setId){
    let massZaiv = []
    let massId = []
    let resulte = await contractInstance.methods.getZaiv().call()
    for(let i = 0;i < resulte.length;i++){
        if(!resulte[i].status){
            massZaiv.push(resulte[i])
            massId.push(i)
        }
    }
    setZaiv(massZaiv)
    setId(massId)
    console.log(resulte)
    console.log(massZaiv)
}

export default WindowOtvetZaiv