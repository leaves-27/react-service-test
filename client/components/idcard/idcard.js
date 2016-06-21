import React, { Component,PropTypes} from 'react';
import styles from './idcard.css';

class IdCard extends Component {
  render() {
    const {list} = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {
            list.map(item=>
              <div className={styles.item}>
                <div className={styles.leftBar}>
                  {item.label}
                </div> 
                <div className={styles.main}>
                  {item.value}
                </div>
              </div>
            )
          }
        </div>
        <div className={styles.loginBtnBox}>
          <a className={styles.loginBtn}>确定</a>
          <a className={styles.loginBtn}>重新识别</a>
        </div>
      </div>
    );
  }
}

IdCard.propTypes={
  list:PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default IdCard;

