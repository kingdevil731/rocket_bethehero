// react
import React, { useState } from "react";
// import link to be a spa
import { Link, useHistory } from "react-router-dom";
// import arrow Left svg/icon
import { FiArrowLeft } from "react-icons/fi";
//import styles
import "./styles.css";
// import logo image
import logoImage from "../../assets/logo.svg";
//api
import api from "../../services/api";

export default function Register() {
  // [*,  *]
  //first * is var name
  //sec is the function to set the value (mutable*)
  //useState '' is to set default value to be blank
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      console.log(data);
      const resultado = await api.post("ongs", data);
      alert(`Successfully Registered ${resultado.data.id} it's your id`);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Error, Try Again");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="be the hero" />
          <h1>Register</h1>
          <p>
            Register, enter in the Platform and help people find cases of your
            NGO.
          </p>

          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Already Registered
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            required
            name={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            required
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            required
            name={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            type="text"
            placeholder="Whatsapp"
          />
          <div className="input-group">
            <input
              required
              name={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
            <input
              required
              name={uf}
              onChange={(e) => setUf(e.target.value)}
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
