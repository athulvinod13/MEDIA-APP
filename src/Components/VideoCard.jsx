import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { AddVideoWatchHistory,deleteVideoApi } from '../services/AllApi';



function VideoCard({video,insideCategory,setDeleteVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ setShow(true);

  //generate data to wathHistory
  const {caption,link}=video;
  let today =new Date()
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
  minute:'2-digit',second:'2-digit'}).format(today)
  let videoHistory={caption,link,timeStamp}
    await AddVideoWatchHistory(videoHistory)
  }

  const removeVideo=async(id)=>{
    await deleteVideoApi(id);
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("video drag started..id"+id);
    e.dataTransfer.setData('videoId',id)
  }


  return (
    <>

{insideCategory?<Card  style={{ marginTop:'10px', width:'250px', height:'150px' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img className='mt-1 -3' onClick={handleShow}   height={150} variant="top" src={video?.url}/>  
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
        <h6>{video?.caption}</h6>
          {insideCategory?null:<button className='btn bg-none ' onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash text-danger border-none "></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>
    :<Card  style={{ width:'18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
    <Card.Img className='mt-1' onClick={handleShow}  height={300} variant="top" src={video?.url}/>  
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
      <h6>{video?.caption}</h6>
        {insideCategory?null:<button className='btn bg-none ' onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash text-danger border-none "></i></button>}
      </Card.Title>
    </Card.Body>
  </Card>
  
  }

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe className="w-100" width="836" height="314" src={`${video?.link}?autoplay=1`} title={`${video?.caption}`}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default VideoCard