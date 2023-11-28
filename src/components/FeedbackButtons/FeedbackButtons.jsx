import PropTypes from 'prop-types';
import css from './FeedbackButtons.module.css'

export const FeedbackButtons = ({ options, feedbackCB }) => (
    <>
        <h2 className={css.title}>Please leave feedback</h2>
        <ul className={css.buttonsList}>
            {options.map((option, index) => (
                <li>
                    <button className={css.button} key={index} onClick={() => feedbackCB(option)}>{option}</button>
                </li>
            ))}
        </ul>
    
    </>
)
FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    feedbackCB: PropTypes.func.isRequired,
}