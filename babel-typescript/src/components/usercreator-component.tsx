import * as React from 'react';
import { IUserState } from '../reducers';

interface IUserCreatorProps {
  saveHandler(newUserData: IUserState): void;
}

interface IUserCreatorState extends IUserState {
}

export class UserCreator extends React.Component<IUserCreatorProps, IUserCreatorState> {

  constructor() {
    super();
    this.state = {
      userName: '',
      age: 0,
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newUser = Object.assign({}, this.state);
    this.props.saveHandler(newUser);

    let newState: IUserCreatorState = {
      userName: '',
      age: 0,
      email: ''
    };

    this.setState(newState);

  }

  onNameChange(e: any) {
    this.setState({ userName: e.target.value });
  }

  onEmailChange(e: any) {
    this.setState({ email: e.target.value });
  }

  onAgeChange(e: any) {
    this.setState({ age: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Add a new User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='Name'>Name:</label>
            <input type='text' placeholder='Name' id='Name' value={this.state.userName}
              onChange={this.onNameChange} />
          </div>
          <div>
            <label htmlFor='Age'>Age:</label>
            <input type='text' placeholder='Age' id='Age' value={this.state.age}
              onChange={this.onAgeChange} />
          </div>
          <div>
            <label htmlFor='Email'>Email:</label>
            <input type='email' placeholder='Email' id='Email' value={this.state.email}
              onChange={this.onEmailChange} />
          </div>
          <button type='submit'>Add User</button>
        </form>
      </div>
    );
  }
}