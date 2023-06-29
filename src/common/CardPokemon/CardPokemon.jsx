import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  Card  from 'react-bootstrap/Card';
import './CardPokemon.css';

const PokemonCard = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
    const fetchPokemonList = async () => {
        try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const results = response.data.results;
        setPokemonList(results);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    fetchPokemonList();
    }, []);

    return (
    <div className="tarjePokemon">
        {pokemonList.map((pokemon) => (
        <Card key={pokemon.name}>
            <Card.Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png"} alt={pokemon.name} />
            <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>{pokemon.type}</Card.Text>
            </Card.Body>
        </Card>
        ))}
    </div>
    );
};

export default PokemonCard;




