import React from 'react';

class AutofocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    content: "",
  };

  componentDidMount() {
    this.ref.current.focus();
  }

  setContent = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <input
        ref={this.ref}
        type="text"
        value={this.state.content}
        onChange={this.setContent}
      />
    );
  }
}