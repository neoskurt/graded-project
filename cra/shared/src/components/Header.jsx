import React from 'react';
import '../bootstrap.min.css';
import '../main.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow py-2 py-sm-0">
                <a className="navbar-brand" href="#">
                    <h5>Manga Man</h5>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid">
                        <div className="row py-3">
                            <div className="col-lg-6 col-sm-12 mb-3 mb-sm-0">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Accueil<span className="sr-only">(actuel)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Nouveau</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Populaire</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Parcourir
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Autre action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Autre chose ici</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <form className="form-inline search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tapez le titre, l'auteur ou le genre"
                                            aria-label="Tapez le titre, l'auteur ou le genre" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button"><i
                                                className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile float-right">
                    <div className="saved">
                        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fa fa-bookmark fa-2x"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">
                                <div className="row">
                                    <div className="col"><img src="img/cover1.jpg" width="50" alt="One Piece 1" /></div>
                                    <div className="col">
                                        <h5>One Piece 1</h5>
                                        <small>Dernier <span>VOL. 11</span></small>
                                    </div>
                                </div>
                            </a>
                            <a className="dropdown-item" href="#">
                                <div className="row">
                                    <div className="col"><img src="img/cover1.jpg" width="50" alt="One Piece 1" /></div>
                                    <div className="col">
                                        <h5>One Piece 1</h5>
                                        <small>Dernier <span>VOL. 11</span></small>
                                    </div>
                                </div>
                            </a>
                            <a className="dropdown-item" href="#">Voir tous les mangas enregistrés (14)</a>
                        </div>
                    </div>
                    <div className="account">
                        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fa fa-user-circle fa-2x"></i><i className="fa fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Mon compte</a>
                            <a className="dropdown-item" href="#">Déconnexion</a>
                        </div>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Basculer la navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
