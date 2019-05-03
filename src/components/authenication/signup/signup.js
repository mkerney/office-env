import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import CheckIcon from '../../../assets/images/Check.svg';


export default class Signup extends Component {
    constructor(props){
        super(props)
        this.setFirstName = this.setFirstName.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setLastName = this.setLastName.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setConfirmPassword = this.setConfirmPassword.bind(this)
        this.setTncChecked = this.setTncChecked.bind(this)
        this.submit = this.submit.bind(this)
    }

    setFirstName(e){
        this.props.setFirstName(e.target.value)
    }

    setEmail(e){
        this.props.setEmail(e.target.value)
    }

    setLastName(e){
        this.props.setLastName(e.target.value)
    }

    setPassword(e){
        this.props.setPassword(e.target.value)
    }

    setConfirmPassword(e){
        this.props.setConfirmPassword(e.target.value)
    }

    setTncChecked(e){
        this.props.setTncChecked(e.target.checked)
    }

    submit(e){
        e.preventDefault()
        this.props.submit()
    }

    render() {
        return (
            <div className="signup-section">
                <Form id="signUpForm" noValidate onSubmit={this.submit}>
                    <div className="pro-account-wrapper">
                        <h4 className="text-center">Sign Up</h4>
                    </div>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpFirstName">First Name<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="text" name="signUpFirstName" id="signUpFirstName" placeholder="Enter First Name" onChange={this.setFirstName} />
                        {this.props.firstName.showError ? <span className="error-input-msg">{this.props.firstName.error}</span> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpLastName">Last Name<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="text" name="signUpLastName" id="signUpLastName" placeholder="Enter Last Name"  onChange={this.setLastName} />
                        {this.props.lastName.showError ? <span className="error-input-msg">{this.props.lastName.error}</span> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpEmail">Email<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="text" name="signUpMiddleName" id="signUpMiddleName" placeholder="Enter Email" onChange={this.setEmail} />
                        {this.props.email.showError ? <span className="error-input-msg">{this.props.email.error}</span> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpPwd">Password<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="password" name="signUpPwd" id="signUpPwd" placeholder="**********" onChange={this.setPassword} />
                        {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}                  
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpRepeatPwd">Repeat password<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="password" name="signUpRepeatPwd" id="signUpRepeatPwd" placeholder="**********" onChange={this.setConfirmPassword} />
                        {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                   
                    </FormGroup>
                    <FormGroup className="custom-check">
                        <Label className="checkbox-inline d-flex align-items-center justify-content-start">
                            <Input type="checkbox" name="agreeTerms" checked={this.props.tncChecked.value} onChange={this.setTncChecked} />
                            <span>
                                <i>
                                    <img src={CheckIcon} className="custom-check-svg" alt="check icon"/>
                                </i>
                            </span> 
                            <small>
                                I agree to the site's Terms & Conditions<span class="field-mandatory"> *</span>
                            </small>
                        </Label>
                        {this.props.tncChecked.showError ? <span className="error-input-msg">{this.props.tncChecked.error}</span> : null}                   
                    </FormGroup>
                    <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                        <Button type="submit" className="btn-theme-blue">Sign Up</Button>
                        <span className="d-block text-center">
                            Already have an account? <Link className="dont-have-account d-inline-block" to={'/'}>Sign In</Link>
                        </span>    
                    </div>
                </Form>
                {this.props.isSignedUp ? <Redirect push to="/" /> : null}
            </div>
        );
    }
}