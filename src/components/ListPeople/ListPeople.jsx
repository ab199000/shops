import React, { useEffect, useState } from "react";
import PanelDeystviyWithPeople from "../PanelDeystviyWithPeople"
import AddAdmin from "../AddAdmin/AddAdmib";

function ListPeople({contractInstance,adresU,role}) {
    let [adres, setAdres] = useState([]);

    useEffect(() => {
        givAdres(contractInstance);
    }, [])

    async function givAdres(contractInstance) {
        let mass = []
      let result = await contractInstance.methods
        .getPeoples()
        .call();
        console.log(result)
        for(let i = 0;i<  result.length;i++){
                let role = await contractInstance.methods.view_people(result[i].adres).call()
                if(role.psevdo_role == 1){
                    role = "Admin"
                }
                if(role.psevdo_role == 2){
                    role = "Buyer"
                }
                if(role.psevdo_role == 3){
                    role = "Seller"
                }
                console.log(role)
                mass.push({adres: result[i].adres,role: role})
        }
        setAdres(mass)
        console.log(adresU)
    }
    if(role == 1){
        return (
            <div>
                <h3>List peoples</h3>
                <ul>
                    {adres.map(({ adres, role }) => (
                        <li>
                            <p>{adres}</p>
                            <p>{role}</p>
                            {/* <PanelDeystviyWithPeople contractInstance = {contractInstance} adres = {adres} role ={role}/> */}
                        </li>
                    ))}
                </ul>
                <AddAdmin contractInstance={contractInstance} adres = {adresU} role={role} givAdres={givAdres}/>
                {/* <input list="users" onChange={} placeholder="Adress"/> */}
            </div>
        )
    }
    
}



export default ListPeople