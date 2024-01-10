import PropTypes from 'prop-types';

const PostDetail = (props) => {
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