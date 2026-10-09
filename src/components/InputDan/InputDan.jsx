import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import PersonslKab from "../PersonalKab/PersonalKab"

import styles from "./InputDan.module.css"

function InputDan({ contractInstance,action,adresChange }) {

    let [inputOne, setInputOne] = useState("")
    let [inputTwo, setInputTwo] = useState("");

    const navigate = useNavigate()

    function rik() {
        if (action == "autoriz") {
            atoriz(contractInstance, inputOne, inputTwo, navigate);
            adresChange(inputOne)
            return;
        }
        registrat(contractInstance, inputOne, inputTwo, navigate)


    }

  return (
    <div className={styles.blok}>
      <input
        type="text"
        placeholder="Адрес"
        onChange={(event) => (setInputOne(event.target.value))}
      />
      <input
        type="text"
        placeholder="Пароль"
        onChange={(event) => setInputTwo(event.target.value)}
      />
          <button onClick={rik} >OK</button>
    </div>
  );
}

async function atoriz(contractInstance, inputOne, inputTwo,navigate) {
    
    let result = await contractInstance.methods
      .autorization_people(
        inputOne,
        await Web3.utils.soliditySha3({ type: "string", value: inputTwo })
      )
      .call();
    console.log(result)
    if (result) {
        navigate("/PersonslKab")
    }
}

async function registrat(contractInstance, inputOne, inputTwo, navigate){
    await contractInstance.methods.registration_people(
    inputOne, await Web3.utils.soliditySha3({ type: "string", value: inputTwo })).send({from: inputOne, gas: 200000});
    navigate("/Autorization")

}
export default InputDan