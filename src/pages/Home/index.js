import { FiLink } from 'react-icons/fi';
import { useState } from 'react'

import './home.css';
import '../../components/Menu';
import Menu from '../../components/Menu';
import LinkItem from '../../components/Menu/LinkItem';

import api from '../../services/api';

export default function Home () {
  const [link, setLink] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink () {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data);
      setShowModal(true);
      setLink('');

    }catch{
      alert('Ops parece que algo deu errado')
      setLink('');
    }
  }

    return(
      <div className="container-home">
        <div className="logo">
            <img src="/logo.png" alt="Logo meu Link" />
            <h1>Meu Link</h1>
            <span>Cole seu link para encurtar </span>
        </div>
        <div className="area-input">
            <div>
                <FiLink size={24} color='#fff' />
                <input placeholder='Cole seu link aqui...' 
                value={link}
                onChange={ (e) => setLink(e.target.value) }
                />
            </div>
            <button onClick={handleShortLink}>Gerar Link</button>
        </div>
        <Menu/>
        { showModal && <LinkItem closeModal={()=> setShowModal(false)}
        content={data}
        />}
      </div>
    )
  }