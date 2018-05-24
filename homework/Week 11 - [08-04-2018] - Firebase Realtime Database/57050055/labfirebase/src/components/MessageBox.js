import React, {Component} from 'react';
import trim from 'trim';
class MessageBox extends Component {
constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
    this.setState({
      message: e.target.value //นำค่าที่กรอกมาใหม่มา set to state
    });
  }
  onKeyup(e){
      //===13 คือ enter และค่าที่กรอกมาไม่เป็นค่าว่าง
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }
render() {
    return (
      <form>
       <textarea 
          className="textarea"
          placeholder="Type a message"
          cols="100"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.message}>
       </textarea>
      </form>
    )
  }
}
export default MessageBox