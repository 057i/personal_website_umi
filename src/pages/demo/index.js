//这里的组件都用withRouter包装过了
import styles from './index.css';
import Link from 'umi/link';

export default function total(props) {
  return (<div className={styles.demoWrapper}>
      <header className={styles.demoHeader}>
        <h2>学习时的部分demo-仅测试</h2>
      </header>


      <div className={styles.demoAttion}>
        更多demo请移步至我的
        <span onClick={() => {
          window.location.href = 'https://github.com/057i';
        }}>github</span></div>
      <div className={styles.show}>
        <div className={styles.demoContent}>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/js_manager');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/js_manager'}>名称;原生js管理系统</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/accordion');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/accordion'}>名称;css3手风琴效果</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/loading');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/loading'}>名称;Css3做loading特效</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/sunraise');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/sunraise'}>名称;太阳升起落下特效</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/ball');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/ball'}>名称;原生js实现重力加速度</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo} onClick={() => {
            jumpTo(props, '/demo/chat_robot');
          }}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/chat_robot'}>名称;jq仿微信公众号自动回复</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function jumpTo(props, addr) {
  props.history.push(addr);
}

