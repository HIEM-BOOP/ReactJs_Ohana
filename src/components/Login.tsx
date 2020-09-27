import React, { Component } from "react";

class Login extends Component<Props, State> {
/* Tạo ra để khai báo gắn cho value */
  constructor(props: any) {
    super(props);
    console.log("khởi tạo component login");

    this.state = {
      username: "hiemkbr",
      password: "hiem2001",
    };
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="username">username</label>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            this.onChangeUsername(event.target.value);
          }}
          value={this.state.username}
          type="text"
          name="username"
          id=""
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(event) => {
            this.setState({
              password: event.target.value,
            });
          }}
          value={this.state.password}
          type="password"
          name="password"
          id=""
        />
        <button onClick={this.onClickLogin}>login</button>

        <p>Tài khoản đăng nhập là: {this.state.username};</p>

        <p>Mã đăng nhập là : {this.state.password};</p>
      </div>
    );
  }
  onClickLogin = () => {
    this.setState({
      username: "",
      password: "",
    });
    console.log(this.state.username);
    console.log(this.state.password);

    let log = localStorage.setItem('taikhoan',(this.state.username));
    
  };
  
  onChangeUsername = (newUsername: string) => {
    this.setState({
      username: newUsername,
    });
  };
}

type Props = {};
type State = {
  username: string;
  password: string;
};

export default Login;
