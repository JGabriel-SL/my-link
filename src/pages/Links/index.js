import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';

import './links.css';

import LinkItem from '../../components/LinkItem';

import {getLinksSave, deleteLink} from '../../services/storeLinks';

export default function Links() { 

  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@key_link');

      if(result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setModal(true);
  }

  async function handleDeleteLink(id) {
    const result = await deleteLink(myLinks, id)

    if (result.length == 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="links-container">
        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={38} color="#FFF" />
          </Link>
          <h1>Meus links</h1>
        </div>

        { emptyList && (
          <div className="links-item">
            <h2 className="empty-text">Sua lista está vazia.</h2>
          </div>
        )}

        { myLinks.map( link => (
          <div key={link.id} className="links-item">
            <button className="link"  onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#FFF"/>
              {link.long_url}
            </button>
            <button className="link-delete" onClick={() => handleDeleteLink(link.id)}>
              <FiTrash size={24} color="#FF5454"/>
            </button>
          </div>
        ))}

      { showModal && 
        <LinkItem 
          closeModal={() =>setModal(false)}
          content={data}
        />
      }
    </div>
  );
}
