import React from 'react'
class loginButton extends React.Component {
    render() {
        return <button type={this.props.type} className="loginButton">
            {this.props.ButtonTip}
        </button>
    }
}
exports.loginButton = loginButton;