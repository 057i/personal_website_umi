import styles from './ball.css';
import React, { useState, useEffect } from 'react';

const ballRef = React.createRef();
export default function() {
  const [timer, setTimer] = useState(null);
  return (<div className={styles.ballWrapper}>
    <div className={styles.ball}
         onClick={() => {
           console.log(ballRef.current);
           startMove(ballRef.current, timer);
         }}
         ref={ballRef}
    ></div>
  </div>);
}

function startMove(dom) {
  //做重力加速场，考虑四个因素，分别是初速度，垂直方向加速度，以及方向，还有在碰到四周边界时候的处理

  clearInterval(dom.timer);
  //iSpeedX为初速度，iSpeedY也是，u为能量损耗，a，b记录当前距离顶部和左边的位置，g为垂直方向的加速度
  let iSpeedX = 6, iSpeedY = 8, u = 0.8, a = 0, b = 0, g = 5;
  dom.timer = setInterval(function() {
    a = dom.offsetTop + iSpeedY;
    b = dom.offsetLeft + iSpeedX;
    iSpeedY += g;
    //这里设置超过上下左右四个边时候要执行的
    if (a >= window.innerHeight - dom.clientHeight) {
      iSpeedY *= (-1);
      iSpeedY *= u;
      iSpeedX *= u;
      a = window.innerHeight - dom.clientHeight;//这里很重要，不写这个会超出第一屏
    }
    if (a <= 0) {
      iSpeedY *= (-1);
      iSpeedY *= u;
      iSpeedX *= u;
      a = window.innerHeight - dom.clientHeight;
    }
    if (b >= window.innerWidth - dom.clientWidth) {
      iSpeedX *= (-1);
      iSpeedY *= u;
      iSpeedX *= u;
      b = window.innerWidth - dom.clientWidth;
    }
    if (b <= 0) {
      iSpeedX *= (-1);
      iSpeedY *= u;
      iSpeedX *= u;
      b = window.innerWidth - dom.clientWidth;
    }

    if (Math.abs(iSpeedX) < 1 || Math.abs(iSpeedY) <= 1 && window.innerHeight - (dom.clientHeight + dom.offsetTop) < 1) {
      dom.style.top = window.innerHeight - dom.clientHeight + 'px';
      clearInterval(dom.timer);
    } else {
      console.log(`x轴速度为${iSpeedX}, y轴速度为${iSpeedY}, ${dom.offsetTop} + ${dom.clientHeight}, ${a},${b} `);
      dom.style.top = a + 'px';
      dom.style.left = b + 'px';
    }
  }, 30);

}
