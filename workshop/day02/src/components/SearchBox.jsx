import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DemoContext from '../DemoContext.js'

const SearchBox = (props) => {
    const [postId, setPostId] = useState(0) 
    const value = useContext(DemoContext)
    console.log("value", value)

    function xyz() {
      props.callback(postId)
    }

    return (
      <div>
        Post Id: <input type="text" onChange={(e) => setPostId(e.target.value)} /> 
        <button onClick={xyz}>Get Post detail</button>
      </div>
    )
  }

SearchBox.propTypes = {
  callback: PropTypes.func.isRequired
};

export default SearchBox