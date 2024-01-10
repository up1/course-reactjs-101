import { useState } from "react"
import SearchBox from "./components/SearchBox"
import PostDetail from "./components/PostDetail"

function App() {
  const [post, setPost] = useState({ id: 0, title: "-", body: "-" })
  return (
    <>
      <SearchBox />
      <PostDetail post={post} />
    </>
  )
}

export default App
