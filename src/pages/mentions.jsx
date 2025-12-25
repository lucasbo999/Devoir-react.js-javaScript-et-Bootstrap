function Mentions() {
  return (
    <main className="row text-center p-5 ">
      <div>
        <h1 className="">Mentions légales</h1>
        <hr className=" col-4 mx-auto border-4 border-primary opacity-100 " />  
      </div>
      


      <div className="accordion col-11 col-md-8 mx-auto my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Editeur du site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body text-start">
              <strong>John Deo</strong> <br />
              <i class="bi bi-map"></i> <a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="text-dark text-decoration-none">40 rue Laure Diebold</a> <br />
              <i class="bi bi-geo-alt"></i> <a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="text-dark text-decoration-none">69009 Lyon, France</a> <br />
              <i class="bi bi-phone"></i> <a href="tel:10 20 30 40 50" className="text-dark text-decoration-none">10 20 30 40 50</a> <br />
              <i class="bi bi-envelope-at"></i> <a href="mailto:john.doe@gmail.com" className="text-dark text-decoration-none">john.doe@gmail.com</a> <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Hébergeur
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-start">
              <strong>alwaysdata</strong> <br />
              91 Rue du Faubourg Saint-Honoré, 75008 Paris <br />
              <i class="bi bi-globe"></i> <a href="">www.alwaysdata.com</a> <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Crédits
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-start">
              <strong>Crédits</strong><br />
               Ce site a été réalisé par John Doe, étudiant au <a href="">Centre Européen de formation</a>. <br />
              Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="">Pixabay</a>. <br />
              La favicon de ce site a été fournie par <a href="">John doe Icons erstellt von Freepik - Flaticon</a>. <br />
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default Mentions;