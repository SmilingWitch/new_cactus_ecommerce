"use client"
import {useState} from "react"
import NavbarSearch from "../components/search_plants/NavbarSearch";
import SideBar from "../components/SideBar";



export default function RootLayout({ children }) {


  const [visible, setVisible] = useState(false)


  return (
    <>
       <SideBar visible = {visible} setVisible={setVisible} />
       <NavbarSearch setVisible={setVisible}/>
      <main >{children}</main>
  
    </>
  );
 }

