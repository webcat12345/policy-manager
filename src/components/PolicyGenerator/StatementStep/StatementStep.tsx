import React, { Component } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { statementActions, StatementEffect } from '../../../core/models/policy';

export class StatementStep extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            effect: true, // effect should be modified proper type before walk through props
            actions: [],
            resource: '' // resource should be modified to string array before walk through props
        };

        this.handleResourceChange = this.handleResourceChange.bind(this);
    }

    handleResourceChange(event: any) {
        this.setState({resource: event.target.value});
        // TODO: add regex expression to validate resource
    }

    render() {
        const actions = statementActions().map(x => ({label: x, value: x}));
        return (
            <section className="mb-5">
                <h4 className="mb-3">Step 2: Add Statements(s)</h4>
                <p className="small text-info">Tip: A statement is the formal description of a single permission. See a
                    description of elements that you can use in statements.</p>
                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Effect:</label>
                    <InputSwitch checked={this.state.effect} onChange={
                        (e: any) => {
                            this.setState({effect: e.value});
                            this.props.onEffectChange(e.value ? StatementEffect.Allow : StatementEffect.Deny);
                        }
                    }
                    />
                </div>

                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Actions:</label>
                    <MultiSelect options={actions} value={this.state.actions} onChange={
                        (e: any) => {
                            this.setState({actions: e.value});
                            this.props.onActionChange(e.value);
                        }
                    } />
                </div>

                <div className="d-flex align-items-start control-box">
                    <label className="mr-3 pt-1">Resources:</label>
                    <div className="input-wrapper">
                        <InputText value={this.state.resource} onChange={this.handleResourceChange} />
                        <p className="small text-warning mt-2">Tip: ARN should follow the following format: arn:aws:sqs:
                            Use a comma to separate multiple values.</p>
                    </div>
                </div>

                <Button type="button" className="mb-4 ml-5" label="Add StatementStep"/>

                <div>
                    <p className="small text-info">You added the following statements. Click the button below to
                        Generate a policy.</p>
                </div>
            </section>
        );
    }
}

