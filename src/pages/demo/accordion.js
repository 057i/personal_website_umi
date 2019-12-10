import styles from './accordion.css';

export default function() {
  return (<div className={styles.accordionWrapper}>
      <div className={styles.content}>
        <ul>
          <li>
            <a href="#">
              <img className={styles.image1} alt=""/>
            </a>
            <p>
              <a href="">红</a>
            </p>
          </li>
          <li>
            <a href="#">
              <img className={styles.image2} alt=""/>
            </a>
            <p>
              <a href="">黄</a>
            </p>
          </li>
          <li>
            <a href="#">
              <img className={styles.image3} alt=""/>
            </a>
            <p>
              <a href="">蓝</a>
            </p>
          </li>
          <li>
            <a href="#">
              <img className={styles.image4} alt=""/>
            </a>
            <p>
              <a href="">绿</a>
            </p>
          </li>
          <li>
            <a href="#">
              <img className={styles.image5} alt=""/>
            </a>
            <p>
              <a href="">紫</a>
            </p>
          </li>

        </ul>
      </div>

    </div>
  );

}
