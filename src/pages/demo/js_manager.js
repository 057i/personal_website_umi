import styles from './js_manager.css';

export default function() {
  return (<div className={styles.manager_system_wrapper}>
      <div className={styles.header}>
        <div className={styles.logo_box}>
          <span>57_manager_system</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left_content}>
          <dl className={styles.left_menu}>
            <dt>学生管理</dt>
            <dd className={styles.active} data-id="student-list" id="totalList">学生列表</dd>
            <dd data-id="add-student">新增学生</dd>
          </dl>
        </div>
        <div className={styles.right_content}>
          <div className={styles.student_list} id="student-list">
            <table>
              <thead>
              <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>住址</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody id="stu_list">
              <tr id="list0">
                <td>0001</td>
                <td>一号</td>
                <td>女</td>
                <td>111@qq.com</td>
                <td>18</td>
                <td>132323232332</td>
                <td>哈尔滨</td>
                <td>{
                  // <button className="btn edit" date_Index=0
                  //                 >编辑</button>
                  //               <button class="btn del" date_Index=0
                  //               >删除</button>
                }

                  <button className={`${styles.btn} ${styles.edit}`}>编辑</button>
                  <button className={`${styles.btn} ${styles.del}`}>删除</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.dialog}>
            <div className={styles.mask}>
              <div className={styles.dialogcontent}>
                <h2>编辑信息</h2>
                <form action="" className={styles.stu_form}>
                  <div>
                    <label for="name" name="name">姓名</label>
                    <input type="text" id="name" autoComplete="off"/>
                  </div>
                  <div>
                    <label for="">性别</label>
                    <input type="radio" id="male" name="sex" value="0"/>
                    <label for="male" className={styles.radio_label}>男</label>
                    <input type="radio" id="female" name="sex" value="1"/>
                    <label for="female" className={styles.radio_label}>女</label>

                  </div>
                  <div>
                    <label for="sNo">学号</label>
                    <input type="text" id="sNo" name="sNo"/>
                  </div>
                  <div>
                    <label for="email">邮箱</label>
                    <input type="text" id="email" name="email"/>
                  </div>
                  <div>
                    <label for="birth">出生年</label>
                    <input type="text" id="birth" name="birth"/>
                  </div>
                  <div>
                    <label for="phone">手机号</label>
                    <input type="text" id="phone" name="phone"/>
                  </div>
                  <div>
                    <label for="address">住址</label>
                    <input type="text" id="address" name="address"/>
                  </div>
                  <div>
                    <label for="">&nbsp;</label>
                    <button className="btn editSubmitBtn" type="submit">提交</button>
                    <button className="btn reseSubmittBtn" type="reset">重置</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.add_student} id="add-student">
            <form action="" className={`${styles.stu_form} ${styles.addform}`}>
              <div>
                <label for="name" name="name">姓名</label>
                <input type="text" id="name"/>
              </div>
              <div>
                <label for="">性别</label>
                <input type="radio" id="male" name="sex" value="0" checked/>
                <label for="male" className={styles.radio_label}>男</label>
                <input type="radio" id="female" name="sex" value="1"/>
                <label for="female" className={styles.radio_label}>女</label>

              </div>
              <div>
                <label for="sNo">学号</label>
                <input type="text" id="sNo" name="sNo"/>
              </div>
              <div>
                <label for="email">邮箱</label>
                <input type="text" id="email" name="email"/>
              </div>
              <div>
                <label for="birth">出生年</label>
                <input type="text" id="birth" name="birth"/>
              </div>
              <div>
                <label for="phone">手机号</label>
                <input type="text" id="phone" name="phone"/>
              </div>
              <div>
                <label for="address">住址</label>
                <input type="text" id="address" name="address"/>
              </div>
              <div>
                <label for="">&nbsp;</label>
                <button type="submit" className={styles.submitBtn}>提交</button>
                <button type="reset" className={styles.resetBtn}>重置</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
