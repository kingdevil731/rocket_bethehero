// React
import React, { useState } from "react";
// Link para voltar atras
import { Link, useHistory } from 'react-router-dom';
// logo
import logoImg from '../../assets/logo.svg';
//icons
import {FiArrowLeft} from 'react-icons/fi';
// stylesheet
import './styles.css';
// import api
import api from '../../services/api';

export default function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const id = localStorage.getItem('ongId');
  const history = useHistory();
  const data = {
    title,
    description,
    value
  }

  async function handleRegister(e){
    e.preventDefault();

    try {
      const response = await api.post("incidents", data, {
        headers: {
          Authorization: id,
        },
      });
      alert(`Your Id is ${response.data.id}`);
    } catch (error) {
      alert('Error ao criar, Tente novamente!');
    }
    
  }

    return (
      <div className="newincident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="be the hero" />
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um heroi para
              resolver isso.
            </p>

            <Link className="backlink" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para home
            </Link>
          </section>

          <form onSubmit={handleRegister}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Titulo do caso"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="email"
              placeholder="Descricao"
            />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Valor em USD"
            />
            <button className="button" type="submit">
              Cadastar
            </button>
          </form>
        </div>
      </div>
    );
}