import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../bootstrap.min.css';
import '../../main.css';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('shared/Header'));
const Footer = React.lazy(() => import('shared/Footer'));

const App = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios.get('https://6669b0262e964a6dfed6338f.mockapi.io/api/manga/all/manga') // Change this URL to your MockAPI URL
      .then(response => {
        setMangas(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the mangas!', error);
      });
  }, []);

  return (
    <div>
      <React.Suspense fallback="Chargement de l'en-tête">
        <Header />
      </React.Suspense>

      {/* Slider */}
      <div id="mangaslider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="../../img/slider1.jpg" alt="Premier slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/slider2.jpg" alt="Deuxième slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/slider3.jpg" alt="Troisième slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#mangaslider" role="button" data-slide="prev">
          <div><span className="carousel-control-prev-icon" aria-hidden="true"></span></div>
          <span className="sr-only">Précédent</span>
        </a>
        <a className="carousel-control-next" href="#mangaslider" role="button" data-slide="next">
          <div><span className="carousel-control-next-icon" aria-hidden="true"></span></div>
          <span className="sr-only">Suivant</span>
        </a>
      </div>

      {/* Dernières mises à jour Manga */}
      <div className="lastest container mt-4 mt-sm-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="font-weight-bolder float-left">Dernières mises à jour Manga</h2>
          </div>
          <div className="col-lg-6">
            <ul className="calendar list-unstyled list-inline float-right font-weight-bold mt-3 mt-sm-0">
              <li className="list-inline-item active">Aujourd'hui</li>
              <li className="list-inline-item">Hier</li>
              <li className="list-inline-item">Dim</li>
              <li className="list-inline-item">Ven</li>
              <li className="list-inline-item">Jeu</li>
              <li className="list-inline-item">Mer</li>
            </ul>
          </div>
        </div>

        <div className="posts row">
          {mangas.map(manga => (
            <div key={manga.id} className="col-lg-2 col-md-3 col-sm-4">
              <div className="card mb-3">
                <a href="details.html"><img src={manga.img} className="card-img-top" alt={manga.nom} /></a>
                <div className="over text-center">
                  <div className="head text-left">
                    <h6>{manga.nom}</h6>
                  </div>
                  <div className="about-list">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Genre:</th>
                          <td>{manga.genre}</td>
                        </tr>
                        <tr>
                          <th scope="row">Artiste:</th>
                          <td>{manga.auteur}</td>
                        </tr>
                        <tr>
                          <th scope="row">Mise à jour:</th>
                          <td>{manga.update}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="about text-muted">
                    {manga.description}
                  </p>
                  <a className="reading btn" href="details.html">Commencer à lire VOL. 1</a>
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="details.html">{manga.nom}</a></h5>
                  <p className="card-text">CH. {manga.chapter}</p>
                  <p className="card-text"><small className="text-muted text-uppercase">Mis à jour il y a {manga.update_time}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <React.Suspense fallback="Chargement du pied de page">
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;
