import React from "react";
import SearchBar from "./HeaderSearch";

const Header = ({ onSearch }) => {
    return (
        <div className="note-app__header">
            <h1>Your Daily Notes</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Header;