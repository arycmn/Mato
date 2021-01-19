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
    dispatch(getCampsiteByCampsiteId('1'))
    dispatch(getCampsites())
    dispatch(getPostsByUserIdThunk('1') )
    dispatch(getPostsThunk())
    dispatch(getUserByIdThunk('1'))

    login({
      email: "test1@test.com",
      password:"asdqwe"
    })
    console.log(myStore)

  }
  
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
