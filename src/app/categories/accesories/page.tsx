"use client"
import { useState, useEffect } from "react";
import SearchAccesories from "@/components/search_accesories/SearchAccesories";




export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); 
  }, []);


  if (!isMounted) {
    return null; // Or some placeholder content
   }

  return (
        <SearchAccesories/>
  );
}