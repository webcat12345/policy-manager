import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Statement } from '../../../core/models/policy';

export class StatementTable extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            statements: []
        };

        this.actionTemplate = this.actionTemplate.bind(this);
        this.resourceTemplate = this.resourceTemplate.bind(this);
    }

    actionTemplate(rowData: Statement, column: any) {
        return rowData.action.join(',');
    }

    resourceTemplate(rowData: Statement, column: any) {
        return rowData.resource.join(',');
    }

    render() {
        return (
            <div>
                <p className="small text-info">You added the following statements. Click the button below to
                    Generate a policy.</p>
                <DataTable value={this.props.statements}>
                    <Column field="effect" header="Effect"/>
                    <Column field="action" header="Actions" body={this.actionTemplate}/>
                    <Column field="resource" header="Resources" body={this.resourceTemplate}/>
                </DataTable>
            </div>
        );
    }
}
