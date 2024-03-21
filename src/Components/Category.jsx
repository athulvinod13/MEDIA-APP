import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { AddCategoryApi,GetAllCategoriesApi, deleteCategoryApi, getAVideoApi, updateCategoryApi } from '../services/AllApi';
import VideoCard from './VideoCard';


function Category(dropResponse) {
  const [allCategories,setAllCatgories]=useState([])

  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    if(categoryName){
      const result=await AddCategoryApi({categoryName,allvideos:[]})
      if(result.status>=200 && result.status<=300){
        handleClose()
        getAllCategories()
      }
      else{
        alert(result.message)
      }
    }
    else{
      alert("Please fil the form")
    }
  }

useEffect(()=>{
  getAllCategories()
},[dropResponse])

const getAllCategories=async()=>{
  const {data}=await GetAllCategoriesApi()
  setAllCatgories(data)
}

const removCategory=async(id)=>{
  await deleteCategoryApi(id)
  getAllCategories()
}

const dragOver=(e)=>{
      console.log("Video dragging over the category");
      e.preventDefault()
}

const videoDrop=async(e,categoryId)=>{
    const videoID=e.dataTransfer.getData("videoID")
    console.log("Video ID: " + videoID +"Dropped inside the category"+categoryId);
    const {data}= await getAVideoApi(videoID)
    console.log(data);
    const selectedCategory=allCategories.find(item=>item.id==categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

  await updateCategoryApi(categoryId, selectedCategory)
  getAllCategories()
}

const dragStarted=(e,videoId,CategoryId)=>{
  let datashare={videoId,CategoryId}
  e.dataTransfer.setData('data',JSON.stringify(datashare))
  console.log("Drag started");
}

  return (
    <>
    <div className='d-grid'>
      <Button className='btn btn-success text-light' onClick={handleShow}>Add category</Button>
      </div> 

     

      {
        allCategories?.length>0?allCategories.map(Category=>(
          <div className='border rounded p-3 mt-3' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,Category?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
                <h6>{Category ?.categoryName}</h6>
                <button className='btn' onClick={()=>removCategory(Category?.id)}><i class="fa-solid fa-trash text-danger border-none "></i></button>
            </div>
          
           <Row>
            {
            Category?.allvideos?.length>0?Category?.allvideos.map(card=>(
            <Col sm={12} draggable onDragStart={e=>dragStarted(e,card.id,Category.id)}>
              <VideoCard video={card} insideCategory={true}/>
            </Col>
            )):null
            }
      
      </Row>

          </div>
        )):<p className='text-danger fs-2'>No category added yet...</p>
      }  
       <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false} 
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Add Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <FloatingLabel
        controlId="floatingInputId"
        label="Add Category"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Add Category" name='category' />
      </FloatingLabel>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleAdd}>Add</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default Category