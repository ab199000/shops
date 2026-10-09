import React, { useState } from "react";

function AddAdmin ({contractInstance,adres,role,givAdres}) {

    let [adrNewAdm, setAdrNewAdm] = useState()

    let givAdr = (event)=>{
        console.log(event.target.value)
        setAdrNewAdm(event.target.value)
    }

    let btn = ()=>{
        btnAdd()
        givAdres(contractInstance)
        console.log(23)
    }

    async function btnAdd(){
        console.log(adres)
        let result = await contractInstance.methods.new_admin(adrNewAdm).send({from:adres,gas:500000})
        givAdres(contractInstance)
    }
    if(role==1){
        return (
            <div>
                <h3>Add Amin</h3>
                <div>
                    <input type="text" placeholder="Adres user" onChange={givAdr}/>
                    <button onClick={btn}>Add</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <h3>Add Amin</h3>
            <div>
                <input type="text" placeholder="Adres user" onChange={givAdr}/>
                <button onClick={btn}>Add</button>
            </div>
        </div>
    )
}

export default AddAdmin