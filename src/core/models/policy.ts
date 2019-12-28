export enum StatementEffect {
    Allow = 'Allow',
    Deny = 'Deny'
}

export interface Statement {
    effect: StatementEffect;
    resource: string[];
    action: string[];
}

export interface Policy {
    version: string;
    statement: Statement[];
}

export enum StatementActionType {
    Create = 'Create',
    Modify = 'Modify',
    Delete = 'Delete'
}

export enum PolicyType {
    Account = 'Account',
    Users = 'Users',
    Location = 'Location',
    Properties = 'Properties'
}

export function statementActions(): string[] {
    const actions: string[] = [];
    Object.keys(PolicyType).forEach(policy => {
        Object.keys(StatementActionType).forEach(action => {
            actions.push(`${policy.toLowerCase()}:${action.toLowerCase()}`);
        });
    });
    return actions;
}
