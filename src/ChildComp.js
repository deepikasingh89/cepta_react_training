import React from 'react';

class ChildComp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  componentDidUpdate() {
      console.log(this.props);
  }
  render() {
      const { city, country, state } = this.props;
    return (
      <div>
        this is child component
        <p>City - {this.props.city}</p>
      </div>
    );
  }
}

export default ChildComp;