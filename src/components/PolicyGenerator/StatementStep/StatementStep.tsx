import React, { Component } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { Statement, statementActions, StatementEffect } from '../../../core/models/policy';
import { StatementTable } from '../StatementTable/StatementTable';

export class StatementStep extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            effect: true, // effect should be modified proper type before walk through props
            statements: []
        };

        this.handleAddStatement = this.handleAddStatement.bind(this);
    }

    handleAddStatement() {
        const statement: Statement = {
            effect: this.state.effect ? StatementEffect.Allow : StatementEffect.Deny,
            action: this.props.actions,
            resource: this.props.resource ? this.props.resource.split(',') : []
        };
        if (statement.effect && statement.action && statement.action.length && statement.resource && statement.resource.length) {
            const statements = this.state.statements || [];
            statements.push(statement);
            this.setState({statements: statements});
            // add statement and reset form
            this.setState({effect: true, actions: [], resource: ''});
            this.props.onStatementChange(statements);
        }
    }

    render() {
        return (
            <section className="mb-5">
                <h4 className="mb-3">Step 2: Add Statements(s)</h4>
                <p className="small text-info">Tip: A statement is the formal description of a single permission. See a
                    description of elements that you can use in statements.</p>
                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Effect:</label>
                    <InputSwitch checked={this.state.effect} onChange={(e: any) => this.setState({effect: e.value})}/>
                </div>

                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Actions:</label>
                    <MultiSelect options={statementActions(this.props.policy).map(x => ({label: x, value: x}))}
                                 value={this.props.actions} onChange={(e: any) => this.props.onActionsChange(e.value)}/>
                </div>

                <div className="d-flex align-items-start control-box">
                    <label className="mr-3 pt-1">Resources:</label>
                    <div className="input-wrapper">
                        <InputText className="input-box-resource" value={this.props.resource} onChange={(e: any) => this.props.onResourceChange(e.target.value)}/>
                        <p className="small text-warning mt-2">Tip: ARN should follow the following format: arn:aws:sqs:
                            Use a comma to separate multiple values.</p>
                    </div>
                </div>

                <Button type="button" className="mb-4 ml-5 btn-add-statement" label="Add StatementStep"
                        onClick={this.handleAddStatement}
                        disabled={!this.props.actions || !this.props.actions.length || !this.props.resource}/>
                {
                    (this.state.statements && this.state.statements.length) ?
                        <StatementTable statements={this.state.statements}/> : null
                }
            </section>
        );
    }
}

