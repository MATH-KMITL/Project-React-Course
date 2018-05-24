import React, {Component} from 'react';
import './style.css';
var deleteBtnStyle = {
  float:"right"
}
class Message extends Component {
  constructor(props){
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(e){
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();
  }
  render(){
    return (
      <div>
        {this.props.message}
        <strong><button style={deleteBtnStyle} 
           className="btn"
           onClick={this.onClickDelete}>
          Delete
        </button></strong>
     </div>
    )
  }
}
export default Message