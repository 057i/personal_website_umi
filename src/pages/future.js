import styles from '@/pages/contact.css';

export default function Future(props) {
  return (<>
    <header className={styles.contactHeader}>
      <span onClick={() => jumpToIndex(props, '/')} className={styles.navigation}>>>57的个人站点</span>
    </header>
    <h1 style={{ textAlign: 'center' }}>未来拥有无限的可能</h1>
  </>);

}

function jumpToIndex(props, add) {
  props.history.push(add);
}
