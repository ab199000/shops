import React from "react";

function PanelDeystviyWithPeople({contractInstance,adres,role}){

    if(role == "Admin"){
        return
    }
    if(role == "Buyer"){
        return (
            <div>
                <button>повысить</button>
            </div>
        )
    }
    if(role == "Seller"){
        return (
            <div>
                <button>понизить</button>
            </div>
        )
    }
    return (
        <div>
            <input type="text" placeholder="Adres user"/>
            <input type="text" placeholder="Adres shop"/>
            <button>повысить</button>
            <button>понизить</button>
        </div>
    )
}

export default PanelDeystviyWithPeople