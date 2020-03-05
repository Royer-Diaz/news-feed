import React from 'react';

class App extends React.Component {
  state = {
    flag: false
  };

  changeState = () => {
    const { flag } = this.state;

    this.setState({
      flag: !flag
    });
  };

  render() {
    const { message, children } = this.props;
    const { flag } = this.state;
    const content = flag ? 'tiene contenido' : 'no tiene contenido';

    if (flag) {
      return <><h1>Flag es true</h1><button type="button" onClick={this.changeState}>Cambiar estado</button></>;
    }

    return (
      <>
        <h1>Hola Playo {message}</h1>
        <h2>{children}</h2>
        <p>{content}</p>
        <button type="button" onClick={this.changeState}>Cambiar estado</button>
      </>
    );
  }
}

export default App;
