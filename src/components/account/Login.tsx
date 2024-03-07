"use client"
import style from "../../../public/styles/Register.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import{ useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login(){

    const authContext = useContext(AuthContext);
    if (!authContext) {
     // Manejar el caso cuando el contexto es null, por ejemplo, mostrando un mensaje de error o redirigiendo al usuario
     return <div>Error: Contexto no disponible</div>;
    }
    const { signIn } = authContext


    const [formValue, SetFormValue] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handleChange= (event:any) =>{
        SetFormValue({
            ...formValue,
            [event.target.name]: event.target.value
            }
        )
    }

    /*const handleSubmit= async (e:any) =>{
        e.preventDefault()
        console.log(formValue)
      try{
        console.log(formValue)
        const res = await axios.post('https://cactusshopi.onrender.com/login/', formValue)
        console.log("response",res.data)
        setError('')
        setLoading(false)
        setCorrect(true)
      }catch(error){
        console.log(error.response)
        /*if (error.response) {
          setLoading(false)
            // El servidor respondió con un estado fuera del rango de 2xx
            setError(error.response.data);
            console.log(error)
          } else if (error.request) {
            alert("Something went wrong. Try in a few minutes!!")
          } else {
            alert("Something went wrong. Try in a few minutes!!")
          }
          if (error.response.status === 500) {
            alert("Something went wrong. Try in a few minutes!!")
          }
      }
    }*/

    const handleSubmit = async (e:any) => {
        /*setLoading(true)*/
        e.preventDefault();
        try{
          const res = await signIn(formValue);
          /*setError('');*/
          console.log(res)
          /*setLoading(false)*/
        }catch(error){
          /*setError('Unable to log in with provided credentials.')*/
          console.log(error)
          /*setLoading(false)*/
        }
       }

    return(
        <div className={style.cont}>

            <div className={style.form}>
                <div className={style.logo}>
                    <div className={style.logo_name}><h1>Log in</h1>{/*Cactus Haven*/}</div>
                </div>
                
                <form action="">
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
                    <button onClick={handleSubmit}>Create account</button>
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