import React from 'react'
import '../DetailOffice/DetailOffice.css'

export default function DetailOffice() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-7 me-5">
      <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1592677818395-72868c4b3c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1534943770885-dacb3dfa9d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  <div className="mt-4">
  <table class="table table-dark table-striped" style={{borderRadius:15}}>
  <thead>
    <tr>
      <th colspan="4">Member Access Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span style={{fontWeight: 'bold'}}>Monday - Friday</span><br/>
        08.00 am - 06.00 pm
      </td>
      <td>
        <span style={{fontWeight: 'bold'}}>Saturday</span><br/>
        Closed
      </td>
      <td>
        <span style={{fontWeight: 'bold'}}>Sunday</span><br/>
        Closed
      </td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div>
  <div>
  <h2>Room Plan</h2>
  </div>
  <div>
  <h2>Pricing</h2>
  <div>
    <nav>
      <a href="#">Office Room</a>
      <a href='#'>Meeting Room</a>
      <a href='#'>Virtual Office</a>
      <a href='#'>Coworking</a>
    </nav>
  </div>
  <div>
    <label>Select Duration</label>
    <input type="text" />
  </div>
  </div>
  <div>
  <h2>They Said</h2>
  </div>
</div>
      </div>
      <div className="col">
        <div className="mb-4">
          <h1>BCA Tower</h1>
          <p  style={{color: 'grey'}}>50/F, Menara BCA Grand Indonesia, Jakarta, 10310</p>
          <button type="button" class="btn btn-dark">Request Visit</button>
        </div>
        <div>
          <h2>Overview</h2>
          <p >Enjoy stunning views from the 50th floor of BCA Tower, located across the street from the famous Bundaran Hotel Indonesia (Bundaran HI). Widely regarded as the centre of Jakarta, the area offers excellent public transport and a supportive business environment.

With its state-of-the-art design and first-class facilities, including swimming pool and penthouse restaurant, BCA Tower gives you all the benefits of the country’s rapid economic development. After a successful day, enjoy Jakarta’s numerous attractions, and take advantage of the building’s integrated shopping and entertainment complex.</p>
        </div>
        <div>
        <h2>Location</h2>
        </div>
      </div>
    </div>
    </div>
  )
}
