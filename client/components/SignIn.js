import React,{Component,PropTypes} from 'react';

class SignIn extends Component {
	constructor(props) {
    super(props)
  }
  render() {
  	const { value } = this.props;
    return (
      <div>
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