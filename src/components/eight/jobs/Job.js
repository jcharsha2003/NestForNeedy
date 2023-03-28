import React from 'react'
import axios from 'axios'
import {useForm} from "react-hook-form"
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from '../products/Alert';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';



function Job() {
  let {register,handleSubmit,setValue,getValues,formState:{errors}}=useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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


  const saveModifiedUser=()=>{
    handleClose()
    showAlert("applied successfully","success")
    
  }



 let [data,setData]=useState([])
 let [data1,setData1]=useState([])
 useEffect(()=>{
  
  axios.get("http://localhost:5000/job-api/data")
  .then(response=>{setData(response.data.payload)
  
  })
  .catch(err=>console.error(err))

  // getting from workshop db
  axios.get("http://localhost:5000/work-api/data1")
  .then(response=>{setData1(response.data.payload)
  console.log(response.data.payload)
  })
  .catch(err=>console.error(err))

 },[])
 console.log(data1)
  return (
    <div><Alert alert={alert} setBoth={setBoth}/>
    <div className='container'>Job
      <div className='row row-cols-1 row-cols-sm-1  gy-10 '>
      <div className='col-sm-11'>
        <h1>Jobs</h1>
      { 
        data?.map((element)=>(
          <div  key={element._id}>
       
    <div className="card m-5" >
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">{element.company}</h1> */}
                            <p className="lead text-black fs-4 fw-bold">Our shelter residents and students love participating in interactive workshops that are educational and fun.

So, if you’re an expert/facilitator, reach out to us!
We organize workshops on the following themes:
                            <ul class="list-group">
  <li class="list-group-item active">Computers</li>
  <li class="list-group-item">

  Sports and Yoga
</li>
  <li class="list-group-item">
  Creative Arts</li>
  <li class="list-group-item">Primary Education 
</li>
<li class="list-group-item">Basket Weaving
</li>
  
</ul></p>
                          <button onClick={handleShow} className="btn btn-dark p-3 fw-bold fs-5">Apply now</button>
                        </div>
                        <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>

          </div>
          

        ))
      }
      </div>
      <div className='col-sm-11'>
      <h1>Job opportunities</h1>
      { 
        data1?.map((element)=>(
          <div  key={element._id}>
       
    <div className="card m-5" key={element._id}>
    <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            <h1 className="text-black fs-1 fw-bold">{element.company}</h1>
                            <p className="lead text-black fs-4 fw-bold">We offer multiple opportunities for the youth to get involved in field action and gain grassroot experience in the following areas: 
                            <ul class="list-group">
  <li class="list-group-item active">Social Care Worker</li>
  <li class="list-group-item">
Teaching and Mentorship
</li>
  <li class="list-group-item">
Content Writer</li>
  <li class="list-group-item">Designer/ Photographer</li>
  
</ul></p>
                          <button onClick={handleShow} className="btn btn-dark p-3 fw-bold fs-5">Apply Now</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>

          </div>
          

        ))
      }
      </div>
      </div>
       
    </div>
    
    
    <Modal show={show} onHide={handleClose} backdrop="static" centered className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  onSubmit={handleSubmit(saveModifiedUser)}>
          <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col'>
                <label htmlFor='username'  className='form-label'>User Name</label>
                <input type="text" id='username'  className='form-control bg-light' 
                {...register("username",{required:true,minLength:6,maxLength:10})} disabled
                ></input>
                {
                    errors.username?.type==="required" && <p className=' text-danger'>*enter your first name</p>
                }
                {
                    errors.username?.type==="minLength" && <p className=' text-danger'>*minimum 4 letter word is required</p>
                }
                {
                    errors.username?.type==="maxLength" && <p className=' text-danger'>*maximum 6 letter word is required</p>
                }

            </div>
           
          </div>
          {/* second row for date of birth  */}
          <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col'>
                <label htmlFor='dob'  className='form-label'>date of birth</label>
                <input type="date" id='dob'  className='form-control bg-light' {...register("dob",{required:true})}></input>
                {errors.dob?.type==="required" && <span className='text-sm text-danger'>*birthday is required</span>}
            </div>
            
          </div>
          {/* third row  contains Email and Phone Number*/}
          <div className='row row-cols-1 '>
            <div className='col'>
                <label htmlFor='email'  className='form-label'>Email</label>
                <input type="email" id='email'  className='form-control bg-light'{...register("email",{required:true})} ></input>
                {
                    errors.email?.type==="required" && <p className=' text-danger'>*enter your valid email id</p>
                }
            </div>
            <div className='col'>
            <label htmlFor='phone' className='form-label'>Phone Number</label>
                <input type="number" id='phone' className='form-control bg-light' {...register("phone",{required:true,maxLength:11})}  ></input>
                {
                    errors.phone?.type==="required" && <p className=' text-danger'>*enter your Phone number</p>
                }
                {
                    errors.phone?.type==="maxLength" && <p className=' text-danger'>*maximum number length should be 10</p>
                }
            </div>
           
          
            <div className='col'>
            <label htmlFor='phone' className='form-label'>Addarcard Number</label>
                <input type="number" id='phone' className='form-control bg-light' {...register("phone",{required:true,maxLength:11})}  ></input>
                {
                    errors.phone?.type==="required" && <p className=' text-danger'>*enter your Phone number</p>
                }
                {
                    errors.phone?.type==="maxLength" && <p className=' text-danger'>*maximum number length should be 10</p>
                }
            </div>
          </div>
          
          
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={saveModifiedUser}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Job