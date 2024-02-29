"use client"
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import NavbarSearch from "@/components/search_plants/NavbarSearch";
import {useState} from "react"
import  { ReactNode } from "react";
import useMediaQuery from '../../components/function/MediaQuery';

interface RootLayoutProps {
  children: ReactNode; // Define el tipo de children
}


export default function RootLayout({ children }: RootLayoutProps) {
  const [visible, setVisible] = useState(false)
  const isMobile = useMediaQuery('(max-width: 835px)');

 return (
   <>
   <SideBar visible = {visible} setVisible={setVisible} />
    {isMobile ? <NavbarSearch setVisible={setVisible}/> : <Navbar/>}
      
      
      
     <main >{children}</main>
 
   </>
 );
}

