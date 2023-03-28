import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Alert from './products/Alert';
import { useState } from 'react';
function Home() {


  let [alert,setBoth]=useState(null)
  const showAlert=(message,type)=>{
    setBoth({
        
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setBoth(null)
    },4000)
  }
  return (
    
    <div className='text-center'>
        <p className='lead display-1'></p>
        <Carousel className='h-50'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/8b2558_51614afd2efe4d1291b696172a127324~mv2.jpg/v1/fill/w_850,h_624,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8b2558_51614afd2efe4d1291b696172a127324~mv2.jpg"
          alt="First slide"
          height="15%"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Government</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.netleafinfosoft.com/our-blog/wp-content/uploads/2020/06/website-designing.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='text-dark'>Services</h3>
        <p className='text-dark fs-3'>Jobs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://www.sesameworkshopindia.org/sites/default/files/imageservicecache/2021-08/596ecbe217cd7dd80b5908dc09e26f0f_0.jpg/0a01c02050b1dd4e04d08fd170771e26.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='text-dark display-1'>Our Funders</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
    <Alert alert={alert} setBoth={setBoth}/>
    <div className="card m-5" >
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-3 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">{element.company}</h1> */}
                            
                          <button onClick={()=>showAlert("UPI Id: 9372564892@ybl","success")} className="btn btn-dark p-3 fw-bold fs-5">Donate</button>
                        </div>
                        <div className="col-sm-4">
                            
                            <Card.Img variant="top" src="https://images.moneycontrol.com/static-mcnews/2021/10/donation.jpg?impolicy=website&width=770&height=431" className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>
    </div>


    </div>
  )
}

export default Home