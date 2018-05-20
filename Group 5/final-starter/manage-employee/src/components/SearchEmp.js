import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import MaterialIcon, { colorPallet } from 'material-icons-react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class SearchEmp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      empNo: '',
      empName: '',
      empSurname: '',
      department: '',
      salary: '',    
      empNo1: '',
      empName1: '',
      empSurname1: '',
      department1: '',
      salary1: '',  
      data: [],
      search: []
    }
    this.onKeyup = this.onKeyup.bind(this);
  }
  state = {
    open: false,
  };
  onClickSearch = () => {
    this.setState((prevState) => ({
      data: Object.keys(prevState.data).filter(key => (
        this.searching(prevState.empNo, prevState.data[key].empNo) &&
        this.searching(prevState.empName, prevState.data[key].empName) &&
        this.searching(prevState.empSurname, prevState.data[key].empSurname) &&
        this.searching(prevState.salary, prevState.data[key].salary) ||
        (prevState.department === 'AllDepartment' || prevState.department === prevState.data[key].department)
      )).map(key => prevState.data[key])
    }))
  }
  searching = (pattern = '', text = '') => {
    console.log('///////////////////////////////////////////////////////////////////////////////')
    console.log('pattern', pattern)
    console.log('text', text)
    if (pattern === '') {
      console.log('true')
      return true
    }
    else if (pattern.length > text.length) {
      return false
    } else {
      for (let i = 0; i + pattern.length <= text.length; i++) {
        console.log(['text', i].join('-'), text.substr(i + 0, pattern.length))
        if (pattern === text.substr(i + 0, pattern.length)) {
          console.log('true')
          return true
        }
      }
      console.log('false')
      return false
    }
  }

  handleOpen = () => {
    
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  clearTask = () => {
    this.setState({
      empNo: '',
      empName: '',
      empSurname: '',
      department: "All Department",
      salary: '',
    })
  }
  onKeyup = () => {
    let { empNo, empName, empSurname, department, salary } = this.state
    let { empNo1, empName1, empSurname1, department1, salary1 } = this.state
    let dbCon = database.ref('Department');
    dbCon.push({
      empNo: empNo,
      empName: empName,
      empSurname: empSurname,
      department: department,
      salary: salary,
      empNo1: empNo1,
      empName1: empName1,
      empSurname1: empSurname1,
      department1: department1,
      salary1: salary1,
    });
    this.clearTask();
  }
  onClickupdate(){
   var obj = {
      empNo: this.empNo1,
      empName: this.empName1,
      empSurname:this.empSurname1,
      department: this.department1,
      salary: this.salary1,} 
      let dbCon = database.ref('Department');
      dbCon.child(this.state.key).update(obj)
  };
 
  componentWillMount() {
    let app = database.ref('Department');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    })
  }
  // updateFunction(e) {
  //   var obj = { message: this.state.messageUpdate };
  //   let dbCon = database.ref('Department');
  //   dbCon.child(this.props.msgKey).update(obj)
  //     .then(() => this.toggleModal());
  // }
  onClickDelete(e) {
    let dbCon = database.ref('Department');
    dbCon.child(e).remove();
  }
  search() {
    // let { empNo, empName, empSurname, department, salary } = this.state
    // let app = database.ref('Department');
    // for (let index = 1; index < app.length; index++) {
    //   let j = this.search[index].child(empNo);
    //   if(j!=null){
    //     this.getData(j.val());
    //   }

    // }
  }
  getData(values) {
    let dataVal = values;
    let data = _(dataVal)
      .keys()
      .map(dataKey => {
        let cloned = _.clone(dataVal[dataKey]);
        cloned.key = dataKey;
        return cloned;
      }).value();
    this.setState({
      data: data,
      search: data
    });
  }
  render() {
    

    const { empNo, empName, empSurname, department, salary } = this.state;
    const { empNo1, empName1, empSurname1, department1, salary1 } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        // disabled={true}
        onClick={()=>{this.onClickupdate}}
      />,
    ];
