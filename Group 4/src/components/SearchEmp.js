import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';
import { database } from '../configs/firebase'
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { I18n } from 'react-i18next'

class SearchEmp extends Component {

  // state = {
  //   open: false,
  // };
  
  handleClickOpen = (key) => {
    this.setState({ 
      open: true ,
      dialog: true,
      key: key
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      dialog: false,
      key:'',
      EmpNo: '',
      EmpNa: '',
      SurNa: '',
      Saraly: '',
      Depa: '',
      EmpNo2: '',
      EmpNa2: '',
      SurNa2: '',
      Saraly2: '',
      Depa2: '',
      data: [],

    }

    this.onChangeNa = this.onChangeNa.bind(this);
    this.onChangeNo = this.onChangeNo.bind(this);
    this.onChangeSu = this.onChangeSu.bind(this);
    this.onChangeSa = this.onChangeSa.bind(this);
    this.onChangeDe = this.onChangeDe.bind(this);
    this.onChangeNa2 = this.onChangeNa2.bind(this);
    this.onChangeNo2 = this.onChangeNo2.bind(this);
    this.onChangeSu2 = this.onChangeSu2.bind(this);
    this.onChangeSa2 = this.onChangeSa2.bind(this);
    this.onChangeDe2 = this.onChangeDe2.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }
  reset = () => {
    this.setState({
      EmpNo: '',
      EmpNa: '',
      SurNa: '',
      Saraly: '',
      Depa: '',
      EmpNo2: '',
      EmpNa2: '',
      SurNa2: '',
      Saraly2: '',
      Depa2: '',
    })
  }
  onKeyup = () => {
    let { EmpNo, EmpNa, SurNa, Saraly, Depa, EmpNo2, EmpNa2, SurNa2, Saraly2, Depa2 } = this.state
    let dbCon = database.ref('Dep');
    dbCon.push({
      EmpNo: EmpNo,
      EmpNa: EmpNa,
      SurNa: SurNa,
      Saraly: Saraly,
      Depa: Depa,
      EmpNo2: EmpNo2,
      EmpNa2: EmpNa2,
      SurNa2: SurNa2,
      Saraly2: Saraly2,
      Depa2: Depa2
    });
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
  onChangeNo2(e) {
    this.setState({
      EmpNo2: e.target.value
    });
  }
  onChangeNa2(e) {
    this.setState({
      EmpNa2: e.target.value
    });
  }
  onChangeSu2(e) {
    this.setState({
      SurNa2: e.target.value
    });
  }
  onChangeSa2(e) {
    this.setState({
      Saraly2: e.target.value
    });
  }
  onChangeDe2(e) {
    this.setState({
      Depa2: e.target.value
    });
  }
  componentWillMount() {
    let app = database.ref('Dep');
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
  onClickDelete(e) {
    let dbCon6 = database.ref('Dep');
    dbCon6.child(e).remove();
  }
  onClickEdit() {
    var obj = {
      EmpNa: this.state.EmpNa2,
      EmpNo: this.state.EmpNo2,
      SurNa: this.state.SurNa2,
      Saraly: this.state.Saraly2,
      Depa: this.state.Depa2,
    };
    let dbUpdate = database.ref('Dep');
    dbUpdate.child(this.state.key).update(obj)
    this.reset()
    this.handleClose()
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
  onClickSearch = () => {
    this.setState((prevState) => ({
      data: Object.keys(prevState.data).filter(key => (
        this.searching(prevState.EmpNo, prevState.data[key].EmpNo) &&
        this.searching(prevState.EmpNa, prevState.data[key].EmpNa) &&
        this.searching(prevState.SurNa, prevState.data[key].SurNa) &&
        this.searching(prevState.Salary, prevState.data[key].Salary) &&
        (prevState.Dep === '' || prevState.Dep === prevState.data[key].Dep)
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
  render() {
    const {lng}=this.props
    console.log(this.state.data)
    return (
      <I18n>
      {(t) => (
      <div > 
      <div className="form">
    
    <fieldset className="search-emp-critieria-root">
    <legend>critieria</legend>
    <form>
     <div className="format">
     <div className="group"> 
     <input   type="text" maxLength="8" required
        value={this.state.EmpNo} onChange={this.onChangeNo} name="userid" />
          <span className="highlight"></span>
      <span className="bar"></span>
        <label>{t('formManageUser.employeeNo', { lng })} </label>
  </div>
  </div>
  <div className="format">
      <div className="group"> 
      <input  type="text" maxLength="50" required
        value={this.state.EmpNa} onChange={this.onChangeNa} name="userid" />
         <span className="highlight"></span>
      <span className="bar"></span>
        <label>{t('formManageUser.employeeName', { lng })} </label>
  </div>
  <div className="group">
      <input  type="text" maxLength="50" required
        value={this.state.SurNa} onChange={this.onChangeSu} name="userid" />
        <span className="highlight"></span>
    <span className="bar"></span>
    <label>{t('formManageUser.employeeSurename', { lng })} </label>
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
    <label>{t('formManageUser.department.title', { lng })} </label>
  </div>
  <div className="group"> 
      <input  type="text" maxLength="8"  required
        value={this.state.Saraly} onChange={this.onChangeSa} name="userid" />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{t('formManageUser.salary', { lng })}</label>
        </div>
        </div>
      <button class="button4" onClick={() => this.onClickSearch()} >{t('searchEmp.title', { lng })}</button>
      <button class="button3" onClick={() => this.reset()}>{t('addEmp.clear', { lng })}</button>
      </form> 
      </fieldset>
      </div>

        <table>
          <tr class="tr">
          <th></th>
            <th class="th">No.</th>
            <th class="th">Employee No.</th>
            <th class="th">Employee Name</th>
            <th class="th">Employee Surename</th>
            <th class="th">Department</th>
            <th class="th">Salary</th>
            <th></th>
            <th></th>
          </tr>
          {

            this.state.data.map((item,index) => (

              <tr>
                <th></th>
                <td>{index+1}</td>
                <td>{item.EmpNo}</td>
                <td>{item.EmpNa}</td>
                <td>{item.SurNa}</td>
                <td>{item.Depa}</td>
                <td>{item.Saraly}</td>
                <td><Button onClick={()=>this.handleClickOpen(item.key)}> {t('addEmp.edit', { lng })}</Button>
                { this.state.dialog == true &&
                  <div>
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
            <div > 
        <div className="form">
      
      <fieldset className="search-emp-critieria-root">
      <legend>critieria</legend>
      <form>
       <div className="format">
       <div className="group"> 
       <input   type="text" maxLength="8" required
          value={this.state.EmpNo2} onChange={this.onChangeNo2} name="userid" />
            <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeNo', { lng })} </label>
    </div>
    </div>
    <div className="format">
        <div className="group"> 
        <input  type="text" maxLength="50" required
          value={this.state.EmpNa2} onChange={this.onChangeNa2} name="userid" />
           <span className="highlight"></span>
        <span className="bar"></span>
          <label>{t('formManageUser.employeeName', { lng })}</label>
    </div>
    <div className="group">
        <input  type="text" maxLength="50" required
          value={this.state.SurNa2} onChange={this.onChangeSu2} name="userid" />
          <span className="highlight"></span>
      <span className="bar"></span>
      <label>{t('formManageUser.employeeSurename', { lng })} </label>
    </div>
    </div>
    <div className="format">
    <div className="group">
        <select 
          value={this.state.Depa2} onChange={this.onChangeDe2} required name="Department" id="Department">
          <option >{t('formManageUser.department.IT', { lng })}</option>
          <option >{t('formManageUser.department.HR', { lng })}</option>
          <option >{t('formManageUser.department.Marketing', { lng })}</option>
        </select>
        <span className="highlight"></span>
        <span className="bar"></span>
      <label>{t('formManageUser.department.title', { lng })}</label>
    </div>
    <div className="group"> 
        <input  type="text" maxLength="8"  required
          value={this.state.Saraly2} onChange={this.onChangeSa2} name="userid" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>{t('formManageUser.salary', { lng })}</label>
          </div>
          </div>
          </form> 
        </fieldset>
        </div>
                          </div>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        {t('addEmp.cancle', { lng })}
            </Button>
                        <Button onClick={() => this.onClickEdit()} color="primary" autoFocus>
                        {t('addEmp.ok', { lng })}
            </Button>
                      </DialogActions>
                    </Dialog>
                  </div>

                }
                </td>
                <td>
                  <button onClick={() => this.onClickDelete(item.key)}>
                  {t('addEmp.delete', { lng })}
                  </button>
                </td>
              </tr>

            ))
          }
        </table>
      </div>
       )}
       </I18n>
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
