import style from "../../../public/styles/Register.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Login(){
    return(
        <div className={style.cont}>

            <div className={style.form}>
                <div className={style.logo}>
                    <div className={style.logo_name}><h1>Log in</h1>{/*Cactus Haven*/}</div>
                </div>
                
                <form action="">
                    <div className={style.input_bx}>
                        <input type = "email" placeholder="user@gmail.com"></input>
                    </div>
                    <div className={style.input_bx}>
                        <input type = "password" placeholder="********"></input>
                    </div>
                </form>
                <div className={style.btn}>
                    <button>Create account</button>
                </div>

                <Link href="/account/forgot_password">
                    <div className={style.forgot}>
                        Has olvidado tu contrasena?
                    </div>
                </Link>

                <div className={style.account}>
                    <div>No tienes una cuenta?</div>
                    <Link href="/account/login"><div className={style.log}>Create account</div></Link>
                </div>
            </div>
        </div>
    )
}