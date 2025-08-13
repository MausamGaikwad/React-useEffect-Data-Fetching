# 👥 User Fetcher App

A simple React application that fetches and displays a list of users from an API using the fetch method.
Built to demonstrate React Hooks, API fetching, loading states, and error handling.

---

### 🚀 Features

- Fetches user data from https://jsonplaceholder.typicode.com/users
- Displays name and email for each user
- Loading indicator while fetching
- Error handling for failed requests
- Clean and minimal UI

---

### 🛠️ Tech Stack

- React (with Hooks: useState, useEffect)
- JavaScript (ES6+)
- HTML5 & CSS3

---

### 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/user-fetcher-app.git

# Navigate to the project folder
cd user-fetcher-app

# Install dependencies
npm install

# Start development server
npm start
```

---

### 📚 How It Works

- useEffect runs once when the component mounts.
- The app makes an API call using fetch.
- While loading, it displays "Loading Users...".
- If successful, it lists all users’ names and emails.
- If there's an error, it shows an error message in red.

### 🖥️ UI Preview

```text

👥 User List
-----------------
John Doe – john@example.com
Jane Smith – jane@example.com
```

---

### 🧑‍💻 Code Example

```javascript
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    })
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);
```

---

### 📜 License

This project is licensed under the MIT License – free to use and modify.
