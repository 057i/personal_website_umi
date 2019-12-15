import styles from './index.css';
import React, { useState } from 'react';
import NavLink from 'umi/navlink';
import Link from 'umi/link';

const topRef = React.createRef();
const contentRef = React.createRef();
const pointRef = React.createRef();

export default function(props) {
  const [flag, setFlag] = useState(0);
  //umi的page下的组件都有redux-router,所以上下文中都有路由上下文对象


  //设置主页框展开和收缩的函数
  function handleGrow(num) {
    console.log(num);
    if (num % 2 == 0) {
      //移除收缩样式
      contentRef.current.classList.remove(styles.contentShink);
      topRef.current.classList.remove(styles.topShink);
      pointRef.current.classList.remove(styles.pointShink);
      //增加展开样式
      contentRef.current.classList.add(styles.contentGrow);
      topRef.current.classList.add(styles.topGrow);
      pointRef.current.classList.add(styles.pointGrow);
    } else {
      //增加展开样式
      contentRef.current.classList.remove(styles.contentGrow);
      topRef.current.classList.remove(styles.topGrow);
      pointRef.current.classList.remove(styles.pointGrow);

      contentRef.current.classList.add(styles.contentShink);
      topRef.current.classList.add(styles.topShink);
      pointRef.current.classList.add(styles.pointShink);
    }
    setFlag(++num);
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.content} ref={contentRef}>
        <span className={styles.point} onClick={() => handleGrow(flag)} ref={pointRef}></span>

        <div className={styles.top} ref={topRef}>
          <h1 id={styles.title}>57的个人网站</h1>
          <p>57's Personal Website</p>
        </div>

        <div className={styles.center}>
          <ul>
            <li><span onClick={() => {
              window.location.href = 'http://blog.fz12580.cn';
            }}>>>个人博客</span></li>
            <li><NavLink to="/demo/total">>>项目展示</NavLink></li>
            <li><NavLink to="/future">>>致未来</NavLink></li>
          </ul>
        </div>


        <div className={styles.bottom}>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            |
            <li><span>fz12580.cn</span></li>
          </ul>
        </div>
      </div>
    </div>);
}

// //改进，用切换类名方式修改背景图
// function getBg() {
//   let bgUrl = `url("../assets/bg${Math.floor(Math.random() * 2)}.jpg")`;
//   console.log(bgUrl);
//   return bgUrl;
// }




//展开字体框
// function handleGrow(num) {
//   if (num % 2 == 0) {
//     //移除收缩样式
//     contentRef.current.classList.remove(styles.contentShink);
//     topRef.current.classList.remove(styles.topShink);
//     pointRef.current.classList.remove(styles.pointShink);
//     //增加展开样式
//     contentRef.current.classList.add(styles.contentGrow);
//     topRef.current.classList.add(styles.topGrow);
//     pointRef.current.classList.add(styles.pointGrow);
//   } else {
//     //增加展开样式
//     contentRef.current.classList.remove(styles.contentGrow);
//     topRef.current.classList.remove(styles.topGrow);
//     pointRef.current.classList.remove(styles.pointGrow);
//
//     contentRef.current.classList.add(styles.contentShink);
//     topRef.current.classList.add(styles.topShink);
//     pointRef.current.classList.add(styles.pointShink);
//
//   }
// }





