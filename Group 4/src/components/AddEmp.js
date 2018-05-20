import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import { I18n } from 'react-i18next'


class AddEmp extends Component {
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props)
    this.state = {
      EmpNo: '',
      EmpNa: '',
      SurNa: '',
      Saraly: '',
      Depa: '',
      data: [],
     
    }
   
    this.onChangeNa = this.onChangeNa.bind(this);
    this.onChangeNo = this.onChangeNo.bind(this);
    this.onChangeSu = this.onChangeSu.bind(this);
    this.onChangeSa = this.onChangeSa.bind(this);
    this.onChangeDe = this.onChangeDe.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
  }
  reset = () => {
    this.setState({
      EmpNo: '',
      EmpNa: '',
      SurNa: '',
      Saraly: '',
      Depa: '',
    })
  }
  onKeyup = () => {
    let { EmpNo, EmpNa, SurNa, Saraly, Depa} = this.state
    let dbCon = database.ref('Dep');
    dbCon.push({
      EmpNo: EmpNo,
      EmpNa: EmpNa,
      SurNa: SurNa,
      Saraly: Saraly,
      Depa: Depa,
    });
    this.props.history.replace('/')
    this.reset();
  }
  onChangeNo(e) {
    this.setState({
      EmpNo: e.target.value
    });
  }
  onChangeNa(e) {
    this.setState({
      EmpNa: e.target.value
    });
  }
  onChangeSu(e) {
    this.setState({
      SurNa: e.target.value
    });
  }
  onChangeSa(e) {
    this.setState({
      Saraly: e.target.value
    });
  }
  onChangeDe(e) {
    this.setState({
      Depa: e.target.value
    });
  }
    // onClickEdit(e){
  //   var obj = {

  //    };
  //   let dbUpdate = database.ref('Dep');
  //   dbUpdate.child(e).update(obj)
  // }
  render() {
    const {lng}=this.props
    return (
          <I18n>
        {(t) => (
      <div > 
        <div className="form">
      
      <fieldset className="search-emp-critieria-root">
      <form>
      <div className="format">
       <div className="group"> 
       <input  type="text" maxLength="8" required
          value={this.state.EmpNo} onChange={this.onChangeNo} name="userid" />
            <span className="highlight"></span>
        <span className="bar"></span>
          <label> {t('formManageUser.employeeNo', { lng })}</label>
    </div>
    </div>
    <div className="format">
        <div className="group"> 
        <input  type="text" maxLength="50" required
          value={this.state.EmpNa} onChange={this.onChangeNa} name="userid" />
           <span className="highlight"></span>
        <span className="bar"></span>
          <label> {t('formManageUser.employeeName', { lng })}</label>
    </div>
    <div className="group">
        <input  type="text" maxLength="50" required
          value={this.state.SurNa} onChange={this.onChangeSu} name="userid" />
          <span className="highlight"></span>
      <span className="bar"></span>
      <label> {t('formManageUser.employeeSurename', { lng })}</label>
    </div>
    </div>
    <div className="format">
    <div className="group">
        <select 
          value={this.state.Depa} onChange={this.onChangeDe} required name="Department" id="Department">
          <option >{t('formManageUser.department.IT', { lng })}</option>
          <option >{t('formManageUser.department.HR', { lng })}</option>
          <option >{t('formManageUser.department.Marketing', { lng })}</option>
        </select>
        <span className="highlight"></span>
        <span className="bar"></span>
      <label>{t('formManageUser.department.title', { lng })}</label>
    </div>
    <div className="group"> 
        <input  type="text" maxLength="8" required
          value={this.state.Saraly} onChange={this.onChangeSa} name="userid" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{t('formManageUser.salary', { lng })}</label>
          </div>
          </div>
        <button class="button2"  onClick={() => this.onKeyup()} >  {t('addEmp.title', { lng })}</button>
        <button class="button1" onClick={() => this.reset()}>{t('addEmp.clear', { lng })}</button>
        </form> 
        </fieldset>
        </div>
        </div>
        )}
        </I18n>
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
