import {h, Component} from 'preact';
import Form from './Form';

import '../style/app.scss';

export default class App extends Component {
  state = {
    value: '',
  };

  onChange = (value) => {
    this.setState({value});
  };

  onSubmit = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div id="app">
        <h1>Palindrome test</h1>
        <div className="aligner">
          <Form onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.value} />
        </div>
      </div>
    );
  }
}
