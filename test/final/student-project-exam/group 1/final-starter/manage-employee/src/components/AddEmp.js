import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';

class AddEmp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empNo: '',
      empName: '',
      empSurname: '',
      department: '',
      salary: '',
      data: []
    }
    this.onKeyup = this.onKeyup.bind(this);
  }
  clearTask = () => {
    this.setState({
      empNo: '',
      empName: '',
      empSurname: '',
      department: '',
      salary: '',
    })
  }
  onKeyup = () => {
    let { empNo, empName, empSurname, department, salary } = this.state
    let dbCon = database.ref('Department');
    dbCon.push({
      empNo: empNo,
      empName: empName,
      empSurname: empSurname,
      department: department,
      salary: salary,
    });
    this.clearTask();
  }
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
  render() {
    return (
      <div className="bordertext">
        <div className="texttop">Criteria</div>
        <div className="row">
          <div className="textbox-eff">
            <div className="group">
              <input type="number" required
                value={this.state.empNo}
                onChange={(e) => {
                  this.setState({ empNo: e.target.value });
                }}
                name="userid" />
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
                value={this.state.empName}
                onChange={(e) => {
                  this.setState({ empName: e.target.value });
                }}
                name='userid' />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="colorl">Employee Name</label>
            </div>
          </div>
          <div className="group">
            <input type="text" required
              value={this.state.empSurname}
              onChange={(e) => {
                this.setState({ empSurname: e.target.value });
              }}
              name='userid' />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="colorl">Employee Surname</label>
          </div>
        </div>
        <div className="row">
          <div className="rowr">
            <div className="group">
              <label className="dept">Department</label>
              <select className="listdept"
                value={this.state.department}
                onChange={(e) => {
                  this.setState({ department: e.target.value });
                }}
                name="Department"
                id="Department">
                <option >All Department</option>
                <option >IT</option>
                <option >HR</option>
                <option >Marketing</option>
              </select>
            </div>
          </div>
          <div class="group">
            <input type="number" required
              value={this.state.salary}
              onChange={(e) => {
                this.setState({ salary: e.target.value });
              }}
              name="userid" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="colorl">Salary</label>
          </div>
        </div>
        <div className="row">
          <div className="btnSearch">
            <button className="btn" id="btneff" onClick={() => this.onKeyup()} >
              <div id="dub-arrow"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-add-256.png" alt="a" /></div>
              <a href="#">add</a>
            </button>
          </div>
          <button className="btn" id="btneff" onClick={() => this.clearTask()} >
            <div id="dub-arrow"><img src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-256.png" alt="b" /></div>
            <a href="#">Clear</a>
          </button>
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