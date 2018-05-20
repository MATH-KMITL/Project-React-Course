import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import { I18n } from 'react-i18next';

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
  clcSearch = () => {
    this.setState((prevState) => ({
      data: Object.keys(prevState.data).filter(key => (
        this.searching(prevState.empNo, prevState.data[key].empNo) &&
        this.searching(prevState.empName, prevState.data[key].empName)&&
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

  delete(k){
    let dep = database.ref('Department');
    dep.child(k).remove();
  }

  render() {
    const {lng} = this.props 
    return (

      <div>
        <div className="form">
        <I18n>
          {(t) =>(
      <fieldset className="search-emp-critieria-root">
      <legend>{t('menu.searchEmp',{lng})}</legend>
      
       <div className="format">
       <div className="group"> 
        <input type="number" required maxLength='' value={this.state.empNo} 
        onChange={(e)=>{ this.setState({empNo: e.target.value}); }}  name="userid" />
        <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeNo',{lng})}</label>
    </div>
    </div>
        
      <div className="format">
        <div className="group"> 
        <input  type='text' required value={this.state.empName} onChange={(e)=>{ 
          this.setState({empName: e.target.value});}} name='userid' />
        <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeName',{lng})}</label>
    </div>
    <div className="group"> 
        <input  type='text' required value={this.state.empSurname} onChange={(e)=>{ 
          this.setState({empSurname: e.target.value});}} name='userid' />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{t('formManageUser.employeeSurename',{lng})}</label>
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
          <option >{t('formManageUser.department.title',{lng})}</option>
          <option >{t('formManageUser.department.IT',{lng})}</option>
          <option >{t('formManageUser.department.HR',{lng})}</option>
          <option >{t('formManageUser.department.Marketing',{lng})}</option>
        </select>
        <span className="highlight"></span>
        <span className="bar"></span>
      <label>{t('formManageUser.employeeDep',{lng})}</label>
    </div>
        <div className="group">  
        <input  type="number" required value={this.state.salary} onChange={(e)=>{ 
          this.setState({salary: e.target.value});}}  name="userid" /> 
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{t('formManageUser.salary',{lng})}</label>
        </div>

        
          
        </div>
        
        <div className="containerr">
        <button className="bottomm-up" onClick={()=>this.clcSearch()} >{t('formManageUser.btnSearch',{lng})}</button>
        <button className="bottomm-up "  onClick={()=>this.clearTask()}>{t('formManageUser.btnClear',{lng})}</button>
        </div>
        
      
       
          
  </fieldset>
          )}
          </I18n>
  
        <table>
          <tr>
            <th>No.</th>
            <th>Employee No.</th>
            <th>Employee Name</th>
            <th>Employee Surename</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
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
                <td><img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAThSURBVGhD7ZpHqBVJFIafOcMzi4rKLEYFdaGCio5imBFM4ywUXLkwoYIJ3RgWBoQxbBRBxzC4GgQ3BlBUdAYUXLlzowiGcTbmhAlH/6/qlfTrV923b3XfqxfeDx9W9euuqtN96tSputY1q1m1pz5iWgyu1ZwOis8xuFZT6ixeigWmZkX5leBvNaMl4pFoa2pWlLm2zNS+Y7USU8Uu8VDsEXFxjb9xD/fyzDfRasEAWpiaVTexWTDAD+JvsVX0E3H1FfyNe7iXZ3i2q3Cibfqgr4por3gnPoqbAhdZKZ6Ju4KOe4qs4t414p54KmiLNmmbPuiLPgsVDb4Rk0V/sVPg70xoBtNGhIpn1woCAW3SNn3QF30WZgxv+q2g4ajai962WIhoizajok/6LsTNfhZ86gGmVl3RJ32zmOYWkw+/3WFq2TRUTLBF4/uAJoohtphJ9Enf0eCSS8sF/tvB1PzC18fbYt1MscIW635oAGHQDFs096bNLfoqfN1ZJZjYaXNikDhvi5nEvTyTJPqiT/dCcot1ghBLdPJprGAeheoXQRs+rROPRb2p5dQWwTrR2tSaioHMs8UgzRdJL4K05r7YZGo5RArxn/CFP/x7oC0WItryzRk84V/R0tQCRdgjlehhao3FZL1gi4WItlywiKqXIATH17GytFtctsWy9au4Il43QDuzRYj+Eb/bYnliz0AqTlJHkhcX6wQhNknE/0/ikJjTAGWubRdJok3ajotncC/GlGk/QyLHLo6wRwwn7SZjjesnkRQWeesMeJapNRbX/m/41yfWGbeQRsUYGIvL7xhjaoJKI2xJ2c2140KAcKc/bNGrwyLUXRkTY2OMPoO/yhlSSrw5t1rHxXxImwu4GW/VJ9p06UyaqmYIg01SVQ3J41q4TZprHREVdy032d0mJ3SyJ01oN9nTIp5P0cnO2EpOdidC3FJB+N3GhZgIkS6L9YlwSeTi7bOeAGWM8IVz1EUME+NEPJmcKwi/jCnoOIlFiIOCEPH2cSHmA1wSPuNJGM+I9wKXcdwRG0VHgXKdUpKikB6QJsSFj160xSCxWXIL5wkxXZAKMQ9+FGS+eMQtUc5mzCsSNT5pJZJGjHgh0lwUNzotGAMHErnEuRNHNtFTw6hC0njciS+RZoQT/V4VuF8usal5Ijiy8SlkY3VW4E5ZNUJg+ChTyyFCLRO2iK0u7sLhG1+yHF0XaQlnJnEAQAzPe/iAhguiUndTy6794qQthqnI4yA0RmBIuZkDB9/lHG400RRR5AEdkQ5DBptadv0ljtlimDgKKvrIlMWOdSKr+HoEnIWmlkNJh9jkPUSzpNCcJFZs1oZOplZa6wXHQkHpSVzxnxU4fcT3OfNineG0w5cB+ETacVucEqVewiRB+rLI1AoSgyVtiZ7F8iON+6EHIzkoIDH0Zc1c+80WzRzhmWuCdSIuDNwgeHnMqUINSRPpDIGBRJMBknbHxanMA+ESQH7VYnFksWOd2CeITkxsXAkwYLHgHuYr5M69sqrcH0NHChY71olz4k/BxI7OCQzgy+DKz8VoUXExAAIBuzknylwLnbAkrhhBpGRvUzVj2MXxBqNwLVS4E4M/KjjK5ZwMwypuTCX+CweDjhpzQFTFmEqIQTN4ZwxfmQBSk3LGHBc3BIeCNSuM4UvIiLr6LztbHxmb1bOKAAAAAElFTkSuQmCC"/></td>
                <td><img onClick={() => this.delete(item.key) } src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARNSURBVGhD7ZlZyG1jHIc/Q+Z5CKEQcYyZIheIUghx0jk4V0K5l8iFc+VCiijzPETOoYhQuDNmVobcUSIpN8jsefbeb/u/39ba6333Xvu72k89fWuts/bZ/9+3/ut937W+lSVLllSxDV6Db+Iv+B/+jC/jOtwSS7gSv8Pf8BncHVeNo/FrtPg238UDcBobMZ3/7+jnJ7gXLpxjMF2BLv1N749NpBB/4BXoeZ+Pji08zNb4BcZiu3wVc2KItR4YsTeuShj7ORZZ6pmYaAuRWJUwr2EssNR7UbpCJBYe5geMBZb6NpaGSCw0zD8YCyw1jUilIRILCxOLq7U2RGIhYfLiSp01RKL3MHmBJc4bItFrmLzILvsKkegtTF7oNPsOkeglTF5sm4sKkbgW03fNFOZPjAW36ep3UazHv9Hv+XH0szrMtxgLbtKrMdeNOIUY4iZ0FZ7WflVhnsJYdJvv467YJ00h3H8aq++ZczAWPM0+w+QhxJv+Dbx8tF0dxifAWPA0+wiTh/C5xafTnBPwS/S8ojAW5omx4GnOEyYPccRo/36MnIiu557AqiuzEz6KbYvIv/B2TI/D72FtmKZ22g3tiMsGe2P2wVfwEpypzdbgRnwR38IX8AY8EMU2mCVMHuIg3A5zDsGmNjsVv8KqMF3UhslDHDbafxwjx6HtdM9gb8xp6GftmLlXADmlYZrayTZ+DjcM9sbsiXaA7RTZF1/Cc7G3tVmkK4x9H0PYNobI8QptP9yc4HDcdrg5wemY2uxDbGrFamIY33ulMHmIg0f7mzByFNpOtk3kFPSzdw32xpyNHn8A09B8NTZiQodFb7BDsesNYx7Gt5V5O+2AriLy0WkXfBbzdrLNNuN5g70x++HzeBbejH7HbTiBI8nDmL+scyF3B07rxxgmaQjbo+n+ORJ3Hm5O4MvCHYebEzgQxFHOK5bqvNgDiUvRd7WxkNyf8AxsI4bxjWRaOzmURwxnO7mmijgJ+tkHB3tjvCc87jwmMcRDHkhciKkVuvwVT8Y2YpiP0fbw9WnENnPozZ9vnByfxPMHe2McqQzt/RFDPIZb4QAvu2/cY7FdepP5qrWNGCaOZraHxeYcj94rOV6h2GatIeRGjEWW6vwwjTyMC0DbyRs1cix6jmuqSJoE7x7sdYSQd9B/rNW/e3QRw3yKfiZvJ3/j9nk+OnnlHkFHp84QUttWyY+whLY2Own3GG5OYNFxlCsKIb9jLLBUiyslD+P85LbzR8RBxONpJCoOId+gJ9b6OtaQt5mjk2uniPPKfWg7GbY4hPjBWGCpDhK1tLWZ84QzeaI6hKTRJBbZpXOJRc1CHiZNdl4hmSlEwvV/KrLE63EeYpjP0MnRyW6uEOIi0WVELLZNW3ELnJcY5gP0KXSuEAk/aN+n/yz3e7wK+8Qw+R9iXbTOHCLiUsFZ+1b0zcYteAE2Pfj0gQ9a1+GdeJEHlixZ0jcrK/8DbOPLb8UV/CMAAAAASUVORK5CYII="/></td>
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