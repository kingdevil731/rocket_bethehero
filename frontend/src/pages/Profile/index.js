// studdy* more the functions in react 
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';
import'./styles.css';
// import api
import api from '../../services/api';

export default function Profile(){
  const [incidents, setIncidents] = useState([]);
 const ongId = localStorage.getItem('ongId');
 const ongName = localStorage.getItem('ongName');

    useEffect(() => {
      api.get('incidents/profile', {
        headers: {
          Authorization : ongId,
        },
      }).then(response => {
        setIncidents(response.data);
      });
    }, [ongId]);

    
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Logo do be the hero" />
          <span>Bem vindo, {ongName}</span>
          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link> 
          <button>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos Cadastrados</h1>
        <ul>
        {
          incidents.map(i => (
            <li key={i.id}>
            <strong>Caso: </strong>
            <p>{i.title}</p>
            <strong>Descricao: </strong>
            <p>{i.description}</p>
            <strong>Valor: </strong>
            <p>{i.value}</p>
            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          ))
        }
        </ul>
      </div>
    );
}