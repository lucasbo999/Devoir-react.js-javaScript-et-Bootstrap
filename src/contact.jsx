function contact() {
  return (
    <section className="row my-5 mx-auto ">
      <h1 className="text-center">Contact</h1>

      <p className="text-center">Pour me contacter e n vue d'un entretien o u d'une future
      collaboration, merci de remplir l e formulaire d e contact.</p>

      <hr className="col-4 mx-auto border-primary" />

      <div className="col-11 mx-auto">
        <section>
          <h2 className="pb-2 mb-4 border-bottom border-primary">Formulaire de contact</h2>

          <form className="text-center">
              <input type="text" className="form-control mb-2" placeholder="Votre nom"/>
              <input type="email" className="form-control mb-2" placeholder="Votre adresse email" />
              <input type="tel" className="form-control mb-2" placeholder="Votre numéro de téléphone"/>
              <input type="email" className="form-control mb-2" placeholder="Sujet"/>
              <input type="email" className="form-control mb-2" placeholder="Votre message"/>

            <button className="btn btn-primary mt-3">Envoyer</button>
          </form>  
        </section>
        <section>
          <h2 className="pb-2 mb-4 border-bottom border-primary">Mes coordonnées</h2>
          <p>john doe</p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
        </section>  
      </div>
      
      
    </section>
  );
}

export default contact;