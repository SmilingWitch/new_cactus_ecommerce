import style from "../../../public/styles/Home.module.css"
import Image from "next/image"
import { GoSearch } from "react-icons/go";
import CategoriesCard from "./CategoriesCard";
import { PiCactusFill } from "react-icons/pi";
import OfferCard from "./OffertCard";
import TrendigCard from "./TrendingCard";
import PickCard from "./PickCard";
import BlogCard from "./BlogCrad";
import Link from "next/link"

export default function Home(){
    return(
        <div className={style.cont}>
            <div className={style.bx}>

            <div className={style.front_page}>
                <div className={style.header}>
                    <div>
                        <h1>Explore a variety of cactus and succulents for your collection</h1>
                        <h3>Browse by type, size, or featured items!</h3>
                    </div>
                    

                    <div className={style.search_bx}>
                        <div className={style.input_bx}>
                            <input type="text" name="" id="" placeholder="What plant are you searching for?" />
                            <Link href="/search">
                                <div className={style.icon_bx}><GoSearch className={style.icon}/>
                                </div>
                            </Link>
                        </div>
                        <div className={style.btn}>
                        <Link href="/search">
                            <button>Search</button>
                        </Link>
                        </div>

                    </div>
                </div>
                
                <div className={style.front_img_bx}>
                    <Image 
                        src="/images/junior-rodriguez-gsCecg8nrAY-unsplash.jpg"  
                        layout="fill"
                        objectFit="cover"
                        alt = "Description"></Image>
                </div>
            </div>

            <div className={style.categories}>
                <h2>Categories</h2>
                <div className={style.categories_bx}>
                    <CategoriesCard name="Cactus" url = "/images/diego-lozano-kGnRkbKnqq4-unsplash.jpg" redirect_url=""/>
                    <CategoriesCard name="Succulents" url = "/images/erol-ahmed-aIYFR0vbADk-unsplash.jpg" redirect_url =""/>
                    <CategoriesCard name="Fertilizers" url = "/images/daniel-oberg-sEApBUS4fIk-unsplash.jpg" redirect_url =""/>
                    <CategoriesCard name="Planters" url = "/images/scott-webb-WwWkgOMU8H8-unsplash.jpg" redirect_url =""/>
                    <CategoriesCard name="Tools &" url = "/images/david-rangel-dAeQlhD7zRk-unsplash.jpg" redirect_url =""/>
                    <CategoriesCard name="Books &" url = "/images/ha-nguy-n-2s1cB4QRid4-unsplash.jpg" redirect_url =""/>
                </div>
            </div>

            <div className={style.offets_bx}>
                <div className={style.special}>
                    <div className={style.special_header}>
                        <div className={style.special_icon_bx}>
                            <PiCactusFill className={style.special_icon}/>
                        </div>
                        <div className={style.header1}>
                            Special offers
                        </div>

                    </div>
                    <div className={style.offer}>
                        <OfferCard  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(1).jpg"/>
                        <OfferCard  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(1).jpg"/>
                    </div>
                    <div className={style.counter}>
                        <div className={style.counter_header}>
                            <div className={style.principal}>Limited stock</div>
                            <div className={style.secundary}>Hurry up!</div>
                            <div className={style.hour}>
                                <span>1</span>
                                <span>0</span>
                                <span>:</span>
                                <span>5</span>
                                <span>0</span>
                            </div>
                        </div>
                        

                    </div>
                </div>
                <div className={style.trending}>
                    <div className={style.trending_cont}>
                        <div className={style.special_header}>
                            <div className={style.special_icon_bx}>
                                <PiCactusFill className={style.special_icon}/>
                            </div>
                            <div className={style.header1}>
                                Trending products
                            </div>
                        </div>
                        <div className={style.trendingBtx}>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                            <TrendigCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} old_price = {8.00}/>
                        </div>

                    </div>
                    <div className={style.picks}>

                        <div className={style.special_header}>
                            <div className={style.special_icon_bx}>
                                <PiCactusFill className={style.special_icon}/>
                            </div>
                            <div className={style.header1}>
                                Popular Picks
                            </div>
                        </div>
                        <div className={style.pick}>
                            <PickCard   url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(6).jpg" header = "Cactus accesories" secundary_header="Pots, Tools, Decorations"/>
                            <PickCard   url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(6).jpg" header = "Succulent soil mix" secundary_header="Perfect for your plant collection"/>
                        </div>

                    </div>
                    
                </div>

            </div>

            </div>
         

            <div className={style.blog}>
                <div className={style.bx}>
                    <h2>Visit our blog</h2>
                    <div className={style.blog_card_bx}>
                        <BlogCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(7).jpg" header="5 Tips for Healthy Succulents" secundary_header="Learn how to care for your succulents and keep them thriving"/>
                        <BlogCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si(2).jpg" header="5 Tips for Healthy Succulents" secundary_header="Learn how to care for your succulents and keep them thriving"/>
                        <BlogCard url="/images/conjunto_minimalista_de_macetas_para_plantas_si.jpg" header="5 Tips for Healthy Succulents" secundary_header="Learn how to care for your succulents and keep them thriving"/>
                    </div>

                </div>
            </div>

        </div>
    )
}