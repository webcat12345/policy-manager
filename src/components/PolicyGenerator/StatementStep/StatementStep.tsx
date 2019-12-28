import React, { Component } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export class StatementStep extends Component {
    render() {
        const typeOfPolicy = [
            {label: 'Location', value: 'Location'},
            {label: 'Properties', value: 'Properties'},
            {label: 'Account', value: 'Account'},
            {label: 'Users', value: 'Users'}
        ];

        return (
            <section className="mb-5">
                <h4 className="mb-3">Step 2: Add Statements(s)</h4>
                <p className="small text-info">Tip: A statement is the formal description of a single permission. See a
                    description of elements that you can use in statements.</p>
                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Effect:</label>
                    <InputSwitch/>
                </div>

                <div className="d-flex align-items-center control-box">
                    <label className="mr-3">Actions:</label>
                    <MultiSelect options={typeOfPolicy}/>
                </div>

                <div className="d-flex align-items-start control-box">
                    <label className="mr-3 pt-1">Resources:</label>
                    <div>
                        <InputText/>
                        <p className="small text-warning mt-2">Tip: ARN should follow the following format: arn:aws:sqs: Use a comma to separate multiple values.</p>
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

