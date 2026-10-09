import React, { useEffect, useState } from "react";
import ListShops from "../listShops/ListShops";

import styles from "./Book.module.css"

function Book({contractInstance,entry,getEntrys,role}){

    let massEntr = []

    let [adres, setAdres] = useState([]);

    useEffect(()=>{
        getEntrys(contractInstance)
        console.log(entry)
    },[])

    let getAdresShop = (event)=>{
        setAdres(event.target.value)
        console.log(event.target.value)
    }
    console.log(entry)
    if(entry != undefined && role != 1){
        console.log(entry)
        sortEnt(entry,massEntr,adres)
        return(
            <div>
                
                <h3>Reviews</h3>
                <ListShops contractInstance={contractInstance} getAdresShop = {getAdresShop}/>
                <ul className={styles.ulBook}>
                    {massEntr.map(({login,estimation,comment,ocenka,shop,ochenki})=>(
                        <li>
                            <div className={styles.one}>
                                <p>shop:{shop}</p>
                                <p>Author: {login}</p>
                                <p>{comment}</p>
                                <p>estimation: {estimation}</p>
                            </div>
                            
                        </li>
                        
                    ))}
                </ul>
                
            </div>
        )
    }
}
    
function sortEnt(entry,massEntr,adres){
    console.log(entry,massEntr,adres)
    for(let i = 0; i < entry.length;i++){
        if(entry[i].shop == adres || adres == ""){
            massEntr.push(entry[i])
        }
    }
}
    

export default Book