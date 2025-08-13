// Import hooks from React
import { useEffect, useState } from "react";

function UserFetcher() {
  // State to store fetched user data
  const [users, setUsers] = useState([]);

  // State to show loading indicator while data is being fetched
  const [loading, setLoading] = useState(true);

  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect runs once after component mounts
  useEffect(() => {
    // Start fetching data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // If response is not OK (e.g., 404 or 500), throw error
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json(); // Convert response to JSON
      })
      .then((data) => {
        setUsers(data); // Save data in users state
        setLoading(false); // Turn off loading indicator
      })
      .catch((err) => {
        setError(err.message); // Save error message
        setLoading(false); // Stop loading
      });
  }, []); // [] = run only once on mount

  // JSX returned by this component
  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 User List</h2>

      {/* Show loading message if data is being fetched */}
      {loading ? (
        <p>Loading Users...</p>
      ) : // Show error message if something went wrong
      error ? (
        <p style={{ color: "red" }}>❌ {error}</p>
      ) : (
        // Otherwise show the list of users
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserFetcher;

//========================Easy Version for Practise and Learning =====================
// import { useEffect, useState } from "react";

// function UserFetcher() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>👥User List...</h2>
//       {loading ? (
//         <p>Loading User...</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <strong>{user.name}</strong>-{user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default UserFetcher;
