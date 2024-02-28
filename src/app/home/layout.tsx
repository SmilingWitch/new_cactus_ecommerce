"use client"
import {useState} from "react"
import Navbar from "../components/Navbar"
import  { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; // Define el tipo de children
}


export default function RootLayout({ children }: RootLayoutProps) {


 return (
   <>
      <Navbar/>
     <main >{children}</main>
 
   </>
 );
}

