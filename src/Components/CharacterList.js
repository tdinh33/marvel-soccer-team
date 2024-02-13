import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Cards from './Cards';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedRole, setSelectedRole] = useState(''); // 'GK', 'ST', 'MD', 'DF'
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch characters from Marvel API
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    'https://gateway.marvel.com/v1/public/characters?apikey=YOUR_API_KEY'
                );
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []); // Empty dependency array ensures the effect runs only once

    // Filter characters based on selected role
    const filterByRole = (character) =>
        selectedRole ? character.name.toLowerCase().includes(selectedRole.toLowerCase()) : true;

    // Filter characters based on search term
    const filterBySearch = (character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Combined filtering function
    const filterCharacters = (character) => filterByRole(character) && filterBySearch(character);

    return (
        <div className="container mt-4">
            <Filter onRoleChange={setSelectedRole} onSearchChange={setSearchTerm} />
            <Cards characters={characters.filter(filterCharacters)} />
        </div>
    );
};

export default CharacterList;
