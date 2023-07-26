"use client";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import "./globals.css";
import Spinner from "../../components/Spinner/Spinner";

export default function Home() {
  const [dataPok, setDataPok] = useState([]);
  

  async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=649");
    const data = await response.json();
    setDataPok(data.results);
  }

    useEffect(()=> {
    getData();
  }, []);
 


  return (
    <main id="main">
      <div id="cabecera">
        <Spinner /><h1>Info Pokémon</h1>  
      </div>
      <section id="container">
         {dataPok && dataPok.map((el, i)=> <Card key={i} poke={el} /> )}
      </section>

    </main>
  )
}
