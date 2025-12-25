
function accueil() {
  return (
    <main className="row">
      <header className="hero-bg text-white text-center">
        <div>
          <h1 className="display-2 ">Bonjour, je suis Jhon Doe </h1>
          <p className="display-3">Développer web full stack</p>
          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#savoirPlusModal">
            En savoir plus
          </button>

        </div> 
      </header>
      <div className=" row col-11 col-md-8 mx-auto my-5 p-4 shadow text-dark ">
        <section className="col-md-6">
          <h2 className="pb-2 mb-4 border-bottom border-3 border-primary">À propos</h2>
          <img className="col-12" src="../public/images/john-doe-about.jpg" alt="" />
          <div className="m-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Optio, necessitatibus consectetur tempore
            perferendis nostrum, ex delectus reiciendis impedit
            aut iure enim placeat? Natus, neque at?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Optio, necessitatibus consectetur tempore
            perferendis nostrum, ex delectus reiciendis impedit
            aut iure enim placeat? Natus, neque at?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Optio, necessitatibus consectetur tempore
            perferendis nostrum, ex delectus reiciendis </p>  
          </div>
          
        </section>
        <section className="col-md-6" >
            <h2  className="pb-2 mb-4 border-bottom border-3 border-primary">Mes compétences</h2>

            <h5>HTML 90%</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
                role="progressbar"
              ></div>
            </div>

            <h5>CSS 80%</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
                role="progressbar"
              ></div>
            </div>

            <h5>JavaScript 70%</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
                role="progressbar"
              ></div>
            </div>

            <h5>PHP 60%</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
                role="progressbar"
              ></div>
            </div>

            <h5>REACT 50%</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar"
                style={{ width: "50%" }}
                role="progressbar"
              ></div>
            </div>
        </section>
        <div className="modal fade " id="savoirPlusModal" tabindex="-1" aria-labelledby="savoirPlusModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content bg-dark">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 text-white" id="savoirPlusModalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ">
                <div className="row g-4 align-items-start">

                <div className="col-md-4 text-center">
                  <img
                    src="../../public/images/github-avatar.png" className="img-fluid rounded" alt="Avatar John Doe" />
                </div>

                <div className="col-md-8 text-white">

                  <h5>
                    <i className="bi bi-person-fill me-2"></i>
                    <a href="" className="decoration">John Doe</a>
                  </h5>

                  <p className="small">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Lyon, France
                  </p>

                  <p className="mb-3">
                    <i className="bi bi-chat-left-text me-2"></i>
                    As we all know, John Doe's identity is unknown.
                    I just wanted to contribute without being known.
                  </p>

                  <hr className="border-secondary" />

                  <p className="mb-1">
                    <i className="bi bi-box-seam me-2"></i>
                    <strong>Repositories :</strong> 1
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-people-fill me-2"></i>
                    <strong>Followers :</strong> 16
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-person-check-fill me-2"></i>
                    <strong>Following :</strong> 0
                  </p>

                </div>
              </div>
              </div>
              <div className="modal-footer ">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              </div>
            </div>
          </div>
        </div>
        </div>

    </main>
    
  );
}

export default accueil;