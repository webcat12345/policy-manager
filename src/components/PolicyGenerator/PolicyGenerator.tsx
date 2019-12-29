import React, { Component } from 'react';

import { PolicyTypeStep } from './PolicyTypeStep/PolicyTypeStep';
import { StatementStep } from './StatementStep/StatementStep';
import { GenerateStep } from './GenerateStep/GenerateStep';
import { Policy, Statement } from '../../core/models/policy';

export class PolicyGenerator extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            policy: '',
            actions: [],
            resource: '',
            statements: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const policy: Policy = {
            version: new Date().toISOString(),
            statement: this.state.statements
        };
        console.log(policy);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className="my-5">Policy Manager</h1>
                <PolicyTypeStep onPolicyChange={(e: string) => {
                    this.setState({policy: e, actions: [], resource: ''});
                }}/>
                <StatementStep policy={this.state.policy} actions={this.state.actions} resource={this.state.resource}
                               onStatementChange={(e: Statement[]) => this.setState({statements: e})}
                               onActionsChange={(e: string[]) => this.setState({actions: e})}
                               onResourceChange={(e: string) => this.setState({resource: e})}/>
                <GenerateStep statements={this.state.statements}/>
            </form>
        );
    }
}
