import React, { Component } from 'react';

import { PolicyTypeStep } from './PolicyTypeStep/PolicyTypeStep';
import { StatementStep } from './StatementStep/StatementStep';
import { GenerateStep } from './GenerateStep/GenerateStep';
import { StatementEffect } from '../../core/models/policy';

export class PolicyGenerator extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            policy: '',
            effect: StatementEffect.Allow,
            action: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className="my-5">Policy Manager</h1>
                <PolicyTypeStep onPolicyChange={(e: string) => this.setState({policy: e})}/>
                <StatementStep onEffectChange={(e: StatementEffect) => this.setState({effect: e})}
                               onActionChange={(e: string[]) => this.setState({action: e})}/>
                <GenerateStep/>
            </form>
        );
    }
}
