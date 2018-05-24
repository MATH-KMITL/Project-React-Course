import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import Modal from 'react-modal';


class AddEmp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      empNo: '',
      empName: '',
      empSurname: '',
      department: "All Department",
      salary: '',
      data: [],
     isOpen: false
    }
    this.onKeyup = this.onKeyup.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
  }
  clearTask = () => {
    this.setState({
      empNo: '',
      empName: '',
      empSurname: '',
      department:'',
      salary: '',
    })
  }
  onKeyup = () => {
    let { empNo, empName, empSurname, department, salary } = this.state
    if(empNo!=""&& empName!=""&& empSurname!=""&& department!=""&& salary!="" ){
    let dbCon = database.ref('Department');
    dbCon.push({
      empNo: empNo,
      empName: empName,
      empSurname: empSurname,
      department: department,
      salary: salary,
    });
    this.clearTask();
  }}
  componentWillMount() {
    let app = database.ref('Department');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    })
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
      data: data
    });
  }
  toggleModal = () => {
    console.log(this.state.isOpen)
    this.setState({
    
      isOpen: !this.state.isOpen
    });
    // alert('abc')
    console.log(this.state.isOpen)

  }
  render() {
    const { empNo, empName, empSurname, department, salary } = this.state;
    return (
      <div>
        <div className="bordertext">
          <div className="texttop"/>
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
              <div className="group">
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
                  <option value="All Department">All Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="MARKITING">MARKITING</option>
                </select>
              </div>
            </div>
            <div className="group">
              <input type="number" required
                ref={this.inputCreateTask}
                value={salary}onChange={(e) => {
                  this.setState({ salary: e.target.value });
                }}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Salary</label>
            </div>
          </div>
            <div>
              <button className="search" id="rowl" onClick={() => this.onKeyup()} >ADD</button>
              <button className="clear" onClick={() => this.clearTask()}>CLEAR</button>
            </div>
        </div>
      </div>
     
    );
  }
}

AddEmp.propTypes = {
  lnt: PropTypes.oneOf(['en', 'th']),
};

AddEmp.defaultProps = {
  lnt: 'en',
};

export default AddEmp;