import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Input from './Input';
var MyButton = Button.loginButton;
var MyInput = Input.Input;

class LoginWin extends React.Component {
    render() {
        return(
        <form className="form-horizontal" id="form" ref="dragBox"
            onSubmit={this.submitHandler} onMouseMove={this.move}
            onMouseUp={this.endDrag}>
           
            <div id="form-wrap">
                <MyInput name="username" labelTip="user" labelId="userId"
                    type="text"   onChange={this.handlerChange}/>
                <MyInput name="password" labelTip="password" labelId="pw"
                    type="password"   onChange={this.handlerChange}/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className = "checkbox">
                            <label>
                                <input name="checked" type="checkbox"  onChange={this.handlerChange}/>
                            </label>
                        </div>
                    </div>
                </div>
                <MyButton type="submit" ButtonTip="Sign in"/>
            </div>
        </form>
        )
    }
}

module.exports = LoginWin;