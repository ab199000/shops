import React, { useEffect, useState } from "react";

function ListShops({contractInstance,getAdresShop}) {
    let [adres, setAdres] = useState([]);

    useEffect(() => {
        givAdres(contractInstance);
    }, [])

    async function givAdres(contractInstance) {
        let mass = []
      let result = await contractInstance.methods
        .getShops()
        .call();

        for(let i = 0; i < result.length;i++){
            if(result[i].status_work){
                mass.push(result[i])
            }
        }
        setAdres(mass)
    }
    return (
        <div>
            <datalist id="users">
                {adres.map(({ adres, status }) => (
                    <option key={adres} value={adres}></option>
                ))}
            </datalist>
            <input type="text" list="users" onChange={getAdresShop} placeholder="Adress"/>
        </div>
    )
}



export default ListShops