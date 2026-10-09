import React from "react";
import InputDan from "../InputDan/InputDan";

import styles from "./Registration.module.css"

function Registaration ({contractInstance}) {
    return (
        <div className={styles.aut}>
            <div className={styles.block}>
                <h1 className={styles.nadp}>Регистрация</h1>
                <InputDan contractInstance={contractInstance} action={"registr"}/>
            </div>
            
        </div>
    )
}

export default Registaration