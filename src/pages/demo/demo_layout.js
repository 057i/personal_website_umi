export default function(props) {
  console.log(props, 789);
  return (<>
    <div style={{ width: '100%', height: '100%' }}>{props.children}</div>
  </>);

}
