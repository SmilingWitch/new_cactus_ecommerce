// src/contexts/AuthProvider.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation'


interface AuthProviderProps {
  children: ReactNode;
 }

export function AuthProvider({ children }: AuthProviderProps) {
  let userFromsessionStorage = null;
  let credentialFromsessionStorage = null;
  if (typeof window !== 'undefined') {
    userFromsessionStorage = sessionStorage.getItem('access') || null;

    const item = sessionStorage.getItem('credential')
    if(item !== null){
      credentialFromsessionStorage = JSON.parse(item) || null;
    }
  }

  const [user, setUser] = useState<string | null>(null);
  const [loginError, SetLoginError] = useState('')
  const [credential, setCredential] = useState(credentialFromsessionStorage);
  const [hasCompanyRequestRun, setHasCompanyRequestRun] = useState(false);

  /*const [credential, setCredential] = useState(null);*/
  const updateCredential = (newCredential: any) => {
    // Actualiza el estado de credential
    setCredential(newCredential);
   
    // Actualiza el credential en sessionStorage
    sessionStorage.setItem('credential', JSON.stringify(newCredential));
   };
   

 const router = useRouter()


 /*--------------------SING IN-------------------- */
 const signIn = async (formValue: any) => {
  console.log("FormValue",formValue)
  console.log("Autenticacion")
  try {
    const response = await axios.post('https://cactusshopi.onrender.com/login/',  formValue );
    console.log("Autenticacion1")
    sessionStorage.setItem('access', response.data.token);
    sessionStorage.setItem('refresh', response.data.refresh_token);
    sessionStorage.setItem('credential', JSON.stringify(response.data.user)); // Guarda toda la respuesta del usuario

    const item1 = sessionStorage.getItem('access')
    if(item1 !== null){
      setUser(item1); // Recupera toda la respuesta del usuario
      }

    const item = sessionStorage.getItem('credential')
    if(item !== null){
      setCredential(JSON.parse(item));
    }
    console.log("FormValue",formValue)
    router.push('/home')
    /*setHasCompanyRequestRun(true)*/
    SetLoginError('')
    
  } catch (error: any) {
   console.log("No se hizo la peticion")
   SetLoginError(error.response.data.error)
   console.log(error.response.data)

 }
 };



 /*--------------------SING OUT--------------------*/
 const signOut = async () => {
  const token = sessionStorage.getItem('refresh')
  try {
    const response = await axios.post('https://zona0.onrender.com/accounts/logout/', {refresh : token} )
    console.log("logout")
    console.log(response)
    sessionStorage.removeItem('access');
    sessionStorage.removeItem('refresh');
    sessionStorage.removeItem('credential');
    setCredential(null)
    setUser(null);
    sessionStorage.removeItem('pay');
    sessionStorage.removeItem('points');
    sessionStorage.removeItem('payCodeEfect');
    sessionStorage.removeItem('send');
    router.push('/accounts/login')
  } catch (error) {
    console.log("No se hizo la peticion")
    
  }
 };

 /*--------------------VERIFY TOKEN--------------------*/
 const verifyToken = async () => {
  try {
    const accessToken =  sessionStorage.getItem('access');
    const response = await axios.post('https://zona0.onrender.com/accounts/accounts/token/verify/', { token: accessToken });
    if (!response.data.valid) {
      signOut();
    }
  } catch (error) {
    console.error(error);
  }
};



 return (
 <AuthContext.Provider value={{ user, signIn, signOut, credential, updateCredential, loginError }}>
 {children}
 </AuthContext.Provider>
 );
}
