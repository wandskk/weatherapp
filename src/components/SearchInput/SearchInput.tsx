import React from "react";

import "@/styles/SearchInput/SearchInput.scss";

interface SearchInputProps {
  placeholder?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, onClick }, ref) => {
    return (
      <form className="searchInput" onSubmit={(e) => e.preventDefault()}>
        <input
          className="searchInput__input"
          type="text"
          placeholder={placeholder}
          ref={ref}
        />
        <button type="submit" className="searchInput__button" onClick={onClick}>
          Buscar
        </button>
      </form>
    );
  }
);

export default SearchInput;