const { lng } = this.props
    return (

      <div>
        <div className="bordertext">
        
          <div className="texttop">Criteria</div>
          <div className="row">
            <div className="textbox-eff">
              <div className="group">
                <input type="number" required
                  ref={this.inputCreateTask}
                  value={empNo}
                  onChange={(e) => {
                    this.setState({ empNo: e.target.value });
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="colorl">Employee No.</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="rowr">
              <div className="group">
                <input type="text" required
                  ref={this.inputCreateTask}
                  value={empName}
                  onChange={(e) => {
                    this.setState({ empName: e.target.value });
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="colorl">Employee Name</label>
              </div>
            </div>
            <div className="group">
              <input type="text" required
                ref={this.inputCreateTask}
                value={empSurname}
                onChange={(e) => {
                  this.setState({ empSurname: e.target.value });
                }}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Employee Surname</label>
            </div>
          </div>
          <div className="row">
            <div className="rowr">
              <div>
                <sup>Department</sup><br />
                {/* <input type="text" required
                  ref={this.inputCreateTask}
                  value={department}
                  onChange={(e) => {
                    this.setState({ department: e.target.value });
                  }}
                />  */}
                <select className="bar" name={department}
                  onChange={(e) => {
                    this.setState({ department: e.target.value });
                  }}>
                  <option>All Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="MARKITING">MARKITING</option>
                </select>

              </div>
            </div>
            <div className="group">
              <input type="number" required
                ref={this.inputCreateTask}
                value={salary} onChange={(e) => {
                  this.setState({ salary: e.target.value });
                }}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Salary</label>
            </div>
          </div>
          <div>
            <button className="search" id="rowl" onClick={() => this.onClickSearch()} >SEARCH</button>
            <button className="clear" onClick={() => this.clearTask()}>CLEAR</button>
          </div>
        </div>
        <div>
          <table>
            <tr className="bordertext2">
              <th>No.</th>
              <th>Employee No.</th>
              <th>Employee Name</th>
              <th>Employee Surename</th>
              <th>Department</th>
              <th>Salary</th>
              <th></th>
              <th></th>
            </tr>
            {
              this.state.data.map((item) => (

                <tr>
                  <td>{item.cout}</td>
                  <td>{item.empNo}</td>
                  <td>{item.empName}</td>
                  <td>{item.empSurname}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td><i className="material-icons" onClick={() => this.handleOpen() }>create</i></td>
                  <td><i className="material-icons" onClick={() => this.onClickDelete(item.key)}>remove_circle</i></td>
                </tr>
                
                
              ))
            }
          </table>
        </div>
        <div>
          {/* <RaisedButton label="Modal Dialog" onClick={this.handleOpen} /> */}
          <Dialog
            title="Edit"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
                    <div className="bordertext">
          <div className="texttop">Criteria</div>
          <div className="row">
            <div className="textbox-eff">
              <div className="group">
                <input type="number" required
                  ref={this.inputCreateTask}
                  value={empNo1}
                  onChange={(e) => {
                    this.setState({ empNo1: e.target.value });
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="colorl">Employee No.</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="rowr">
              <div className="group">
                <input type="text" required
                  ref={this.inputCreateTask}
                  value={empName1}
                  onChange={(e) => {
                    this.setState({ empName1: e.target.value });
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="colorl">Employee Name</label>
              </div>
            </div>
            <div className="group">
              <input type="text" required
                ref={this.inputCreateTask}
                value={empSurname1}
                onChange={(e) => {
                  this.setState({ empSurname1: e.target.value });
                }}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Employee Surname</label>
            </div>
          </div>
          <div className="row">
            <div className="rowr">
              <div>
                <sup>Department</sup><br />
                {/* <input type="text" required
                  ref={this.inputCreateTask}
                  value={department}
                  onChange={(e) => {
                    this.setState({ department: e.target.value });
                  }}
                />  */}
                <select className="bar" name={department1}
                  onChange={(e) => {
                    this.setState({ department1: e.target.value });
                  }}>
                  <option>All Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="MARKITING">MARKITING</option>
                </select>

              </div>
            </div>
            <div className="group">
              <input type="number" required
                ref={this.inputCreateTask}
                value={salary1} onChange={(e) => {
                  this.setState({ salary1: e.target.value });
                }}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Salary</label>
            </div>
          </div>
        </div>
        </Dialog>
        </div>
      </div>
    );
  }
}

SearchEmp.propTypes = {
  lnt: PropTypes.oneOf(['en', 'th']),
};

SearchEmp.defaultProps = {
  lnt: 'en',
};

export default SearchEmp;
