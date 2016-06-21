import React, { Component,PropTypes} from 'react';
import styles from './courier.css';

class Courier extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {courierList,notice} = this.props;
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            courierList.map(item=>
              <li className={styles.item}>
                <div className={styles.leftBar}>
                  {item.label}
                </div> 
                <div className={styles.main}>
                  {item.value}
                </div>
              </li>
            )
          }
        </ul>
        <div>
          <a className={styles.notice} href="#">公告：{notice.title}</a>
        </div>
        <div className={styles.loginBtnBox}>
          <p className={styles.loginBtn}>揽件</p>
        </div>
        <div className={styles.loginBtnBox}>
          <p className={styles.loginBtn}>设置</p>
        </div>
      </div>
    );
  }
}

Courier.propTypes = {
  courierList:PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  notice:PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
}

export default Courier