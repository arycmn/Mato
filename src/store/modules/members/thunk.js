import { storeMember } from './actions'
import API from '../../../services/axios'

export const getUserListThunk = () => async (dispatch) => {
  
  let users  = []
  console.log('testing..')
  
  try {
    const response = await API.get(`/users`)
    users = [...response.data]
    dispatch(storeMember(users))
    console.log(users)

  } catch (err) {
    console.log(err)
  }
}

export const getUserByIdThunk = (userId) => async (dispatch) => {
  
  let fetchedUser = {}

  try {
    const response = await API.get(`/users/${userId}`)
    fetchedUser = response.data
    dispatch(storeMember(fetchedUser))
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

// Move this to posts store
export const getPostsThunk = () => async (dispatch) => {
  
    let fetchedPosts = []
  
    try {
      const response = await API.get(`/posts`)
      fetchedPosts = response.data
      console.log(fetchedPosts)

      //dispatch to posts store
      //dispatch((fetchedUser))
    } catch (err) {
      console.log(err)

    }
  }
  
  // Move this to posts store
  export const getPostsByUserIdThunk = (userId) => async (dispatch) => {
  
    let fetchedPosts = []
  
    try {
      const response = await API.get(`/posts?userId=${userId}`)
      fetchedPosts = response.data
      console.log(fetchedPosts)
      //dispatch to posts store
      //dispatch((fetchedPosts))

    } catch (err) {
      console.log(err)

    }
  }

  export const getCampsites = () => async (dispatch) => {
  
    let fetchedCamps = []
  
    try {
      const response = await API.get(`/campsite`)
      fetchedCamps = response.data
      console.log(fetchedCamps)
      //dispatch to camps store
      //dispatch((fetchedCamps))

    } catch (err) {
      console.log(err)

    }
  }

  export const getCampsiteByCampsiteId = (campsiteId) => async (dispatch) => {
  
    let fetchedCamp = []
  
    try {
      const response = await API.get(`/campsite/${campsiteId}`)
      fetchedCamp = response.data
      console.log(fetchedCamp)
      //dispatch to camps store
      //dispatch((fetchedCamp))

    } catch (err) {
      console.log(err)

    }
  }

  export const register = (registerInfo) => async (dispatch) => {
    const { 
      email, 
      password,
      firstname,
      lastname,
      followers_id,
      following_id,
      activities_id,
      image_url } = registerInfo
    try {
      const response = await API.post(`/users`,{
        "email": email || '',
        "password": password || '',
        "firstname": firstname || '',
        "lastname": lastname || '',
        "followers_id": followers_id || [],
        "following_id": following_id || [],
        "activities_id": activities_id || [],
        "image_url": image_url || '' 
    
      })

    } catch (err) {
      console.log(err)
    }
  }
  

  export const login = async (loginInfo) =>  {
    
    const {email, password,id} = loginInfo

    try {
      const response = await API.post(`/signin`,{
        email:email,
        password:password,
        id:id
      })
      const { accessToken } = response.data
      localStorage.setItem('AuthorizationToken', accessToken)
    
    } catch (err) {
      console.log(err)
    }
  }
  

  