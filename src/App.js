import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [showName, setShowName] = useState(false);
  return (
    <>
      <form>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          name="firstName"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last name"
          name="lastName"
          required
        />
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          name="Email"
          required
        />
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          name="password"
          required
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            setShowName(true);
          }}
        >
          Submit
        </button>
        {showName && (
          <>
            <p>FirstName: {firstName}</p>
            <p>Last Name:{lastName}</p>
          </>
        )}
      </form>
    </>
  );
};

export default App;
