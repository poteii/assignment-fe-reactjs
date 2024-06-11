import React, { useState } from 'react';

const SearchBar = ({ onSearch, totalItems }) => {
    // const [period, setPeriod] = useState('');
    // const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearch = () => {
        onSearch(startDate, endDate);
    };
    return (
        <div className='search-bar-container'>
            <div className="total-items">Total Items: {totalItems}</div>
            <div className="search-bar">
            Period
            <select>
                <option value="Transmission">Transmission</option>
            </select>
            Status
            <select>
                <option value="Wating">Wating</option>
            </select>
            From
            <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                placeholder="Start Date"
            />
            To
            <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                placeholder="End Date"
            />
            <button onClick={handleSearch} className="contrast">Search</button>
            </div>
        </div>
    )

};

export default SearchBar;
