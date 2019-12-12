export default function(props) {
  console.log(props);
  //私有路由设置标题
  document.title = props.route.title;
  return (<div style={{ width: '100%', height: '100%' }}>{props.children}</div>);
}
