import React from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';

import './App.scss';

const App: React.FC = () => {

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];

    return (
        <div className="App">
            <div className="container">
                <h1 className="my-5">Policy Manager</h1>

                <section className="mb-5">
                    <h4 className="mb-3">Step 1: Select Policy type</h4>
                    <p className="small text-info">Tip: A Policy is a container for permissions. The different types of
                        policies you can create are an IAM Policy</p>
                    <label className="mr-3">Select Type of Policy</label>
                    <Dropdown options={citySelectItems} placeholder="Select a City"/>
                </section>

                <section className="mb-5">
                    <h4 className="mb-3">Step 2: Add Statements(s)</h4>
                    <p className="small text-info">A statement is the formal description of a single permission. See a
                        description of elements that you can use in statements.</p>
                    <div className="d-flex align-items-center control-box">
                        <label className="mr-3">Effect:</label>
                        <InputSwitch/>
                    </div>

                    <div className="d-flex align-items-center control-box">
                        <label className="mr-3">Actions:</label>
                        <MultiSelect options={citySelectItems}/>
                    </div>

                    <div className="d-flex align-items-start control-box">
                        <label className="mr-3 pt-1">Resources:</label>
                        <div>
                            <InputText/>
                            <p className="small text-warning mt-2">ARN should follow the following format: arn:aws:sqs: Use a comma to separate multiple values.</p>
                        </div>
                    </div>

                    <Button className="mb-4 ml-5" label="Add Statement"/>

                    <div>
                        <p className="small text-info">You added the following statements. Click the button below to
                            Generate a policy.</p>
                    </div>
                </section>

                <section className="mb-5">
                    <h4 className="mb-3">Step 3: Generate Policy</h4>
                    <p className="small text-info">A policy is a document (written in the Access Policy Language) that acts as a container for one or more statements.</p>
                    <Button className="ml-5 mt-4" label="Generate Policy" />
                    <Button className="ml-5 mt-4 p-button-danger" label="Start Over" />
                </section>
            </div>
        </div>
    );
};

export default App;
