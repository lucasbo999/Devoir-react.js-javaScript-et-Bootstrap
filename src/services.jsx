function Services() {
  return (
    <main className="row ">
       <img src="../public/images/banner.jpg" alt="" />
       <div className="text-center m-4">
          <h1>Services</h1>
          <p> Voici quelques-unes de mes réalisations</p>
          <hr className="col-4 mx-auto border-primary" />
       </div>

      <div className="row mx-auto">

        <div className="card col-11 col-md-4 m-4 m-md-1">
          <div className="card-body">
            <h2 className="card-title">Card title</h2>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
        </div> 

        <div className="card col-11 col-md-4 m-4 m-md-1">
          <div className="card-body">
            <h2 className="card-title">Card title</h2>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
        </div> 

        <div className="card col-11 col-md-4 m-4 m-md-1">
          <div className="card-body">
            <h2 className="card-title">Card title</h2>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
        </div> 
      </div>


    </main>
  );
}

export default Services;