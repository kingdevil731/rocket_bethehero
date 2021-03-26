// React
import React, { useState } from "react";
// Link para voltar atras
import { Link, useHistory } from "react-router-dom";
// logo
import logoImg from "../../assets/logo.svg";
//icons
import { FiArrowLeft } from "react-icons/fi";
// stylesheet
import "./styles.css";
// import api
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const id = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: id,
        },
      });
      history.push("/profile");
    } catch (error) {
      alert("Error Creating, Try Again!");
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>Register new case</h1>
          <p>
            Describe the case in a detailed manner to be able to find the hero
            to solve it.
          </p>

          <Link className="backlink" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Go Back To Home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Case Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="email"
            placeholder="Description"
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Value in USD"
          />
          <button className="button" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}
