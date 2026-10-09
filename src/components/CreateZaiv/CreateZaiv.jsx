import React, { useState } from "react";

function CreateZaiv ({contractInstance,adres,role}){
    // let role = givRole(adres)

    let [adresShopsWork,setAdresShopsWork] = useState()

    let getAdresShop = (event)=>{
        setAdresShopsWork(event.target.value)
        console.log(event.target.value)
    }

    let btn = (event)=>{
        console.log("btn")
        console.log(event.target.textContent)
        if(event.target.textContent == "Запрос на повышение"){
            
            btnFunction (true,3)}
        
        if(event.target.textContent == "Запрос на понижение"){
            btnFunction (false,2)
        }
    }
    async function btnFunction (deystv,btnrole){
        console.log(btnrole)
        console.log(adresShopsWork)
        console.log(deystv)
        await contractInstance.methods.create_zaivka(btnrole,adresShopsWork,deystv).send({from:adres,gas:5000000})
        console.log(btnrole)
    }
    if(role == 2){
        return (
            <div>
                <h3>Create zaiv</h3>
                <div>
                    <input type="text" placeholder="Adres shop" onChange={getAdresShop}/>
                    <button onClick={btn}>Запрос на повышение</button>
                </div>
            </div>
        )
    }
    if(role == 3){
        return (
            <div>
                <h3>Create zaiv</h3>
                <div>
                    <input type="text" placeholder="Adres shop" onChange={getAdresShop}/>
                    <button onClick={btn}>Запрос на понижение</button>
                </div>
            </div>
        )
    }
}


export default CreateZaiv