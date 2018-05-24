
import React,{Component} from 'react';
import trim from 'trim'
 

class MessageBox extends Component{
    constructor(props){
        super(props)
        //ทำเพื่อให้ function onchange เรียก this ได้
        this.onChange = this.onChange.bind(this);
        //ทำเพื่อให้ function onKeyUp เรียก this ได้
        this.onKeyUp = this.onKeyUp.bind(this);
        this.state ={
            message :''
        };
    }
    onChange(e){
        this.setState({
            message: e.target.value
        });
    }
    onKeyUp(e){
        console.log(e)
        if(e.keyCode == 13 && trim(e.target.value) !== ''){
            e.preventDefault();
            let dbCon = this.props.db.database().ref('/message');
            dbCon.push({
                message:trim(e.target.value)
            });
            this.setState({
                message : ''
            });

        }
    }
    render(){
        return(
            
            <form>
                <textarea
                    className="textarea"
                    placeholder="Type a Message"
                    cols="100"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    value={this.state.message}
                    >
                </textarea>
            </form>
        )
    }
}
export default MessageBox;


