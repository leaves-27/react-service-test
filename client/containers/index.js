import React from 'react';
import ReactDOM from 'react-dom';
// import SignIn from '../components/signin/signin.js';
// import Courier from '../components/courier/courier.js';
// import Setting from '../components/setting/setting.js';
// import Login from '../components/login/login.js';
// import IdCard from '../components/idcard/idcard.js';
// import Notice from '../components/notice/notice.js';
import Order from '../components/order/order.js';

const rootEl = document.getElementById('root');

const signIn = {
  value:"我是signIn"
}

const json = [{
  label:"快递公司",
  value:"联邦国际快递"
},{
  label:"网点",
  value:"杭州市千岛湖村"
},{
  label:"电话",
  value:"+86  18857152332"
},{
  label:"姓名",
  value:"董珂"
}]

const notice = {
  id:"11",
  title:"公安局最新规定",
  content:"国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示"
}

const idCard = [{
  label:"姓名",
  value:"xxxx"
},{
  label:"民族",
  value:"xxx"
},{
  label:"身份证号",
  value:"8888888888888888"
},{
  label:"家庭住址",
  value:"是范德萨范德萨发"
}];

const order = [{
  id:"11",
  src:"../../assets/pic02.png"
},{
  id:"12",
  src:"../../assets/pic02.png"
}]

function render() {
  // ReactDOM.render(
  //  <SignIn
  //    value={signIn.value}
  //  />,
  //   rootEl  
  // )
  // ReactDOM.render(
  // 	<Courier
  // 		courierList={json}
  // 		notice={notice}
  // 	/>,
  //   rootEl  
  // )
  // ReactDOM.render(
  //  <Setting />,
  //   rootEl  
  // )
  // ReactDOM.render(
  //  <Login />,
  //   rootEl  
  // )
  // ReactDOM.render(
  //   <IdCard
  //     list={idCard}
  //   />,
  //   rootEl  
  // )

  ReactDOM.render(
    <Order
      data={notice}
    />,
    rootEl  
  )
}

render()