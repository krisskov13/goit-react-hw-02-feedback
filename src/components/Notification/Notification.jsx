import React from 'react';
import css from './Notification.module.css';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <p className={css.message}>{message}</p>;
  }
}
