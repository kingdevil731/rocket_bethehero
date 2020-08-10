// react
import React, {useState} from 'react';
// import link to be a spa
import {Link, useHistory} from 'react-router-dom';
// import arrow Left svg/icon
import {FiArrowLeft} from 'react-icons/fi';
//import styles
import './styles.css';
// import logo image
import logoImage from "../../assets/logo.svg";
//api
import api from '../../services/api';

export default function Register() {
  // [*,  *]
  //first * is var name
  //sec is the function to set the value (mutable*)
  //useState '' is to set default value to be blank
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();


  async function handleRegister(e){
   e.preventDefault();

   const data = {
     name,
     email,
     whatsapp,
     city,
     uf,
   };
    

   try{
     console.log(data);
     const resultado = await api.post('ongs', data);
     //console.log(resultado.data);
     alert(`Cadastro com successo ${resultado.data.id} E o seu id`);
     history.push('/');
   } catch(err){
     console.log(err);
     alert("Error no cadastro, tente novamente");
   }
  }

 

    return (
      <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImage} alt="be the hero" />
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>

            <Link className="backlink" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Ja Tenho Cadastro
            </Link>
          </section>

          <form onSubmit={handleRegister}>
            <input
              required
              name={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome"
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
                placeholder="Cidade"
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
              Registar
            </button>
          </form>
        </div>
      </div>
    );
}