import React, {useState} from 'react';
import { render } from 'react-dom';

export default function Header({title}) {
    // counter = variavel 
    // setCounter = funcao responsavel por actualizar o valor de counter
   //let [counter, setCounter] = useState(0);
return(
<div>
<header>
<h1>{title}</h1>
</header>
</div>
);
}
