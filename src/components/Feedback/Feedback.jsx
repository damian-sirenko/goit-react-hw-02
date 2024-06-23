import css from "./Feedback.module.css";

export default function Feddback({ feedback }) {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h2>Feedback</h2>
      <ul className={css.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
}
