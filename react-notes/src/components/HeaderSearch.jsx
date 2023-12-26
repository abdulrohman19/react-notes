import React from "react";

const SearchBar = ({ onSearch }) => {

    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    } 

    return (
        <div className="note-search">
            <input 
                type="text" 
                placeholder="Search your notes here..."
                onChange={onSearchbarChange}
            />
        </div>
    );
}

export default SearchBar;