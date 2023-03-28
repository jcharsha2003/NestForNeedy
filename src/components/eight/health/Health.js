import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from '../products/Alert';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useForm} from "react-hook-form"
function Health() {

  let {register,handleSubmit,setValue,getValues,formState:{errors}}=useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 



  const saveModifiedUser=()=>{
    handleClose()
    showAlert("applied successfully","success")
    
  }
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
 let [data,setData]=useState([])
 useEffect(()=>{
  
  axios.get("http://localhost:5000/health-api/data")
  .then(response=>{setData(response.data.payload)
  console.log(response.data.payload)
  })
  .catch(err=>console.error(err))

 },[])
 console.log(data)
  return (
    <div><Alert alert={alert} setBoth={setBoth}/>
    <div>Health
      <div>
      <h1>Health Care</h1>
      {
        data?.map((element)=>(
          <div className="card m-5" key={element._id}>
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">{element.care}</h1>
                            <p className="lead text-black fs-4 fw-bold">{element.price}</p> */}
                            <h1 className="text-black fs-1 fw-bold">Health Care</h1>
                          <button onClick={()=>showAlert("Appointment booked succesfully","success")} className="btn btn-dark p-3 fw-bold fs-5"><a className='text-decoration-none text-whit' href='https://www.apollo247.com/specialties'>Appointment</a></button>
                          
                        </div>
                        <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>

        ))
      }
      </div>
      <div className="card m-5" >
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-6">
                            
                            <Card.Img variant="top" src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62dea560b1b7f70d33e0277b_free-logos-government.png" className="w-100" />
                         </div>
                       
                         <div className="col-sm-6 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">Number of bedrooms:{element.bedroom}</h1>
                            <p className="lead text-black fs-4 fw-bold">Price:{element.price}</p> */}
                          <button onClick={handleShow} className="btn btn-dark p-3 fw-bold fs-5">APPLY FOR GOVERNMENT AID </button>
                        </div>
                       
                    </div>
                </div>
            </div>

       
    </div><Modal show={show} onHide={handleClose} backdrop="static" centered className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  onSubmit={handleSubmit(saveModifiedUser)}>
          <div className='row row-cols-1 '>
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
            <label htmlFor='phone' className='form-label'>Ration NUmber</label>
                <input type="number" id='phone' className='form-control bg-light' {...register("phone",{required:true,maxLength:11})}  ></input>
                {
                    errors.phone?.type==="required" && <p className=' text-danger'>*enter your Phone number</p>
                }
                {
                    errors.phone?.type==="maxLength" && <p className=' text-danger'>*maximum number length should be 10</p>
                }
            </div>
            <div className='col'>
            <label htmlFor='phone' className='form-label'>Income Certificate Number</label>
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
          <div className='col'>
            <label htmlFor='phone' className='form-label'>Expected Budget</label>
                <input type="number" id='phone' className='form-control bg-light' {...register("phone",{required:true,maxLength:11})}  ></input>
                {
                    errors.phone?.type==="required" && <p className=' text-danger'>*enter your Phone number</p>
                }
                {
                    errors.phone?.type==="maxLength" && <p className=' text-danger'>*maximum number length should be 10</p>
                }
            </div>
            <div className='col'>
                <label htmlFor='username'  className='form-label'>Disease</label>
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
      </Modal></div>
  )
}

export default Health