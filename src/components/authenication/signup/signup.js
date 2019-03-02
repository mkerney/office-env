import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import CheckIcon from '../../../assets/images/Check.svg';


export default class Signup extends Component {
    render() {
        return (
            <div className="signup-section">
                <Form id="signUpForm" noValidate>
                    <div className="pro-account-wrapper">
                        <h4 className="text-center">Sign Up</h4>
                    </div>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpFirstName">First Name<span class="field-mandatory">*</span></Label>
                        <Input className="form-input-theme" type="text" name="signUpFirstName" id="signUpFirstName"  />
                        {/* {this.props.name.showError ? <span className="error-input-msg">{this.props.name.error}</span> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpMiddleName">Middle Name</Label>
                        <Input className="form-input-theme" type="text" name="signUpMiddleName" id="signUpMiddleName"  />
                        {/* {this.props.name.showError ? <span className="error-input-msg">{this.props.name.error}</span> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpLastName">Last Name<span class="field-mandatory">*</span></Label>
                        <Input className="form-input-theme" type="text" name="signUpLastName" id="signUpLastName"  />
                        {/* {this.props.name.showError ? <span className="error-input-msg">{this.props.name.error}</span> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpPwd">Password<span class="field-mandatory">*</span></Label>
                        <Input className="form-input-theme" type="password" name="signUpPwd" id="signUpPwd" />
                        {/* {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}                   */}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signUpRepeatPwd">Repeat password<span class="field-mandatory">*</span></Label>
                        <Input className="form-input-theme" type="password" name="signUpRepeatPwd" id="signUpRepeatPwd" />
                        {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                    </FormGroup>
                    <FormGroup className="custom-check">
                        <Label className="checkbox-inline d-flex align-items-center justify-content-start">
                            <Input type="checkbox" name="agreeTerms"  />
                            <span>
                                <i>
                                    <img src={CheckIcon} className="custom-check-svg" alt="check icon"/>
                                </i>
                            </span> 
                            <small>
                                I agree to the site's Terms & Conditions<span class="field-mandatory">*</span>
                            </small>
                        </Label>
                        {/* {this.props.tncChecked.showError ? <span className="error-input-msg">{this.props.tncChecked.error}</span> : null}                    */}
                    </FormGroup>
                    <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                        <Button className="btn-theme-blue">Sign Up</Button>
                        <span className="d-block text-center">
                            Already have an account? <Link className="dont-have-account d-inline-block" to={'/'}>Sign In</Link>
                        </span>    
                    </div>
                </Form>
            </div>
        );
    }
}