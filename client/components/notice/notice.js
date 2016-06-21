import React, { Component,PropTypes} from 'react';
import styles from './notice.css';

class Notice extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        <p className={styles.title} >
          {data.title}
        </p>
        <p className={styles.content}>
          {data.content}
        </p>
      </div>
    );
  }
}

Notice.propTypes={
  data:PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default Notice;