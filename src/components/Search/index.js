import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../contexts/themeContext";
import { useUser } from "../../contexts/userContext";

import './search.css';

export function Search() {
  const { theme } = useTheme();
  const { searchUser } = useUser();
  const [username, setUsername] = useState('');

  function handleSearchUser(e) {
    e.preventDefault();
    searchUser(username);
    setUsername('');
  }

  return(
    <form className={theme} onSubmit={handleSearchUser}>
      <FaSearch size={28} color="var(--blue)" />
      <input
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}