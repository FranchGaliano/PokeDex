"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


function Page({ params }) {
    const [dataPokemon, setDataPokemon] = useState();
    const id = params.id;

    useEffect(() => {
        const getData = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setDataPokemon(data);
        };

        getData(id);
        console.log(dataPokemon);
    }, []);


    return (
        <main id="containerCard">
            {dataPokemon && <div className="cardIndividual">
                <section>
                    <div>
                        
                        <img src={dataPokemon.sprites.other.home.front_default} alt={dataPokemon.name} />
                        
                    </div>
                    <div>
                        
                        <img src={dataPokemon.sprites.other.home.front_shiny} alt={dataPokemon.name} />
                        
                    </div>
                    <div>
                        
                        <img src={dataPokemon.sprites.other.dream_world.front_default} alt={dataPokemon.name} />
                        
                    </div>
                </section>
                <section>
                    <div>
                        <h1>{dataPokemon.name}</h1>
                        <p>ID: {dataPokemon.id} </p>
                        <p>Height: {dataPokemon.height}</p>
                        <p>Weight: {dataPokemon.weight} </p>
                        <p>Base experience: {dataPokemon.base_experience}  </p>
                    </div>
                </section>
            </div>}
            <Link href="/" id="linkBack">Back</Link>

        </main>
    )
}

export default Page