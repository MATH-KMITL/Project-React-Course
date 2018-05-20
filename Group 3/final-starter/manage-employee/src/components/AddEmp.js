import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
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
  onKeyup = () => {
    let { empNo, empName, empSurname, department, salary } = this.state
    if(empNo && empName && empSurname && department && salary !=''){
    let dbCon = database.ref('Department');
    dbCon.push({
      empNo: empNo,
      empName: empName,
      empSurname: empSurname,
      department: department,
      salary: salary,
    });
  }
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
        <div className="form">
        <I18n>
            {(t) => (
      <fieldset className="search-emp-critieria-root">
      <legend>{t('menu.addEmp', { lng })}</legend>
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
        <button className="bottom-up" herf="/react" onClick={()=>this. onKeyup()}>{t('formManageUser.btnAdd', { lng })}</button>
        
        <button className="bottom-up  " onClick={() => this.clearTask()}>{t('formManageUser.btnClear', { lng })}</button>
        
        </div>
        </form>
  </fieldset>
     )}
     </I18n>
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