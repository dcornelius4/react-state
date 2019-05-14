import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  colorHandler = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.colorHandler.bind(null, 'red')}>Red</button>
        <button className={styles.green} onClick={() => this.colorHandler('green')}>Green</button>
        <button className={styles.blue} onClick={() => this.colorHandler('blue')}>Blue</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
