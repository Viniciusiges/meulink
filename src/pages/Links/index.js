import { useState, useEffect } from 'react'

import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import LinkItem from '../../components/Menu/LinkItem';
import { getLinksSave, deleteLink  } from '../../services/storeLinks'

export default function Links() {

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@encurtaLink')

      if (result.lenght === 0) {
        console.log('lista vazia')
      }
      setMyLinks(result);
    }
    getLinks();
  }, [])

  function handleOpenLink(link){
    setData(link)
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if(result.lenght === 0){
      console.log('Você não tem mais links')
    }

    setMyLinks(result)

  }

  return (
    <div className="links-container">
      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus Links</h1>
      </div>
      {myLinks.map(link => (
        <div key={link.id} className='links-item'>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='#fff' />
            {link.long_url}
          </button>
          <button className='link-delete' onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color='#ff5454' />
          </button>
        </div>
      ))}
      { showModal && (
        <LinkItem 
        closeModal={() => setShowModal(false)}
        content={data}
        />
      )}
     

    </div>
  )
}