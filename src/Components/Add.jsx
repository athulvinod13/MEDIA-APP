import React from 'react'
import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {UploadVideoApi} from '../services/AllApi'


function Add(setUploadVideoResponse) {
  
  const [show, setShow] = useState(false);
  const [upoadVideo,setUpVideo]=useState({
    id:'',caption:'',url:'',link:''
  })
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeLink=(e)=>{
        const {value}=e.target
        if(value.includes("v=")){
          let vID=value.split("v=")[1].slice(0,11)
          setUpVideo({...upoadVideo,link:`https://www.youtube.com/embed/${vID}`})
          console.log(upoadVideo);
        }
        else{
          setUpVideo({...upoadVideo,link:""})
        }
  }

  const handleUpload=async()=>{
    const {id,caption,url,link}=upoadVideo
    if(!id ||!caption ||!url ||!link){
      alert('Please enter the fields')
    }
    else{
      const result=await UploadVideoApi(upoadVideo)
      console.log(result);
    if(result.status>=200 && result.status<=300){
      handleClose();
      
      // reset the fields 
      setUpVideo({
        id:'',caption:'',url:'',link:''
      })
      setUploadVideoResponse(result.data)
    }
    else{
      alert(result.message)
    }
    }
  }

  return (
    <>
    <div className='d-flex align-items-center'>
      
      <button className='btn btn-success ' onClick={handleShow}><h4 className='text-light'>Upload Videos <i class="fa-solid fa-arrow-up-right-from-square"></i></h4></button>
     
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>upload file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel
        controlId="floatingInputId"
        
        label="ID"
        className="mb-3"
      >
        <Form.Control type="text" name="id" placeholder="ID" onChange={e=>setUpVideo({...upoadVideo,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputId"
        label="Song Title"
        className="mb-3"
      >
        <Form.Control type="text" name="title" placeholder="Song Title"onChange={e=>setUpVideo({...upoadVideo,caption:e.target.value})} />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInputId"
        label="Enter Image URL"
        className="mb-3"
      >
        <Form.Control type="text" name="image" placeholder="Enter Image URL"onChange={e=>setUpVideo({...upoadVideo,url:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputId"
        label="Enter Video URL"
        className="mb-3"
      >
        <Form.Control type="text" name="url" placeholder="Enter Video URL"onChange={getYoutubeLink} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>

</>
  )
}

export default Add