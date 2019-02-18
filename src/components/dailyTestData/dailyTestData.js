import React, { Component } from 'react'
import MainLogo from '../../assets/images/main-logo.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CheckIcon from '../../assets/images/Check.svg';

export default class dailyTestData extends Component {
    render() {
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
                                    <option>Select a ENV Type</option>
                                    <option>MO</option>
                                    <option>UAT</option>
                                    <option>PERF</option>
                                    <option>STG</option>
                                    <option>PROD</option>
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
                                    <option>Select a Program Type</option>
                                    <option>MSTD</option>
                                    <option>MFAS</option>
                                    <option>CRPLS</option>
                                    <option>MSTDA</option>
                                    <option>MFASA</option>
                                    <option>CRPLA</option>
                                    <option>PCCP</option>
                                    <option>CPPCC</option>
                                    <option>ACOB</option>
                                    <option>PCCB</option>
                                    <option>CPCCB</option>
                                    <option>BH</option>
                                    <option>CPBH</option>
                                    <option>SCO</option>
                                    <option>PACE</option>
                                    <option>ICO</option>
                                    <option>DNTL1</option>
                                    <option>DNTL2</option>
                                    <option>DNTL3</option>
                                    <option>CBHI1</option>
                                    <option>CBHI2</option>
                                    <option>ACCS1</option>
                                    <option>ACCS2</option>
                                    <option>PACC1</option>
                                    <option>PACC2</option>
                                    <option>LTSS</option>
                                    <option>CSA</option>
                                    <option>BHCP</option>
                                    <option>ELTSS</option>
                                    <option>HSPC</option>
                                    <option>HBRW</option>
                                    <option>MSKSC</option>
                                </Input>
                                {/* {this.props.password.showError ? <span className="error-input-msg">{this.props.password.error}</span> : null}                   */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="transactionType">Transaction Type</Label>
                                <Input className="form-input-theme select-input-theme" type="select" name="transactionType" id="transactionType">
                                    <option>Select a Transaction Type</option>
                                    <option>E (Enrollment)</option>
                                    <option>T (Transfer)</option>
                                    <option>D (Disenrollment)</option>
                                    <option>C (Change)</option>
                                    <option>H (History)</option>
                                </Input>
                                {/* {this.props.confirmPassword.showError ? <span className="error-input-msg">{this.props.confirmPassword.error}</span> : null}                    */}
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label-theme" for="comments">Comments</Label>
                                <Input className="form-input-theme textarea-input-theme" type="textarea" name="comments" id="comments" />
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
