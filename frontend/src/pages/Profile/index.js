// studdy* more the functions in react 
import React, {useState, useEffect} from 'react';
//Link
import {Link, useHistory} from 'react-router-dom';
// import icons[power icon & delete] and logo
import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';
// import styles
import'./styles.css';
// import api
import api from '../../services/api';

export default function Profile(){
  const [incidents, setIncidents] = useState([]);
 const ongId = localStorage.getItem('ongId');
 const ongName = localStorage.getItem('ongName');
 const [count, setCount] = useState(0);
 const history = useHistory();

    useEffect(() => {
      api.get('incidents/profile', {
        headers: {
          Authorization : ongId,
        },
      }).then(response => {
        setIncidents(response.data);
        setCount(response.data.length);
      });
    }, [ongId]);

    function handleLogOut(){
      localStorage.clear();
      history.push('/');

    }

    async function handleDelete(id){
      try {
        await api.delete(`incidents/${id}`, {
          headers: {
            Authorization : ongId,
          },
        });

        setIncidents(incidents.filter(i => i.id !== id));
        // Actualizar o Counter com o numero actual de casos 
        // sera a resposta - 1 , porque ira retornar o valor anterior
        setCount(incidents.length - 1);
        
      } catch (error) {
        alert('Error, Tente novamente :)');
      }

    }
    
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Logo do be the hero" />
          <span>Bem vindo, {ongName}</span>
          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>
          <button onClick={handleLogOut}>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos Cadastrados: {count}</h1>
        <ul>
          {incidents.map((i) => (
            <li key={i.id}>
              <strong>Caso: </strong>
              <p>{i.title}</p>
              <strong>Descricao: </strong>
              <p>{i.description}</p>
              <strong>Valor: </strong>
              <p>
                {Intl.NumberFormat("pt-pt", {
                  style: "currency",
                  currency: "MZM",
                }).format(i.value)}
              </p>
              <button type="button" onClick={() => handleDelete(i.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}