import React from 'react';
import styles from './loading.css';

export default function() {

  return (<div className={styles.demo_Loading_wrapper}>
      <div className="text">
        <h2>We are </h2>
        <h3>SQUARE</h3>
        <h3>MONSTER!</h3>
        <h3>Ahhhh We will eat you</h3>
      </div>
      <div className={styles.monster1}>
        <div className={styles.eye}>
          <div className={styles.eyesball}></div>
        </div>
        <div className={styles.mouth}></div>
      </div>

      <div className={styles.monster2}>
        <div className={styles.eye}>
          <div className={styles.eyesball}></div>
        </div>
        <div className={styles.mouth}></div>
      </div>
      <div className={styles.start}>
        <div className={styles.monster3}>
          <div className={styles.eye}>
            <div className={styles.eyesball}></div>
          </div>
          <div className={styles.mouth}></div>
        </div>
        <div className={styles.loading}>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );

}
