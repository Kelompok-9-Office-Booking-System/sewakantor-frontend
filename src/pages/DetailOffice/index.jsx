import React, {useState, useEffect} from 'react'
import '../DetailOffice/DetailOffice.css'
// import icon react-icon
import { BsFillStarFill} from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function DetailOffice() {
  const [harga, setHarga] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [monthly, setMonthly] = useState(0);
  // Make a stars
  const totalStar = [];
  for (let index = 0; index < 4 ; index++) {
    totalStar.push( <BsFillStarFill className="mx-1" style={{color: '#FEC901'}}/>);         
  }
  //fungsi tambah dan kurang quantity dan monthly
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
  </tbody>
</table>
  </div>
  {/* Room Plan */}
  <div className="mb-4">
  <h2>Room Plan</h2>
  <img style={{height:400, width:'100%'}} src="https://images.unsplash.com/photo-1654795009861-c3fca8ccd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="..."/>
  </div>
  <div>
  <h2 className="">Pricing</h2>
  <div>
    <nav>
      <a href="#">Office Room</a>
      <a href='#'>Meeting Room</a>
      <a href='#'>Virtual Office</a>
      <a href='#'>Coworking</a>
    </nav>
  </div>
  <div className="d-flex justify-content-between mt-4">
    <div>
      <label>Select Duration</label><br/>
      <select>
        <option value="month">Month</option>
        <option value="day">Day</option>
      </select>
    </div>
    <div>
      <label>Select Quantity</label><br/>
      <div className="d-flex justify-content-between">
        <button className="bg-yellow-400 px-1.5" onClick={() => kurang("quantity")}>-</button>
          <h2>{quantity}</h2>
        <button type="button" className="bg-yellow-400 px-1.5 " onClick={() => tambah("quantity")}>+</button>
      </div>
    </div>
    <div>
      <label>No of Monthly</label><br/>
      <div className="d-flex justify-content-between">
        <button className="bg-yellow-400 px-1.5" onClick={() => kurang("monthly")}>-</button>
          <h2>{monthly}</h2>
        <button type="button" className="bg-yellow-400 px-1.5 " onClick={() => tambah("monthly")}>+</button>
      </div>
    </div>
    <div>
      <label>Select Duration</label><br/>
      <input type="date" name="date" />
    </div>
  </div>
  <div className="d-flex justify-content-between mt-3">
    <p style={{fontWeight:'bold'}}>1 Month Selected</p>
    <button type="button" class="btn btn-dark">
      Check Avabililty
    </button>
  </div>
  <div className="mb-4">
    <h3>Rp 2.600.000</h3>
  </div>
  </div>
  <div>
  <h2 className="mb-4">They Said</h2>
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
          <button type="button" class="btn btn-dark px-5">Request Visit</button>
        </div>
        <div>
          <h2>Overview</h2>
          <p >Enjoy stunning views from the 50th floor of BCA Tower, located across the street from the famous Bundaran Hotel Indonesia (Bundaran HI). Widely regarded as the centre of Jakarta, the area offers excellent public transport and a supportive business environment.

With its state-of-the-art design and first-class facilities, including swimming pool and penthouse restaurant, BCA Tower gives you all the benefits of the country’s rapid economic development. After a successful day, enjoy Jakarta’s numerous attractions, and take advantage of the building’s integrated shopping and entertainment complex.</p>
        </div>
        <div>
        <div className="mb-4">
        <h2>Location</h2>
        {/* Maps */}
        <iframe style={{width: '100%', height: 300}} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.90100633254!2d113.8835751143952!3d-2.1911853984028387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb3c3c24d6357%3A0xf4f75e603e30a390!2sJl.%20Rajawali%20VII%2C%20Bukit%20Tunggal%2C%20Kec.%20Jekan%20Raya%2C%20Kota%20Palangka%20Raya%2C%20Kalimantan%20Tengah%2074874!5e0!3m2!1sen!2sid!4v1655901502512!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'></iframe>        {/* Nearby Location */}
        </div>
        <div>
          <div className ="d-flex">
            <ImLocation size={23}/>
            <h3>Nearby Places</h3>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div>
              <p>Gelora Bung Karno</p>
              </div>
              <p>0,1 km</p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
              <p>Gelora Bung Karno</p>
              </div>
              <p>0,1 km</p>
            </div>
          </div>
        </div>
        </div>
        <div>
        <h2>Facilities</h2>
        <div className="row">
          <div className="col-6">
          <p>Meeting Room</p>
          </div>
          <div className="col-6">
            <p>Free Area</p>
          </div>
          <div className="col-6">
          <p>Meeting Room</p>
          </div>
          <div className="col-6">
            <p>Free Area</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
