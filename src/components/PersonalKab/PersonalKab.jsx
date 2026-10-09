import React, { useEffect, useState } from "react";
import PersonalInfor from "../PersonalInfor";
import Balance from "../Balance/Balnce";
import Role from "../Role/Role";
import Book from "../Book/Book";
import WindowCreateEntry from "../WindowCreateEntry/WindowCreateEntry";
import Shops from "../Shops/Shops";

import styles from "./PersonalKab.module.css"
import ListPeople from "../ListPeople/ListPeople";
import CreateZaiv from "../CreateZaiv";
import WindowOtvetZaiv from "../WindowOtvetZaiv"
import AddAdmin from "../AddAdmin/AddAdmib";

function PersonalKab({contractInstance,adres,web3}) {

  let [entry, setEntry] = useState()

  let [balance, setBalance] = useState("")

  let [role, setRole] = useState("")

  useEffect(()=>{
    getRole(adres)
  },[role])

  useEffect(()=>{
    getBalance1(web3,adres)
  },[balance])

  useEffect(()=>{
    getEntrys(contractInstance)
  },[])

  let getEntry = (mass)=>{
    setEntry(mass)
  }

  let getRole1 = (role)=>{
    setRole(role)
  }

  async function getEntrys(contractInstance){
    let result = await contractInstance.methods.getBook().call()
    getEntry(result)
  }

  async function getBalance1(web3,adres){
    if(adres != undefined){
        let result = await web3.eth.getBalance(adres)
        let ethir = web3.utils.fromWei(result, "ether")
        setBalance(ethir)
    }
  }

  async function getRole(adres){
    if(adres != undefined){
      let result = await contractInstance.methods.view_people(adres).call()
        setRole(result.role)
    }
  }


console.log(role)
  return (
    <div>
        <div className={styles.card}>
          <p>Adres: {adres}</p> 
          <Balance adres = {adres} web3 = {web3} getBalance1= {getBalance1} balance ={balance}/>
          <Role contractInstance={contractInstance} adres = {adres}/>
        </div>
        
        <Book contractInstance={contractInstance} entry={entry} getEntrys={getEntrys} role={role}/>
        {/* <PersonalInfor contractInstance={contractInstance} /> */}
        <WindowCreateEntry contractInstance={contractInstance} adres = {adres} getEntrys={getEntrys} getBalance1 = {getBalance1} web3 = {web3} role={role}/>
        <Shops contractInstance={contractInstance} adres = {adres} role={role} web3 = {web3}/>
        <ListPeople contractInstance={contractInstance}  adresU = {adres} role={role}/>
        <CreateZaiv contractInstance={contractInstance} adres = {adres} role={role}/>
        <WindowOtvetZaiv contractInstance={contractInstance} adres = {adres} role={role}/>
        {/* <AddAdmin contractInstance={contractInstance} adres = {adres} role={role}/> */}
    </div>
  );
}


export default PersonalKab;