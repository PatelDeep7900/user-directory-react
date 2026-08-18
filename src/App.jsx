import { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import UserList from "./components/UserList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useUsers from "./hooks/useUsers";
import SearchBar from "./components/SearchBar";

function App() {
    const { users, loading, error } = useUsers();
const [search, setSearch] = useState("");

 

const filteredUsers = useMemo(() =>   users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ), [users,search])

  return (
    <div className="app">
      <header className="header">
        <h1>Mini User Directory</h1>
        <p>Find users quickly by their name</p>
      </header>
      <main className="container">
       <SearchBar value={search} onChange={setSearch}/>
        {loading && <Loader />}
        {error && <ErrorMessage errors={error} />}

        {!loading && !error && <UserList users={filteredUsers} />}
      </main>
    </div>
  );
}

export default App;
