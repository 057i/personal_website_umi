//这里的组件都用withRouter包装过了
import styles from './index.css';
import Link from 'umi/link';

export default function total(props) {
  return (<div className={styles.demoWrapper}>
      <header className={styles.demoHeader}>
        <h2>学习时的部分demo-仅测试</h2>
      </header>
      <div className={styles.demoAttion}>更多demo请移步至我的github</div>
      <div className={styles.show}>
        <div className={styles.demoContent}>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/emy'}>名称;仿淘宝</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/accordion'}>名称;css3手风琴效果</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/loading'}>名称;Css3做loading特效</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div><Link to={'/demo/sunraise'}>名称;太阳升起落下特效</Link></div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div>名称;demo1</div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div>名称;demo1</div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
          <div className={styles.demo}>
            <img className={styles.image}/>
            <div className={styles.demoDescribe}>
              <div>名称;demo1</div>
              <p>描述信息:巴拉巴拉巴巴里巴里巴里</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
