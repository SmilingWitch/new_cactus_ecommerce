"use client"



import {useState} from "react"
import NavbarSearch from "../components/search_plants/NavbarSearch";



export default function RootLayout({ children }) {


 return (
   <>
      <NavbarSearch/>
     <main >{children}</main>
 
   </>
 );
}

