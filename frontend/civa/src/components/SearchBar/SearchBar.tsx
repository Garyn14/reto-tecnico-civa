import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  filterOptions: string[];
  onSearch: (query: string, filter: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Buscar...",
  filterOptions,
  onSearch,
  onClear,
}) => {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim(), selectedFilter);
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="border rounded-md px-4 py-2 w-full"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="Campo de búsqueda"
      />

      <select
        className="border rounded-md px-4 py-2"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        aria-label="Filtro de búsqueda"
      >
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleSearch}
        disabled={!query.trim()}
      >
        Buscar
      </button>

      <button
        className={`bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 ${
          !query && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleClear}
        disabled={!query}
      >
        Limpiar
      </button>
    </div>
  );
};

export default SearchBar;
