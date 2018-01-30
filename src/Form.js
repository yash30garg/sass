import React, { Component } from 'react';
import { authContext } from './adalConfig'
import './style.css';
export class Form extends Component{
    constructor(){
        super();
        this.state={
            result:""
        }  
        this.validate=this.validate.bind(this);
        this.logout=this.logout.bind(this);
    }
    logout=(e)=>{
        e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    authContext.logOut();
    }
    validate=()=>{
        let name=document.getElementById("name").value;
        let pwd=document.getElementById("pwd").value;
        let re=/^[a-zA-Z0-9.]*@[a-zA-Z]*.com$/;
        let pass=/^[a-zA-Z]+[0-9]+[a-zA-Z]*$/;
        if(!re.test(name) || name===""){
            alert("Enter a valid email address")
        }
        else if(pwd===""|| !pass.test(pwd)){
            alert("Enter a valid password in the format 'Alphabet-Number-Alphabet'")
        }
        else{
            let val=(<div>
            <table className="responsive-table">
            <tbody>
            <tr><td>
            Your Name:
            </td><td>
            {name}
            </td></tr>
            <tr><td>
            Your Password:
            </td><td>
            {pwd}
            </td></tr>
            </tbody>
            </table>
            </div>)
            this.setState({
                result:val
            })
        }
    }
    render(){
        return(
   
     <div>

   <div class="big-panel">  <h1> Registration Form  </h1>  </div>
   
   

<div class="little-panel"><h3><p>It is an example of adal sass and regex </p></h3></div>

   
 <br /><br /><br />
 
        
        <div className="input-field col s4 container">
   
          <input id="name" ref="name" type="text" className="validate"/>
          <label htmlFor="name">Email</label>
        </div>
        <div className="input-field col s4 container">
          <input id="pwd" ref="pwd" type="text" className="validate"/>
          <label htmlFor="pwd">Password</label>

        </div>

       
              <div className="button">
        <a className="waves-effect waves-light btn-large" onClick={this.validate}>Submit</a><br/><br/>
        <a className="waves-effect waves-light btn" onClick={this.logout}>LogOut</a>
        {this.state.result}
      </div>
      
      </div>
        )
    }
}