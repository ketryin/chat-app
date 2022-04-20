import Avatar from "../Avatar/Avatar";
import defaulttAva from "../../assets/default-avatar.jpg";
import "./SearchBar.css";

function SearchBar({ onSearchTermChanged }) {
  const handleSearchFriends = (event) =>
    onSearchTermChanged(event.target.value);

  return (
    <div className="searchBar-container">
      <Avatar name={"user"} avatar={defaulttAva} />
      <form className="SearchForm">
        <div type="submit" className="SearchForm-button"></div>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleSearchFriends}
        />
      </form>
    </div>
  );
}

export default SearchBar;
