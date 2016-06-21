import React, { Component,PropTypes} from 'react';
import styles from './setting.css';

class Setting extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginBtn}>退出登录</div>
      </div>
    );
  }
}

export default Setting;
