"use client"
import style from "../../../../public/styles/NavbarSearch.module.css"
import Image from "next/image"
import Link from "next/link"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

interface MyComponentProps {
    setVisible: (visible: boolean) => void;
  }


export default function NavbarSearch(props: React.PropsWithChildren<MyComponentProps>){


    return(
        <div className={style.cont}>
                <div className={style.logo}>
                    <Link href="/home">
                        <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            width={90}
                            height={60}
                            alt="Description"/>
                    </Link>
                    
                </div>
                <div className={style.headers}>
                    <div className={style.input_bx}>
                        <input type="text" name="" id="" placeholder="Search..." />
                        <div className={style.icon_bx}><GoSearch className={style.icon}/>
                        </div>
                    </div>
                    
                </div>
            <div className={style.icon_bx}>
                <div className={style.icon}>
                    <FaBasketShopping/>
                </div>
                <div className={style.icon}>
                    <FaUser/>
                </div>
                <div className={style.icon} onClick={() => props.setVisible(true)}>
                    <TiThMenu/>
                </div>
            </div>
            
        </div>
    )
}