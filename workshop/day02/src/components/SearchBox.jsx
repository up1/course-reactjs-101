import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDemo } from '../hooks/useDemo.js';

const SearchBox = (props) => {
    const [postId, setPostId] = useState(0) 
    const value = useDemo()
    console.log("value", value)

    function xyz() {
      value.sayHi()
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