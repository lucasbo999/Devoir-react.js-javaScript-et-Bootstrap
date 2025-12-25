function contact() {
  return (
    <div className="row my-5 mx-auto ">
      <h1 className="text-center">Contact</h1>

      <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future
      collaboration, merci de remplir le formulaire de contact.</p>

      <hr className="col-4 mx-auto border-4 border-primary opacity-100" />
      <div className="col-11 col-md-9 mx-auto  m-4">
        <div className=" row p-4 mx-auto shadow text-dark ">
          <section className="col-md-6">
            <h2 className="pb-2 mb-4 border-bottom border-3 border-primary">Formulaire de contact</h2>

            <form className="text-center">
                <input type="text" className="form-control mb-2" placeholder="Votre nom"/>
                <input type="email" className="form-control mb-2" placeholder="Votre adresse email" />
                <input type="tel" className="form-control mb-2" placeholder="Votre numéro de téléphone"/>
                <input type="email" className="form-control mb-2" placeholder="Sujet"/>
                <textarea className="form-control mb-2" rows={13} placeholder="Votre message"></textarea>

              <button className="btn btn-primary mt-3">Envoyer</button>
            </form>  
          </section>
          <section className="col-md-6">
            <h2 className="pb-2 mb-4 border-bottom border-3 border-primary">Mes coordonnées</h2>

            <div>
              <strong>John Deo</strong> <br />
              <i class="bi bi-map"></i> <a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="text-dark text-decoration-none">40 rue Laure Diebold</a> <br />
              <i class="bi bi-geo-alt"></i> <a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="text-dark text-decoration-none">69009 Lyon, France</a> <br />
              <i class="bi bi-phone"></i> <a href="tel:10 20 30 40 50" className="text-dark text-decoration-none">10 20 30 40 50</a> <br />
              <i class="bi bi-envelope-at"></i> <a href="mailto:john.doe@gmail.com" className="text-dark text-decoration-none">john.doe@gmail.com</a> <br />
              <div className="iframeBoite"> 
              <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1766333719927!5m2!1sfr!2sfr" 
              allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            
          </section>  
        </div>
      </div>
      
      
      
    </div>
  );
}

export default contact;