function Services() {
  return (
    <main className="row ">
       <img src="../public/images/banner.jpg" alt="" />
       <div className="text-center mt-4">
          <h1>Mon offres de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <hr className="col-4 mx-auto border-4 border-primary opacity-100" />
       </div>

      <div className=" col-11 col-xl-9 mx-auto row m-5 ">

          <div className="card  col-xl m-2 p-3 text-center">
            <i className="bi bi-brush fs-1 text-primary m-4"></i>
            <div className="card-body">
              <h2 className="card-title">UX Design</h2>

              <p className="card-text">L'UX Design est une discipline qui consiste à
                concevoir des produits (sites web, applications
                mobiles, logiciels, objets connectés, etc.) en plaçant
                l'utilisateur au centre des préoccupations. L'objectif
                est de rendre l'expérience utilisateur </p>
            </div>
          </div> 

          <div className="card col-xl m-2 p-3 text-center ">
            <i className="bi bi-code-slash fs-1 text-primary m-4"></i>
            <div className="card-body">
              <h2 className="card-title">Développement web</h2>

              <p className="card-text">Le développement de sites web consiste à créer des
              sites internet en utilisant des langages de
              programmation (HTML, CSS, JavaScript, PHP, etc.)
              et des frameworks (Bootstrap, React, Angular, etc.).</p>
            </div>
          </div> 

          <div className="card col-xl m-2 p-3 text-center ">
            <i className="bi bi-search fs-1 text-primary m-4"></i>
            <div className="card-body">
              <h2 className="card-title">Référencement</h2>

              <p className="card-text">Le référencement naturel (SEO) est une technique
              qui consiste à optimiser un site web pour le faire
              remonter dans les résultats des moteurs de
              recherche (Google, Bing, Yahoo, etc.). L'objectifest
              d'attirer un maximum de visiteurs qualifiés sur le site. </p>
            </div>
          </div> 

      </div>

        


    </main>
  );
}

export default Services;