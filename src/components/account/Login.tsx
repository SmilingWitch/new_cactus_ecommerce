"use client"
import style from "../../../public/styles/Register.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import{ useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from "../Loader"
import errorVisible from "../function/errorVisible"
import ErrorDialog from "../ErrorDialog"

export default function Login(){

    const [loader, SetLoader] = useState(false)
    const [error, SetError] = useState({
        username: '',
        password: ''
      })
    const [formValue, SetFormValue] = useState(
        {
            username: "",
            password: ""
        }
    )

    const authContext = useContext(AuthContext);
    if (!authContext) {
     // Manejar el caso cuando el contexto es null, por ejemplo, mostrando un mensaje de error o redirigiendo al usuario
     return <div>Error: Contexto no disponible</div>;
    }
    const { signIn } = authContext
    const {loginError} = authContext
    
    const handleChange= (event:any) =>{
        SetFormValue({
            ...formValue,
            [event.target.name]: event.target.value
            }
        )
    }


    const handleSubmit = async (e:any) => {
        SetLoader(true)
        e.preventDefault();
        try{
          const res = await signIn(formValue);
          /*setError('');*/
          console.log(res)
          SetLoader(false)
          console.log("PETICION", res)
          
        }catch(error){
          SetLoader(false)

        }
       }


    return(
        <div className={style.cont}>
            <div className={style.form}>
              
                <div className={style.logo}>
                    <div className={style.logo_name}><h1>Log in</h1>{/*Cactus Haven*/}</div>
                </div>
                
                
                <form action="">
                <div className={style.loginError}>{loginError}</div>
                    <div className={style.input_bx}>
                        <input type = "text" 
                                placeholder="username"
                                name = "username"
                                onChange={handleChange}
                                value = {formValue.username}></input>
                    </div>
                    <div className={style.input_bx}>
                        <input type = "password" 
                                name = "password"
                                onChange={handleChange}
                                value = {formValue.password}
                                placeholder="********"></input>
                    </div>
                </form>
                <div className={style.btn}>
                {
                  loader === true ? 
                      <button className={style.loadingBtn}>
                          <div><Loader/> Loading</div>
                      </button>
                      : 
                      <button onClick={(e) => handleSubmit(e)}>Login</button>
                }
                </div>

                <Link href="/account/forgot_password">
                    <div className={style.forgot}>
                        Has olvidado tu contrasena?
                    </div>
                </Link>

                <div className={style.account}>
                    <div>No tienes una cuenta?</div>
                    <Link href="/account/register"><div className={style.log}>Create account</div></Link>
                </div>
            </div>
        </div>
    )
}