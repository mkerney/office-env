import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import CheckIcon from '../../../assets/images/Check.svg';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.submit = this.submit.bind(this)
    }

    setUsername(e){
        this.props.setEmail(e.target.value)
    }

    setPassword(e){
        this.props.setPassword(e.target.value)
    }

    submit(e){
        this.props.submit()
    }

    render() {
        return (
            <div className="login-section">
                <Form onSubmit={(e) => {
                        e.preventDefault();
                        this.submit()
                    }
                } id="signInForm" noValidate >
                    <h4 className="text-center">Sign In</h4>
                    <FormGroup>
                        <Label className="form-label-theme" for="signInEmail">User ID<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="text" name="signInEmail" id="signInEmail" placeholder="Enter User ID" 
                            onChange={this.setUsername}
                        />
                        {this.props.email.showError ? <span className="error-input-msg">{this.props.email.error}</span> : null}              
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label-theme" for="signInPwd">Password<span class="field-mandatory"> *</span></Label>
                        <Input className="form-input-theme" type="password" name="signInPwd" id="signInPwd" placeholder="**********" 
                            onChange={this.setPassword}
                        />
                        {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}              
                    </FormGroup>
                    <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                        <Button className="btn-theme-blue" type="submit">
                            Sign In
                        </Button>
                        <span className="d-block text-center">
                            Don’t have an account? <Link className="dont-have-account d-inline-block" to={'/auth/sign-up'}>Sign up.</Link>
                        </span>    
                    </div>
                </Form>
            </div>
        )
    }
}
