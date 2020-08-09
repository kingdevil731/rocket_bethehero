import React from 'react';
// style import
import './styles.css';
//Link 
import {Link} from 'react-router-dom';
//icon
import {FiLogIn} from 'react-icons/fi';
// images
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon(){
    return(
       <div className="logon-contaier">
           <section className="form">
            <img src={logoImage} alt="logoImage"/>

            <form>
                <h1>Faca Seu Logon</h1>

                <input type="text" placeholder="Sua Id"/>
                <button className="button" type="submit">Entrar</button>

                <Link className="backlink" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Nao Tenho Cadastro
                </Link>
            </form>
           </section>
           <img src={heroesImage} alt="heroesImage"/>
       </div>
    );
}