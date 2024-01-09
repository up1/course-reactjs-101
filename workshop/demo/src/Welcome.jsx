import PropTypes from 'prop-types';

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
};

/**
 * Show welcome message
 * @param {Welcome.PropTypes} props 
 * @returns 
 */
function Welcome(props) {
    return (
        <>
           <p id="result">Hello <span>{props.name}</span></p> 
        </>
    );
}

export default Welcome;
