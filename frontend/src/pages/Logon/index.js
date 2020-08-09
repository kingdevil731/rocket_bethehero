import React from 'react';
// style import
import './styles.css';
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

            <form action="">
                <h1>Faca Seu Logon</h1>

                <input type="text" placeholder="Sua Id"/>
                <button type="submit">Entrar</button>

                <a href="/register">
                    <FiLogIn/>
                    Nao Tenho Cadastro
                </a>
            </form>
           </section>
           <img src={heroesImage} alt="heroesImage"/>
       </div>
    );
}