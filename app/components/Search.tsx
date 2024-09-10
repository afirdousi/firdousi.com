'use client';

import { FC, useEffect, useState } from 'react';

const SearchBox: FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect to trigger search or reset based on searchTerm length
    useEffect(() => {
        if (searchTerm.length >= 3) {
            onSearch(searchTerm);
        } else if (searchTerm.length < 3) {
            onSearch('');  // Reset search if searchTerm is less than 3 characters
        }
    }, [searchTerm, onSearch]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.length >= 3) {
            onSearch(searchTerm);
        } else {
            onSearch('');  // Reset search if user submits with less than 3 characters
        }
    };

    return (
        <form id="title-search" name="search" className="search-box" onSubmit={handleSearch}>
            <button type="submit">
                <span className="material-symbols-outlined" style={{ fontSize: '30px', color: '#9B9B9B' }}>
                    search
                </span>
            </button>
            <input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="search-input"
            />
        </form>
    );
};

export default SearchBox;