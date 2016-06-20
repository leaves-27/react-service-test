import React,{Component,PropTypes} from 'react';
// import classNames from 'classnames';
import styles from './signin.css';

console.log(styles.background);

class SignIn extends Component {
	constructor(props) {
    super(props)
  }

  render() {
    
  	const { value } = this.props;
    return (
      <div className={styles.background}>
      	<p>{value}</p>
        <p>点击我1</p>
      </div>
    );
  }
}

SignIn.propTypes = {
  value : PropTypes.string.isRequired
}

export default SignIn;