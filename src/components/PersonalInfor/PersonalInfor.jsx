import React, { useEffect, useState } from "react";

function PersonalInfor({contractInstance}) {
    let [adres, setAdres] = useState([]);

    useEffect(() => {
        givAdres(contractInstance);
    }, [])

    async function givAdres(contractInstance) {
      let result = await contractInstance.methods
        .view_people_shop("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2")
        .call();
        setAdres(result)
    }
    return (
        <div>
            <datalist id="users">
                {adres.map(({ adres, status }) => (
                    <option key={adres} value={adres}></option>
                ))}
            </datalist>
            <input list="users" />
        </div>
    )
}



export default PersonalInfor