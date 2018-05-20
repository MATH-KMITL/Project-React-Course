import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';
import { database } from '../configs/firebase';
import _ from 'lodash';


class SearchEmp extends Component {
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
  deleteTask(e) {
    let dbCon = database.ref('Department');
    dbCon.child(e).remove();
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
    const { lng } = this.props
    return (
      <div>
        <div  className="bordertext">
        <div className="texttop">Criteria</div>
        <div className="row">
          <div className="textbox-eff">
            <div className="group">
              <input type="number" required pattern="[0-9]*" maxlength="6" context="currency"
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
          <div className="group">
            <input type="number" required pattern="[0-9]*" maxlength="14"
              value={this.state.salary}
              onChange={(e) => {
                this.setState({ salary: e.target.value });
              }}
              name="userid" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="colorl">Salary</label>
          </div>
        </div>
        <div className="row">
          <div className="btnSearch">
            <button className="btn" id="btneff" onClick={() => this.onClickSearch()} >
              <div id="dub-arrow"><img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_search-256.png" alt="a" /></div>
              <a href="#">search</a>
            </button>
          </div>
          <button className="btn" id="btneff" onClick={() => this.clearTask()} >
            <div id="dub-arrow"><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-256.png" alt="b" /></div>
            <a href="#">Clear</a>
          </button>
          </div>
        </div>
        <div className="bordertable">
        <table>
          <tr>
            <th>No.</th>
            <th>Employee No.</th>
            <th>Employee Name</th>
            <th>Employee Surename</th>
            <th>Department</th>
            <th>Salary</th>
            <th></th><th></th>
          </tr>
          {
            this.state.data.map((item) => (

              <tr>
                <td>{item.EmpNo}</td>
                <td>{item.empNo}</td>
                <td>{item.empName}</td>
                <td>{item.empSurname}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>
                <button className="btn2" id="btn2eff"
                  onClick={() => {
                    
                  }}
                >
                <div id="dub-arrow"><img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519584-081_Pen-256.png" alt="edit" /></div>
                <a href="#">Edit</a>
                </button>
                </td>
                <td>
                <button className="btn2" id="btn2eff"
                  onClick={() => this.deleteTask(item.key)
                   
                  }
                >
                 <div id="dub-arrow"><img src="https://cdn4.iconfinder.com/data/icons/miu/24/editor-trash-delete-recycle-bin-glyph-256.png" alt="delete" /></div>
                <a href="#">Del</a>
                </button>  
                </td>
              </tr>
            ))
          }
        </table>
        
         
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
