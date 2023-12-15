import React from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { addFeedback } = this.props;
    return (
      <div>
        <button
          className={css.btnOption}
          name="goodFeedback"
          onClick={() => addFeedback('good')}
        >
          Good
        </button>
        <button
          className={css.btnOption}
          name="neutralFeedback"
          onClick={() => addFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.btnOption}
          name="badFeedback"
          onClick={() => addFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}
