import React, {useState, useEffect} from 'react'
import '../DetailOffice/DetailOffice.css'
import { BsFillStarFill} from "react-icons/bs";

export default function DetailOffice() {
  const [quantity, setQuantity] = useState(0);
  const [monthly, setMonthly] = useState(0);
  // Make a stars
  const totalStar = [];
  for (let index = 0; index < 4 ; index++) {
    totalStar.push( <BsFillStarFill className="mx-1" style={{color: '#FEC901'}}/>);        
  }
  //fungsi tambah dan kurang
  const tambah = (tipe)=>{
    if(tipe === "quantity")
        setQuantity(quantity + 1);
    else if(tipe === "monthly"){
        setMonthly(monthly + 1);
    }
}

const kurang = (tipe)=>{
    if(tipe === "quantity")
        if(quantity !== 0){
            setQuantity(quantity - 1);
        }else{
            alert("data harus diisi")
        }
    else if(tipe === "monthly"){
        if(monthly !== 0){
            setMonthly(monthly - 1);
        }else{
            alert("data harus diisi")
        }
    }
} 
  return (
    <div className="container">
    <div className="row">
      <div className="col-7 me-5">
      <div>
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:400}} src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:400}} src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:400}} src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
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
  <div className="d-flex flex-row">
    <div>
      <label>Select Duration</label><br/>
      <select>
        <option value="month">Month</option>
        <option value="day">Day</option>
      </select>
    </div>
    <div>
      <label>Select Quantity</label><br/>
      <div className="d-flex flex-row">
        <button className="bg-yellow-400 px-1.5" onClick={() => kurang("quantity")}>-</button>
          <h2>{quantity}</h2>
        <button type="button" className="bg-yellow-400 px-1.5 " onClick={() => tambah("quantity")}>+</button>
      </div>
    </div>
    
  </div>
  </div>
  <div>
  <h2>They Said</h2>
  <div className="row">
  <div className="card mb-3 col-4" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="flex">
                      {totalStar}
        </div>
        <h5 className="card-title">Cameron Steve</h5>
        <p class="card-text">Nice Spaces</p>
      </div>
    </div>
  </div>
  </div>
  <div className="card mb-3 col-4" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="flex">
                      {totalStar}
        </div>
        <h5 className="card-title">Cameron Steve</h5>
        <p class="card-text">Nice Spaces</p>
      </div>
    </div>
  </div>
  </div>
  <div className="card mb-3 col-4" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="flex">
                      {totalStar}
        </div>
        <h5 className="card-title">Cameron Steve</h5>
        <p class="card-text">Nice Spaces</p>
      </div>
    </div>
  </div>
  </div>
  </div>
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
