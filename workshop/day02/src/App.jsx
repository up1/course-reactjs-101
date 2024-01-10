import { useState } from "react"
import SearchBox from "./components/SearchBox"
import PostDetail from "./components/PostDetail"

function App() {
  const [post, setPost] = useState({ id: 0, title: "-", body: "-" })

  function handleSearch(postId) {
    console.log("handleSearch ...", postId)
    // TODO 1: Call api to get post detail
    // Call api = https://jsonplaceholder.typicode.com/posts/1
    // TODO 2: Update post state
  }

  return (
    <>
      <SearchBox callback={handleSearch} />
      <PostDetail post={post} />
    </>
  )
}

export default App
