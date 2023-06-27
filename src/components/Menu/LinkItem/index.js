import { FiX, FiClipboard } from 'react-icons/fi';

import './linkItem.css';

export default function LinkItem ({closeModal}) {
    return(
        <div className='modal-container'>

            <div className='modal-header'>
                <h2>Link Encurtado:</h2>
            <button onClick={closeModal}>
                <FiX size={28} color='#000'/>
            </button>
            </div>

            <span>
                https://vinicius.programador.com.br/hjhjsfheuhfufjxs44$$
            </span>
            <button className='modal-link'>
                https://viniciusprogramdor.com.br
                <FiClipboard size={20} color='#FFF'/>
            </button>
        </div>
    )
}