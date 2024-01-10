import { useState } from "react"
import SearchBox from "./components/SearchBox"
import PostDetail from "./components/PostDetail"
import axios from "axios"

function App() {
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
      <SearchBox callback={handleSearch} />
      <PostDetail post={post} />
    </>
  )
}

export default App
