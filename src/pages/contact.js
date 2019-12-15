import styles from './contact.css';

export default function contact(props) {
  return (<>
    <div className={styles.wrapper}>
      <header className={styles.contactHeader}>
        <span onClick={() => jumpToIndex(props, '/')} className={styles.navigation}>>>57的个人站点</span>
      </header>
      <h1 className={styles.title}>Contact Information</h1>
      <div className={styles.underlineArea}>
        <div className={styles.contactMe}>与我联系</div>
        <div className={styles.email}><img className={styles.emailIcon}/>fz12580@hotmail.com</div>
      </div>
      <div className={styles.underlineArea}>
        <div className={styles.curTime}>最后编辑时间：2019年12月10日19:17:27</div>
      </div>
      <footer>
        <span>Contact</span>
        |
        <span onClick={() => {
          jumpToIndex(props, '/');
        }}>fz12580.cn</span>
      </footer>
    </div>


  </>);

}

function jumpToIndex(props, add) {
  props.history.push(add);
}
