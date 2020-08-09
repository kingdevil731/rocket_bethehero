import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';
import'./styles.css';
export default function Profile(){
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Logo do be the hero" />
          <span>Bem vinda a, APAD</span>
          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link> 
          <button>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos Cadastrados</h1>
        <ul>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>Caso: </strong>
            <p>Caso teste</p>
            <strong>Descricao: </strong>
            <p>Caso teste</p>
            <strong>Valor: </strong>
            <p>120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </ul>
      </div>
    );
}