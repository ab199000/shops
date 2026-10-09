import React from "react";

function BtnOtvetZaiv ({contractInstance,deystvie,id,adres,recycling}) {


    let btnAdm = (event)=>{
        if(event.target.textContent == "Повысить" || event.target.textContent == "Понизить"){
            otvetZ(contractInstance,event.target.id, true,adres,recycling)
        }
        if(event.target.textContent == "Отклонить"){
            otvetZ(contractInstance,event.target.id, false,adres,recycling)
        }
        
    }

    if(deystvie){
        return(
            <div>
                <button onClick={btnAdm} id = {`${id}`}>Повысить</button>
                <button  onClick={btnAdm} id = {`${id}`}>Отклонить</button>
            </div>
            
        )
    }
    if(!deystvie){
        return(
            <div>
                <button onClick={btnAdm} id = {`${id}`}>Понизить</button>
                <button onClick={btnAdm} id = {`${id}`}>Отклонить</button>
            </div>
        )
    }
}

async function otvetZ(contractInstance,id,otvet,adres,recycling){
    let result = await contractInstance.methods.changing_roles(id,otvet).send({from:adres,gas:5000000})
    recycling()
}






export default BtnOtvetZaiv