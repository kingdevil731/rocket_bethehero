import React, { useState, useEffect } from "react";
// style import
import "./styles.css";
//Link
import { Link, useHistory } from "react-router-dom";
// API
import api from "../../services/api";
//icon
import { FiLogIn } from "react-icons/fi";
// images
import heroesImage from "../../assets/heroes.png";
import logoImage from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const idInStorage = localStorage.getItem("ongId");
  const history = useHistory();

  // First Function when the Component is called, to check if any id present in storage, to redirect to the profile instead of asking user to insert Id Again
  // TODO fix bug/
  useEffect(() => {
    console.log(idInStorage);
    if (idInStorage != null || idInStorage != undefined) {
      history.push("/profile");
    } else {
      return;
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert(`Login Failed. Wrong #Id, Try Again`);
    }
  }

  return (
    <div className="logon-contaier">
      <section className="form">
        <img src={logoImage} alt="logoImage" />

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            required
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Your Id"
          />
          <button className="button" type="submit">
            Login
          </button>

          <Link className="backlink" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Nao Tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="heroesImage" />
    </div>
  );
}
