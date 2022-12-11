import { useState } from 'react';
import { FeedbackVidgetContainer } from '../feedback-vidget/feedback-vidget.styled';
import FeedbackVidgetControls from '../feedback-vidget/feedback-vidget-controls';
import FeedbackVidgetStatistic from '../feedback-vidget/feedback-vidget-statistic';
import FeedbackVidgetNotification from '../feedback-vidget/feedback-vidget-notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const total = good + neutral + bad;

  const handleIncrementGood = () => {
    setGood(state => state + 1);
  };

  const handleIncrementNeutral = () => {
    setNeutral(state => state + 1);
  };

  const handleIncrementBad = () => {
    setBad(state => state + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <FeedbackVidgetContainer>
      <FeedbackVidgetControls
        title="Please leave feedback"
        onIncrementGood={handleIncrementGood}
        onIncrementNeutral={handleIncrementNeutral}
        onIncrementBad={handleIncrementBad}
      />
      {total !== 0 ? (
        <FeedbackVidgetStatistic
          title="Statistic"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <FeedbackVidgetNotification />
      )}
    </FeedbackVidgetContainer>
  );
}
