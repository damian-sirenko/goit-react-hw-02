import css from "./Feedback.module.css";

export default function Feddback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <h2>Feedback</h2>
      <ul className={css.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
