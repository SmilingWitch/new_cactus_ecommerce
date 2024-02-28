"use client"
import style from "../../public/styles/Details.module.css"
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import Image from "next/Image"
import Link from "next/link"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from 'next/navigation';


export default function Details(){


    const router = useRouter();

    const handleBack = () => {
        console.log("back")
      router.back();
    };

    return(
        <div className={style.cont}>
            <div className="bx">
                <div className={style.header}>
                        <div className={style.back} onClick = {handleBack}>
                            <RiArrowLeftSLine className={style.icon}/>
                            <span>Back</span>
                        </div>
                </div>
                <div className={style.details_bx}>
                    <div className={style.gallery}>
                        <div className={style.images_bx}>
                            <div className={style.image}>
                                <Image 
                                src="/images/stephanie-harvey-T0inbt7nRME-unsplash.jpg"  
                                layout="fill"
                                objectFit="cover"
                                alt = "Description"></Image>
                            </div>
                            <div className={style.image}>
                                <Image 
                                src="/images/andrea-rico-Npfkyf94cik-unsplash.jpg"  
                                layout="fill"
                                objectFit="cover"
                                alt = "Description"></Image>
                            </div>
                            <div className={style.image}>
                                <Image 
                                src="/images/britta-preusse-p7KKwjP3s68-unsplash.jpg"  
                                layout="fill"
                                objectFit="cover"
                                alt = "Description"></Image>
                            </div>
                        </div>

                        <div className={style.image1}>
                            <Image 
                            src="/images/kari-shea-tcgMBsW4zlU-unsplash.jpg"  
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"></Image>
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <span>Name</span>
                            <div className={style.stars_bx}>
                            <GoStarFill/>
                            <GoStarFill/>
                            <GoStarFill/>
                            <GoStarFill/>
                            <GoStar/>
                            </div>
                        </div>
                        <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit cumque corrupti commodi hic dolorum! Nostrum, tempora culpa! Consectetur, facilis modi nihil iste vel in. Labore quis illum culpa officiis.</div>
                        <div className={style.btn}>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
                
                

            </div>

        </div>
    )
}