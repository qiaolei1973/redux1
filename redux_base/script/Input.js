var React = require('react');
// var MyInput = React.createClass({
//     render:function(){
//         return ();
//     }
// })

class Input extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.labelId} className="col-sm-2 control-label">
                    {this.props.labelTip}
                </label>
                <div className="cols-sm-10">
                    <input name={this.props.name} type={this.props.type} onChange={this.props.onChange}
                        className="form-control" id={this.props.labelId} />
                </div>
            </div>
        );
    }
}

//module.exports = Hello;
exports.Input = Input;