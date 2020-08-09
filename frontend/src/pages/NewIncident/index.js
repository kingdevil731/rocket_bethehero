// React
import React from 'react';
// Link para voltar atras
import { Link } from 'react-router-dom';
// logo
import logoImg from '../../assets/logo.svg';
//icons
import {FiArrowLeft} from 'react-icons/fi';
// stylesheet
import './styles.css';

export default function NewIncident(){
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

          <form>
            <input type="text" placeholder="Titulo do caso" />
            <textarea type="email" placeholder="Descricao" />
            <input type="text" placeholder="Valor em USD" />
            <button className="button" type="submit">
              Cadastar
            </button>
          </form>
        </div>
      </div>
    );
}