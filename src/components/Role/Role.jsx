import React, { useEffect, useState } from "react";

function Role ({contractInstance,adres}) {

    let [id_role, setId_role] = useState()

    useEffect(()=>{
        getRole()

    },[id_role])

    let role = nameRole(id_role)

    
    // console.log(role)
    return(
        <p>Role: {role}</p>
    )

    async function getRole(){
        if(adres != undefined){
            let result = await contractInstance.methods.peoples(adres).call()
            setId_role(result.psevdo_role)
        }
    } 

    function nameRole (id_role) {
        // console.log(id_role)
        switch(id_role){
            case "1": return "Administrator";break;
            case "2": return "Buyer";break;
            case "3": return "Seller";break;
            case "4": return "Shop";break;
        }
    }
}

export default Role