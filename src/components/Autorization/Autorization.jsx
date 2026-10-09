import React from "react";
import InputDan from "../InputDan/InputDan";
import styles from "./Autorization.module.css"

function Autorization({ contractInstance,adresChange }) {
  return (
    <div className={styles.aut}>
      <div className={styles.block}>
        <h1 className={styles.nadp}>Авторизация</h1>
        <InputDan contractInstance={contractInstance} action={"autoriz"} adresChange= {adresChange}/>
      </div>
      
    </div>
  );
}

export default Autorization