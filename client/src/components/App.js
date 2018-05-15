import {h, Component} from 'preact';
import Form from './Form';
import {checkPalindrome} from '../services/rest';

import '../style/app.scss';

export default class App extends Component {
  state = {
    value: '',
    palindrome: null,
  };

  onChange = (value) => {
    this.setState({value});
  };

  onSubmit = () => {
    checkPalindrome(this.state.value).then((value) => {
      this.setState({palindrome: value});
    });
  };

  render() {
    return (
      <div id="app">
        <h1>Palindrome test</h1>
        <div className="aligner">
          <h3>Palindrome: {this.state.palindrome ? 'Yup' : 'Nope'}</h3>
          <Form onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.value} />
        </div>
      </div>
    );
  }
}
