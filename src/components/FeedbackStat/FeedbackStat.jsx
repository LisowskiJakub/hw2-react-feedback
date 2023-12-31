import PropTypes from 'prop-types';
import css from './FeedbackStat.module.css'

export const FeedbackStat = ({ good, neutral, bad, total, positivePercentage }) => (
<>
<h2>Statistics</h2>
<ul className={css.statList}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    {total > 0&& <>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li></>}
</ul>
</>
)

FeedbackStat.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}