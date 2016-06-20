import React from 'react';

require("./index.styl")
export default class SignIn extends React.Component{
  checkLogin(){
    // const { data,actions } = this.props;

    // if(data.user.isLogin){
    //   actions.routes.courier()();
    // }else{
    //   actions.routes.login()();
    // }
    console.log("hhhhhhhh");
  }
  render() {
    return (
      <div class="container">
        <p 
          onClick={()=>this.checkLogin()}
        >点击我</p>
      </div>
    );
  }
}
