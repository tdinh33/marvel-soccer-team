// src/components/Filter.js
import React from 'react';

const Filter = ({ onRoleChange, onSearchChange }) => {
    return (
        <div>
            <div>
                <label>Select Role:</label>
                <select onChange={(e) => onRoleChange(e.target.value)}>
                    <option value="">All</option>
                    <option value="GK">Goalkeeper</option>
                    <option value="ST">Striker</option>
                    <option value="MD">Midfielder</option>
                    <option value="DF">Defender</option>
                </select>
            </div>
            <div>
                <label>Search:</label>
                <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
            </div>
        </div>
    );
};

export default Filter;
