"use client"

import Image from "next/image"
import style from "../../../public/styles/Register.module.css"
import Link from "next/link" 
import  { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; // Define el tipo de children
}


export default function RootLayout({ children }: RootLayoutProps) {



 return (
   <>
   <div className="bx">
      <div className={style.navbar}>
          <div className={style.image_bx}>
                          <Link href="/home">
                          <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                                  layout="fill"
                                  objectFit="cover"
                                  alt = "Description"></Image>
                          </Link>
          </div>
      </div>

   </div>
    
     <main >{children}</main>
   </>
 );
}
