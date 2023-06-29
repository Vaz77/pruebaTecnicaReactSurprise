import axios from 'axios';

export const fetchPokemonList = async () => {
    try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const results = response.data.results;
    return results;
    } catch (error) {
    console.error('Error:', error);
    return [];
    }
};

