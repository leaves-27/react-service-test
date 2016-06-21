import React,{Component,PropTypes} from 'react';
// import classNames from 'classnames';
import styles from './signin.css';

class SignIn extends Component {
	constructor(props) {
    super(props)
  }
  hanlder(){
    console.log("我是点击事件");
  }
  render() {
  	const { value } = this.props;
    return (
      <div className={styles.container}>
      	<p>{value}</p>
        <a className={styles.button} onClick={this.hanlder}>点击我</a>
      </div>
    );
  }
}

SignIn.propTypes = {
  value : PropTypes.string.isRequired
}

export default SignIn;