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
import { useSelector } from "react-redux";

function App() {

  const myStore = useSelector(store => store)

  const func = () => {
     getUserListThunk()
    console.log(myStore)

  }

  
  getCampsiteByCampsiteId('1')
  
  getCampsites()
  
  getPostsByUserIdThunk('1') 
  
  getPostsThunk()
  
  getUserByIdThunk('1')
  
  register()
  
  login({
    email: "test1@test.com",
    password:"$2a$10$ui6IwyEs59hhWFvVzQBAde5tl3p/r4ZRJp.r8Z1FpqHysLjVwGLfW"
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
