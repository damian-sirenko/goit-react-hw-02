import css from "./Options.module.css";

export default function Options({ setFeedback, feedback }) {
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={css.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
}
