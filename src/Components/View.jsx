import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideoApi, updateCategoryApi,GetAllCategoriesApi } from '../services/AllApi'


function View({uploadVideoResponse,setDropResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  const [allvideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllUploadVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadVideos =async () =>{
    const result = await getAllUploadedVideoApi();
    if(result.status ===200){
      console.log(result);
      setAllVideos(result.data);
    }
    else{
      console.log("API failed");
      setAllVideos([]);
    }
  }
  console.log(allvideos);

 const dragView=(e)=>{
  e.preventDefault();
 }

 const dropView=async(e)=>{
    const {videoId,CategoryId}=JSON.parse(e.dataTransfer.getData("data"))
    const {data}=await GetAllCategoriesApi()
    const selectedCategory=data.find(item=>item.id==CategoryId)
    let result = selectedCategory.allvideos.filter(item=>item.id!==videoId)
    console.log(result);

    let {id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allvideos:result}
    const res=await updateCategoryApi(CategoryId,newCategory)
    setDropResponse(res)
 }

  return (
    <>

    <Row droppable="true" onDragOver={e=>dragView(e)} onDrop={e=>dropView(e)}>
      {allvideos?.length>0?allvideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video}/>
        </Col>
        
      )):<p>Nothing to display</p>
    }
      
    </Row>

    </>
  )
}

export default View