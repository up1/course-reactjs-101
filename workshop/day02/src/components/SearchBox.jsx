const SearchBox = (props) => {

    function xyz() {
      // TODO: Get post id from input
      props.callback(123)
    }

    return (
      <div>≈
        Post Id: <input type="text" /> 
        <button onClick={xyz}>Get Post detail</button>
      </div>
    )
  }

export default SearchBox