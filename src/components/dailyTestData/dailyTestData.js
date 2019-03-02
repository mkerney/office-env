import React, { Component } from 'react'
import MainLogo from '../../assets/images/main-logo.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CheckIcon from '../../assets/images/Check.svg';
import { ENV, programType, transactionType} from '../variables';

export default class dailyTestData extends Component {
    render() {
        const envDropdown = (ENV).map((envDropdownItem, index) => {
            return(
                <option key={index} value={envDropdownItem.value}>{envDropdownItem.label}</option>
            )
        })
        const programTypeDropdown = (programType).map((programTypeItem, index) => {
            return(
                <option key={index} value={programTypeItem.value}>{programTypeItem.label}</option>
            )
        })
        const transactionTypeDropdown = (transactionType).map((transactionTypeItem, index) => {
            return(
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
                    <div className="testdata-form">
                        <Form id="testDataForm" noValidate>
                            <FormGroup>
                                <Label className="form-label-theme" for="dataEnv">ENV<span className="field-mandatory">*</span></Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="dataEnv" id="dataEnv">
                                    { envDropdown }
                                </Input>
                                {/* {this.props.name.showError ? <span className="error-input-msg">{this.props.name.error}</span> : null} */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="medicaidId">Medicaid ID(Member ID)</Label>
                                <Input className="form-input-theme" name="medicaidId" id="medicaidId" maxLength="12" placeholder="Enter Medicaid Number"/>
                                {/* {this.props.email.showError ? <span className="error-input-msg">{this.props.email.error}</span> : null}               */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="programType">Program type</Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="programType" id="programType">
                                    { programTypeDropdown }
                                </Input>
                                {/* {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}                   */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="transactionType">Transaction Type</Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="transactionType" id="transactionType">
                                    { transactionTypeDropdown }
                                </Input>
                                {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="comments">Comments</Label>
                                <Input className="form-input-theme textarea-input-theme" placeholder="Comment here" type="textarea" name="comments" id="comments" />
                                {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                            </FormGroup>
                            <div className="dont-have-account-wrapper d-flex align-items-center justify-content-between">
                                <Button className="w-100 btn-theme-blue">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
