"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '../contexts/AuthProvider';
import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
 }
export default function RootLayout(
  { children }: AuthProviderProps, // will be a page or nested layout
) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
      
    </html>
  )
}