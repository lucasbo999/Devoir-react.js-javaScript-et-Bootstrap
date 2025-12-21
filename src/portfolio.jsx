function Portfolio() {
  return (
    <main className="row">
       <img src="../public/images/banner.jpg" alt="" />
       <div className="text-center m-4">
          <h1>Portfolio</h1>
          <p> Voici quelques-unes de mes réalisations</p>
          <hr className="col-4 mx-auto border-4 border-primary opacity-100" />
       </div>


        <div className="col-11 col-md-10 row  text-center mx-auto mb-4">

          <div className="col-9 col-md min-width mx-auto ">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/fresh-food.jpg" className="card-img-top " alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Fresh Food</h5>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
          </div>

          <div className=" col-9 col-md min-width mx-auto">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                Site réalisé avec WordPress
              </div>
            </div>
          </div>

          <div className="col-9 col-md min-width mx-auto">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                Site réalisé avec LARAVEL
              </div>
            </div>
          </div>

          <div className="col-9 col-md min-width mx-auto">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/seo.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">SEO</h5>
                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                Utilisationdes outils SEO
              </div>
            </div>
          </div>

          <div className="col-9 col-md min-width mx-auto">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/coder.jpg" className="card-img-top min-widh" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Création d'une API</h5>
                <p className="card-text">Création d'une API RESTFULL publique </p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                PHP - SYMFONY
              </div>
            </div>
          </div>

          <div className="col-9 col-md min-width mx-auto">
            <div className=" card m-3 " >
              <img src="../public/images/portfolio/screens.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Maquette d'un site web</h5>
                <p className="card-text">Création du prototype d'un site</p>
                <a  className="btn btn-primary">Voir le site</a>
              </div>
              <div class="card-footer text-body-secondary">
                Réalisé avec FIGMA
              </div>
            </div>
          </div>
          

        </div>
    </main>
    
  );
}

export default Portfolio;