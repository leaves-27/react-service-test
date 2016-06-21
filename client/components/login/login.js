import React, { Component,PropTypes} from 'react';
import styles from './login.css';

class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.inputBox}>
            <input type="text" className={styles.textInput} placeholder="请输入用户名" />
            <input type="password" className={styles.textInput} placeholder="请输入密码" />
          </div>
          <div className={styles.loginBtnBox}>
            <a className={styles.loginBtn}>登录</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Login