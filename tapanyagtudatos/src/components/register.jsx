import React, { useState } from "react";
import "../App.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      credentials: "include", // Session kezelés miatt KELL!
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("✅ Sikeres regisztráció!");
    } else {
      alert("❌ Hiba: " + data.error);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Regisztráció</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            placeholder="Felhasználónév"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mb-2 text-black"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mb-2 text-black"
            required
          />
          <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mb-4 text-black"
            required
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md w-full"
          >
            Regisztráció
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
