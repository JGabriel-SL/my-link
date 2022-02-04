import './error.css';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="container-error">
            <img src="/notfound.png" alt="Error 404"/>
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}