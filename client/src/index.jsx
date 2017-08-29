import React from 'react';
import ReactDOM from 'react-dom';
import Result from './components/result.jsx';
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      firstName: '',
      lastName: '',
      domain: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, data) {
    let key = data.label.content;
    let value = data.value;
    this.setState({ [key]: value });
  }

  handleSubmit(e, data) {
    e.preventDefault();
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let domain = `@${this.state.domain}`;

    let result = [firstName + domain, lastName + domain];
    let delimitors = ['.', '_', '-', ''];

    delimitors.forEach(delimitor => {
      result.push(firstName + delimitor + lastName + domain);
      result.push(firstName[0] + delimitor + lastName + domain);
      result.push(firstName + delimitor + lastName[0] + domain);
    });

    this.setState({ result });
  }

  render() {
    const fields = ['firstName', 'lastName', 'domain'];
    return (
      <div className='ui grid centered'>
        <div className='ui grid'>
          {fields.map((el, i) => 
            <div key={i} className='four wide column'>
              <Input
                value={this.state[el]}
                onChange={this.handleChange}
                label={{ basic: true, content: el }}
                labelPosition='left'
                placeholder={`Enter ${el.toLowerCase()}`}            
              />
            </div>
          )}
          <div className='four wide column'>
            <Button
              primary
              onClick={this.handleSubmit}
            >
            GetEmails
            </Button>
          </div>
        </div>
        <div className='row'>
          <Result result={this.state.result}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
