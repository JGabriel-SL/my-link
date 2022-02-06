import { useState } from 'react';
import { FiLink } from 'react-icons/fi';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import {saveLink} from '../../services/storeLinks';

import './home.css';

export default function Home() {
  const [link, setLink] = useState('');
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState('');

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data);
      setModal(true);
      saveLink('@key_link', response.data);

      setLink('');
    } catch {
      alert('Ops, algo deu errado. Tente novamente mais tarde...');
      setLink('');
    }
  }

  return (
    <div className="container-home">
        <div className="logo">
            <img src="/Logo.png" alt="Sujeito Link Logo" />
            <h1>DevLink</h1>
            <span>Cole seu link para encurtar 👇🏻</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF"/>
            <input 
              value={link} 
              onChange={ e => setLink(e.target.value  )}
              placeholder="Cole seu link aqui..."
            />
          </div>
          <button onClick={handleShortLink}> Gerar link</button>
        </div>

        <Menu />
        { showModal && 
          <LinkItem 
            closeModal={ () => setModal(false)}
            content={data}
          />
        }
    </div>
  );
}
