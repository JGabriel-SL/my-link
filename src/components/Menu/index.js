import './menu.css';
import { BsYoutube, BsInstagram} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://youtube.com">
                <BsYoutube size={24} color="#FFF"/>
            </a>
            <a className="social" href="https://instagram.com">
                <BsInstagram size={24} color="#FFF"/>
            </a>
            <Link className="menu-item" to="/links">
                Meus links
            </Link>
        </div>
    )
}