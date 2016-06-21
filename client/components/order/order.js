import React, { Component,PropTypes} from 'react';
import styles from './order.css';

const img01 = '../../../assets/pic01.png';

class Order extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.title}>物品信息</p>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              快递单号
            </div> 
            <div className={styles.main} >
              2132132131231
            </div>
            <div className={styles.rightBar}>
              <img src={img01} />
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              物品类型
            </div> 
            <div className={styles.main} >
              <p className={styles.mainp} ></p>
            </div>
            <div>
              <img src={img01} />
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              物品数量
            </div> 
            <div className={styles.main} >
              111
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              物品照片
            </div> 
            <ul className={styles.main} >
              <li>
                <img src={img01} />
              </li>
              <li>
                <img src={img01} />
              </li>
              </ul>
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>寄件人信息</p>
          <div className={styles.desc}>
            <div className={styles.leftBar}>
              寄件人姓名
            </div> 
            <div className={styles.main} >
              宋江
            </div>
            <div>
              <img src={img01} />
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              寄件人位置
            </div> 
            <div className={styles.main} >
              111111
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              寄件人具体位置
            </div> 
            <div className={styles.main}>
              <p className={styles.text,styles.mainp}></p>
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.leftBar} >
              <p className={styles.leftBarp,styles.text}>寄件人电话</p>
            </div> 
            <div className={styles.main} >
              <p className={styles.text,styles.mainp} ></p>
            </div>
          </div>
        </div>
        <div className={styles.loginBtnBox}>
          <p className={styles.loginBtn}>保存</p>
        </div>
      </div>
    );
  }
}

export default Order
