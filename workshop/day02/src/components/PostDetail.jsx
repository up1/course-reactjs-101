import PropTypes from 'prop-types';
import { useDemo } from '../hooks/useDemo';

const PostDetail = (props) => {
  const value = useDemo()
  console.log("PostDetail value", value)

  return (
    <div>
      <p>Id: {props.post.id} </p>
      <p>Title: {props.post.title}</p>
      <p>Body: {props.post.body}</p>
    </div>
  )
}

PostDetail.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  };

export default PostDetail