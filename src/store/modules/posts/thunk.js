import { storePosts } from './actions'
import API from '../../../services/axios'

export const getPostsThunk = () => async (dispatch) => {
    
    let fetchedPosts = []
  
    try {
      const response = await API.get(`/posts`)
      fetchedPosts = response.data

      dispatch(storePosts(fetchedPosts))
    } catch (err) {
      console.log(err)

    }
  }

  export const getPostsByUserIdThunk = (userId) => async (dispatch) => {
  
    let fetchedPosts = []
  
    try {
      const response = await API.get(`/posts?userId=${userId}`)
      fetchedPosts = response.data
      dispatch(storePosts(fetchedPosts))

    } catch (err) {
      console.log(err)

    }
  }