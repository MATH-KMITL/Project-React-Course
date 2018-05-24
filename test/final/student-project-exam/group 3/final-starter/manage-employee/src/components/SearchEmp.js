import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import {I18n} from 'react-i18next'


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

  onClickSearch = () => {
    this.setState((prevState) => ({
      data: Object.keys(prevState.data).filter(key => (
        this.searching(prevState.EmpNo, prevState.data[key].EmpNo) &&
        this.searching(prevState.EmpName, prevState.data[key].EmpName) &&
        this.searching(prevState.EmpSureName, prevState.data[key].EmpSureName) &&
        this.searching(prevState.Salary, prevState.data[key].Salary) &&
        (prevState.Department === 'AllDepartment' || prevState.Department === prevState.data[key].Department)
      )).map(key => prevState.data[key])
    }))
  }

  searching = (pattern = '', text = '') => {
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
  handleOpen = () => {
    
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onClickDelete(e) {
    let dbCon = database.ref('Department');
    dbCon.child(e).remove();
  }

  render() {
    const { lng } = this.props
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
  
    return ( 
      <div>
        <div className="form">
        <I18n>
            {(t) => (
      <fieldset className="search-emp-critieria-root">
      <legend>{t('menu.searchEmp', { lng })}</legend>
      <form>
       <div className="format">
       <div className="group"> 
        <input type="text" required maxLength='' value={this.state.empNo} 
        onChange={(e)=>{ this.setState({empNo: e.target.value}); }}  name="userid" />
        <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeNo', { lng })}</label>
    </div>
    </div>
        
      <div className="format">
        <div className="group"> 
        <input  type='text' required value={this.state.empName} onChange={(e)=>{ 
          this.setState({empName: e.target.value});}} name='userid' />
        <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeName', { lng })}</label>
    </div>
    <div className="group"> 
        <input  type='text' required value={this.state.empSurname} onChange={(e)=>{ 
          this.setState({empSurname: e.target.value});}} name='userid' />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{t('formManageUser.employeeSurename', { lng })}</label>
    </div>
    </div>

    <div className="format">
    <div className="group">
        <select 
          value={this.state.department} 
          onChange={(e)=>{ 
            this.setState({department: e.target.value});
          }} 
          name="Department" 
          id="Department">
          <option >{t('formManageUser.department.AllDepartment', { lng })}</option>
          <option >{t('formManageUser.department.IT', { lng })}</option>
          <option >{t('formManageUser.department.HR', { lng })}</option>
          <option >{t('formManageUser.department.Marketing', { lng })}</option>
        </select>
        <span className="highlight"></span>
        <span className="bar"></span>
      <label>{t('formManageUser.department.title', { lng })}</label>
    </div>
        <div className="group">  
        <input  type="text" required value={this.state.salary} onChange={(e)=>{ 
          this.setState({salary: e.target.value});}}  name="userid" /> 
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{t('formManageUser.salary', { lng })}</label>
        </div>
        </div>
        <div className = "container">    
        <button className="bottom-up"  onClick={()=>this.onClickSearch()}>{t('formManageUser.btnSearch', { lng })}</button>
        <button className="bottom-up  " onClick={() => this.clearTask()}>{t('formManageUser.btnClear', { lng })}</button>  
        </div>
        </form>
  </fieldset>
     )}
     </I18n>
     </div>
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