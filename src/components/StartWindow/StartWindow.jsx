import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StartWindow.module.css"

function StartWindow(){

    let navigate = useNavigate()

    function autor (){
        navigate("/Autorization")
    }
    function registr (){
        navigate("/Registaration")
    }

    return (
        <div className={styles.start}>
            <button onClick={registr} className={styles.btnStr}>Регистрация</button>
            <button onClick={autor} className={styles.btnStr}>Авторизация</button>
        </div>
    )
}

export default StartWindow