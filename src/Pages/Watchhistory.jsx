import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {DelVideoWatchHistory,GetVideoWatchHistoryApi} from "../services/AllApi"

function Watchhistory() {

  const [history,setHistory]=useState([])

  useEffect(()=>{
      getHistory()
  },[])

  const getHistory=async()=>{
    const result=await GetVideoWatchHistoryApi()
    if(result.status==200){
      setHistory(result.data)
      console.log(history);
    }
    else{
      console.log("API FAILED");
      console.log(result.message);
    }
  }
   
  const removeHistory=async(id)=>{
    await  DelVideoWatchHistory(id)
    getHistory()
  }

  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
        <h6>Watch History</h6>
        <Link style={{textDecoration:'none', color:'#1ED760'}} to={'/home'}>Back To home</Link>
    </div>

    <table className='table mb-5 container shadow w-100'>

<thead>
<tr>
  <th>#</th>
  <th>Caption</th>
  <th>URL</th>
  <th>Time Stamp</th>
  <th>Action</th>
</tr>
</thead>

<tbody>
  {
    history?.length>0?history?.map((video,index)=>(

      <tr>
      <td> {index+1}</td>
      <td> {video?.caption}</td>
      <td> <a href={video?.link} target='blank'></a></td>
      <td>{video?.timeStamp}</td>
      <td><button className='btn 'onClick={()=>
      removeHistory(video?.id)}> <i class="fa-solid fa-trash text-danger"></i></button></td>
      </tr>


     ) ):<p>History Empty</p>
   
  
  }
</tbody>
</table>
 </> 
 )
}

export default Watchhistory