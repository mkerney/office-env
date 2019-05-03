import React, { Component } from 'react'
import MainLogo from '../../assets/images/main-logo.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CheckIcon from '../../assets/images/Check.svg';
import { ENV, programType, transactionType } from '../variables';
import { Redirect } from 'react-router-dom'

export default class dailyTestData extends Component {

    constructor(props) {
        super(props)
        this.setEnv = this.setEnv.bind(this)
        this.setMedicaid = this.setMedicaid.bind(this)
        this.setProgramType = this.setProgramType.bind(this)
        this.setTransactionType = this.setTransactionType.bind(this)
        this.setComment = this.setComment.bind(this)
        this.submit = this.submit.bind(this)
    }

    setEnv(e) {
        this.props.setEnv(e.target.value)
    }

    setMedicaid(e) {
        this.props.setMedicaid(e.target.value)
    }

    setProgramType(e) {
        this.props.setProgramType(e.target.value)
    }

    setTransactionType(e) {
        this.props.setTransactionType(e.target.value)
    }

    setComment(e) {
        this.props.setComment(e.target.value)
    }

    submit(e) {
        e.preventDefault()
        this.props.submit()
    }

    render() {
        const envDropdown = (ENV).map((envDropdownItem, index) => {
            return (
                <option key={index} value={envDropdownItem.value}>{envDropdownItem.label}</option>
            )
        })
        const programTypeDropdown = (programType).map((programTypeItem, index) => {
            return (
                <option key={index} value={programTypeItem.value}>{programTypeItem.label}</option>
            )
        })
        const transactionTypeDropdown = (transactionType).map((transactionTypeItem, index) => {
            return (
                <option key={index} value={transactionTypeItem.value}>{transactionTypeItem.label}</option>
            )
        })
        return (
            <div className="testdataform-wrapper">
                <div className="testdataform-content">
                    <div className="testdata-header d-flex align-items-center justify-content-center">
                        <a href='javascript:void(0);'><img src={MainLogo} alt="mass" className="logo-img" /></a>
                        <span className="text-center ml-3">MassHealth New MMIS Managed Care Daily Test Data</span>
                    </div>
                    <div>
                        <Button onClick={this.props.logout}>Logout</Button>
                    </div>
                    <div className="testdata-form">
                        <Form id="testDataForm" noValidate onSubmit={this.submit}>
                            <FormGroup>
                                <Label className="form-label-theme" for="dataEnv">ENV<span className="field-mandatory">*</span></Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="dataEnv" id="dataEnv" onChange={this.setEnv}>
                                    {envDropdown}
                                </Input>
                                {this.props.env.showError ? <span className="error-input-msg">{this.props.env.error}</span> : null}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="medicaidId">Medicaid ID(Member ID)</Label>
                                <Input className="form-input-theme" name="medicaidId" id="medicaidId" maxLength="12" placeholder="Enter Medicaid Number" onChange={this.setMedicaid} />
                                {/* {this.props.email.showError ? <span className="error-input-msg">{this.props.email.error}</span> : null}               */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="programType">Program type</Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="programType" id="programType" onChange={this.setProgramType}>
                                    {programTypeDropdown}
                                </Input>
                                {/* {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}                   */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="transactionType">Transaction Type</Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="transactionType" id="transactionType" onChange={this.setTransactionType}>
                                    {transactionTypeDropdown}
                                </Input>
                                {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="comments">Comments</Label>
                                <Input className="form-input-theme textarea-input-theme" placeholder="Comment here" type="textarea" name="comments" id="comments" onChange={this.setComment} />
                                {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                            </FormGroup>
                            <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                                <Button type="submit" className="w-100 btn-theme-blue">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                {!this.props.isSignedIn && window.location.pathname !== '/' ? <Redirect push to="/" /> : null}
            </div>
        )
    }
}
