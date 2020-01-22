import React from 'react';

import './styles.css';

function DevItem({ dev, deleteDev, editDev }){
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <button onClick={() => deleteDev(dev.github_username)}>X</button>
            </header>
            <p>{dev.bio}</p>
            <footer>
                <a href={`https://github.com/${dev.github_username}`}>
                    Acessar perfil no Github
                </a>
                <span> | </span>
                <button onClick={() => editDev(dev)}>
                    Editar
                </button>
            </footer>
        </li>
    );
}

export default DevItem;