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
            Hello <span>{props.name}</span>
        </>
    );
}

export default Welcome;
