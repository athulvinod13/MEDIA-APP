import { commonAPI } from "./CommomApi"
import {SERVER_URL} from "./ServerUrl"

//Upload new video
export const UploadVideoApi=async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

//Get all uploaded video 
export const getAllUploadedVideoApi=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}

// Get a video
export const getAVideoApi=async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
}

// Add video to watch history
export const AddVideoWatchHistory=async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get video to watch history
export const GetVideoWatchHistoryApi=async (video)=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// delete history
export const DelVideoWatchHistory=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// delete all video 
export const DelAllVideoWatchHistory=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

// add category
export const AddCategoryApi=async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category/`,category)
}

// get all categories

export const GetAllCategoriesApi=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/category/`,"")
}

// delete category

export const deleteCategoryApi=async (id)=>{
    return await commonAPI ('DELETE',`${SERVER_URL}/category/${id}`,{})
}

// delete video

export const deleteVideoApi=async (id)=>{
    return await commonAPI ('DELETE',`${SERVER_URL}/allvideos/${id}`,{})
}

// Update video to category

export const updateCategoryApi=async (id,categoryDetails)=>{
    return await commonAPI ('PUT',`${SERVER_URL}/category/${id}`,categoryDetails)
}