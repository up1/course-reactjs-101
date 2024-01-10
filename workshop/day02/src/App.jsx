import { useState } from "react"
import SearchBox from "./components/SearchBox"
import PostDetail from "./components/PostDetail"
import axios from "axios"

import { Provider } from 'react-redux';
import store from './redux/store';
import { NavBar } from "./components/NavBar";


function App() {
  console.log("App ...")
  const [post, setPost] = useState({ id: 0, title: "-", body: "-" })

  function handleSearch(postId) {
    console.log("handleSearch ...", postId)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <Provider store={store}>
        <NavBar />
        <SearchBox callback={handleSearch} />
        <PostDetail post={post} />
      </Provider>
    </>
  )
}

export default App
