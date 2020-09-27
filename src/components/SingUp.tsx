import { type } from 'os';
import React, { Component } from 'react';

class SingUp extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "yhiemkbuor",
      password: "hiem2001",
    };
  }
  render() {
    return (
      <div>
        <h1>SingUp</h1>
        <label htmlFor="username">username</label>
        <input
          onChange={(event) =>{
            console.log(event.target.value);
            this.setState ({
                username : event.target.value
            })
            }}
          value={this.state.username}
          type="text"
          name="username"
        />
        <label htmlFor="password">password</label>
        <input 
            onChange = {(event) => {
                console.log(event.target.value);
                this.setState({
                    password : event.target.value
                })
            }}     
        value={this.state.password} type="password" name="password" />
        <button onClick={this.onClickSingUp}>Đắng ký</button>

        <p>Tài khoản của bạn là : {this.state.username}</p>
        <p>Mật khẩu của bạn là : {this.state.password}</p>
      </div>
    );
  }
  // handleChange = (newUsername: string) => {
  //     this.setState({
  //         username : newUsername,
  //     })
      
  // } 

  
  onClickSingUp = () => {
    this.setState({
      username: "",
      password: "",
    });
  };
}
// Tạo hàm sự kiện onClickSingUp 




type Props = {};
type State ={
    username : string ;
    password : string;
};

export default SingUp;