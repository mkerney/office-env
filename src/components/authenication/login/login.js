import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import CheckIcon from '../../../assets/images/Check.svg';

export default class Login extends Component {
    render() {
        return (
            <div className="login-section">
                <Form id="signInForm" noValidate>
                    <h4 className="text-center">Sign In</h4>
                    <FormGroup>
                        <Label className="form-label-theme" for="signInEmail">User ID</Label>
                        <Input className="form-input-theme" type="text" name="signInEmail" id="signInEmail" />
                        {/* {this.props.email.showError ? <span className="error-input-msg">{this.props.email.error}</span> : null}               */}
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signInPwd">Password</Label>
                        <Input className="form-input-theme" type="password" name="signInPwd" id="signInPwd"  />
                        {/* {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}               */}
                    </FormGroup>
                    <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                        <Button className="btn-theme-blue">
                            Sign In
                        </Button>
                        <span className="d-block text-center">
                            Don’t have an account? <a className="dont-have-account d-inline-block" href="javascript:void(0);">Sign up.</a>
                        </span>    
                    </div>
                </Form>
            </div>
        )
    }
}
