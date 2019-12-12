import styles from './chat_robot.css';

export default function() {
  return (<div className={styles.robotWrapper}>
      <header className={styles.header}>
        <p>My聊天机器人</p>
      </header>
      <div className={styles.content}>
        <div className={styles.mine}>
          <div className="icon"></div>
          <p className={styles.iSay}>你好,有什么要问我的吗？</p>
        </div>
      </div>
      <div className={styles.footer}>
        <textarea name="" className={styles.inputbox} cols="40" rows="20"></textarea>
        <input type="submit" className={styles.submit}/>
      </div>
    </div>
  );


}
