import styles from '../pages/demo/index.css';

export default function(props) {
  //是demo合集的主页
  const isDemoMainPage = <span onClick={() => {
    jumpTo(props, props.route.path);
  }}>--demo合集</span>;

  //不是demo合集主页
  const notDemoMainPage = <>
    <span onClick={() => {
      jumpTo(props, '/demo/total');
    }}> -- demo合集 -- </span>
    < span onClick={() => {
      jumpTo(props, props.route.path);
    }}>{props.route.title}</span>
  </>;


  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className={styles.navigationWrapper}>
        >>当前地址为:
        <span onClick={() => {
          jumpTo(props, '/');
        }}>首页</span>
        {
          props.route.path === '/demo/total' ? isDemoMainPage : notDemoMainPage
        }

      </div>

      {props.children}

    </div>
  );
}

function jumpTo(props, addr) {
  props.history.push(addr);
}
