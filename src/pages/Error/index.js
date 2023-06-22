import { Link } from 'react-router-dom';

import './error.css';
import Home from '../Home';

export default function Error () {
    return(
        <div className='container-error'>
            <img src='notfound.png' alt='pagina não encontrada'/>
            <h1>Pagina não encontrada!</h1>
            <Link to='/' element={<Home/>}>Voltar para Home</Link>
        </div>
    )
}