import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // użycie „spread” – dokładamy nowe dane do (potencjalnie) istniejących
        setUsers(data);

      })
      .catch((error) => {
        console.error("Błąd podczas pobierania użytkowników:", error);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
