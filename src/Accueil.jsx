function accueil() {
  return (
    <main className="row">
      <header className="hero-bg text-white text-center">
        <div>
          <h1 className="display-2 ">Bonjour, je suis Jhon Doe </h1>
          <p className="display-3">Développer web full stack</p>
          <button type="button" class="btn btn-danger">En savoir plus</button> 
        </div> 
      </header>
      <div className=" row col-11 col-md-8 mx-auto my-5 p-4 shadow text-dark ">
        <section className="col-md-6">
          <h2 className="pb-2 mb-4 border-bottom border-primary">À propos</h2>
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
            <h2  className="pb-2 mb-4 border-bottom border-primary">Mes compétences</h2>

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
        
      </div>

    </main>
    
  );
}

export default accueil;