"use client"
import Contact from "@/components/Contact";
import SideBar from "@/components/SideBar";
import NavbarSearch from "@/components/search_plants/NavbarSearch";
import {useState} from "react"
import  { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; // Define el tipo de children
}

export default function RootLayout({ children }: RootLayoutProps) {


  const [visible, setVisible] = useState(false)


  return (
    <>
       <SideBar visible = {visible} setVisible={setVisible} />
       <NavbarSearch setVisible={setVisible}/>
      <main >{children}</main>
      <Contact/>
  
    </>
  );
 }

