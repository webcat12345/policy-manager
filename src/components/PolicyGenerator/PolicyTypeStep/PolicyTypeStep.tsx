import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { PolicyType } from '../../../core/models/policy';

export class PolicyTypeStep extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            policy: ''
        };

        this.handlePolicyChange = this.handlePolicyChange.bind(this);
    }

    handlePolicyChange(event: any) {
        this.setState({policy: event.value});
        this.props.onPolicyChange(event.value);
    }

    render() {
        const typeOfPolicy = [
            {label: 'Location', value: PolicyType.Location},
            {label: 'Properties', value: PolicyType.Properties},
            {label: 'Account', value: PolicyType.Account},
            {label: 'Users', value: PolicyType.Users}
        ];

        return (
            <section className="mb-5">
                <h4 className="mb-3">Step 1: Select Policy type</h4>
                <p className="small text-info">Tip: A Policy is a container for permissions. The different types of
                    policies you can create are an IAM Policy</p>
                <label className="mr-3">Select Type of Policy</label>
                <Dropdown placeholder="Select a type of policy"
                          options={typeOfPolicy}
                          value={this.state.policy}
                          onChange={this.handlePolicyChange}/>
            </section>
        );
    }
}

