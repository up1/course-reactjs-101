import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { sayHi } from '../redux/demoSlice';
import { useState } from 'react';

// Create props interface
PropTypes.propTypes = {
  callback: PropTypes.func.isRequired
};
const SearchBox = (props) => {
  const [postId, setPostId] = useState(0)

  const demoData = useSelector((state) => state.demo.value);
  console.log("demoData", demoData)

  const dispatch = useDispatch();

  function xyz() {
    dispatch(sayHi())
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