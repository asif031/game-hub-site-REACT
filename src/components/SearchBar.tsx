import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onToggle: () => void;
}
const SearchBar = ({ onToggle }: Props) => {
  return (
    <div className="container mt-5 d-flex justify-content-between">
      <div className="input-group mx-4">
        <input type="text" className="form-control"></input>
        <button type="submit" className="btn btn-outline-primary">
          <FaSearch />
        </button>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onChange={onToggle}
        />
        <label className="form-check-label" htmlFor="switchCheckDefault">
          Dark
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
