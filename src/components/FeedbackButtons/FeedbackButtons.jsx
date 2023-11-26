import PropTypes from 'prop-types';


export const FeedbackButtons = ({ options, feedbackCB }) => (
    <>
      <h2>Please leave feedback</h2>
        {options.map((option, index) => (
            <button key={index} onClick={() => feedbackCB(option)}>{option}</button>
        ))
        }
    </>
)
FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    feedbackCB: PropTypes.func.isRequired,
}