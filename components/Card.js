"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


function Card ({ poke }) {
    const [datosPokemon, setDatosPokemon] = useState();

    useEffect(()=>{
        async function getDataPoke(link) {
            const res= await fetch(link);
            const data = await res.json();
            setDatosPokemon(data);
        }

        getDataPoke(poke.url);
    }, []);

  return (
    datosPokemon && (
        <Link href={`pokemon/${datosPokemon.id}`}>
        <div id="card">
            <div>
                <img src={datosPokemon.sprites.other.home.front_default}
                alt={datosPokemon.name} />
            </div>

            <div>
                <h1>{datosPokemon.name}</h1>
                <p>ID: {datosPokemon.id} </p>
                <p>Height: {datosPokemon.height}</p>
                <p>Weight: {datosPokemon.weight} </p>
                <p>Base experience: {datosPokemon.base_experience}  </p>
            </div>
        </div>
        </Link>
    )
  )
}

export default Card;