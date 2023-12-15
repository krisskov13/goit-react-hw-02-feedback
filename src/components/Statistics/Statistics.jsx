import React from 'react';
import css from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p className={css.goodStat}>Good: {good}</p>
        <p className={css.neutralStat}>Neutral: {neutral}</p>
        <p className={css.badStat}>Bad: {bad}</p>
        <p className={css.totalStat}>Total: {total}</p>
        <p className={css.positiveStat}>
          Positive feedback:{' '}
          {positivePercentage % 1 === 0
            ? positivePercentage
            : positivePercentage.toFixed(2)}
          %
        </p>
      </div>
    );
  }
}
