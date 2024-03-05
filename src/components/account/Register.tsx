import style from "../../../public/styles/Register.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Register(){
    return(
        <div className={style.cont}>

            <div className={style.form}>
                <div className={style.logo}>
                    <div className={style.logo_name}><h1>Create your account</h1>{/*Cactus Haven*/}</div>

                </div>
                
                <form action="">
                    <div className={style.input_bx}>
                        <input type = "email" placeholder="user@gmail.com"></input>
                    </div>
                    <div className={style.input_bx}>
                        <input type = "password" placeholder="********"></input>
                    </div>
                </form>
                <div className={style.requirement}>
                    <span>La contrasena debe tener al menos:</span>
                    <span>- 8 caracteres</span>
                    <span>- 1caracter especial</span>
                    <span>- 1 mayuscula</span>
                    <span>- 1 numero</span>
                </div>
                <div className={style.btn}>
                    <button>Create account</button>
                </div>

                <div className={style.account}>
                    <div>Ya tienes una cuenta?</div>
                    <Link href="/account/login"><div className={style.log}>Login</div></Link>
                </div>
            </div>
        </div>
    )
}