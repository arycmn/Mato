import YourJourney from "./pages/YourJourney";
import GlobalStyle from "./styles/global";
import {
  getUserListThunk,
  getCampsiteByCampsiteId,
  getCampsites,
  getPostsByUserIdThunk, 
  getPostsThunk,
  getUserByIdThunk,
  register,
  login } from './store/modules/members/thunk'
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const myStore = useSelector(store => store)

  const func = () => {
    dispatch(getUserListThunk())
    login({
      email: "test1@test.com",
      password:"asdqwe"
    })
    console.log(myStore)

  }

  
  getCampsiteByCampsiteId('1')
  
  getCampsites()
  
  getPostsByUserIdThunk('1') 
  
  getPostsThunk()
  
  getUserByIdThunk('1')
  
  register({

  })
  


  console.log('test')
  return (
    <div>
      <GlobalStyle />
      <button onClick={() => func() }>asd</button>
    </div>
  );
}

export default App;
