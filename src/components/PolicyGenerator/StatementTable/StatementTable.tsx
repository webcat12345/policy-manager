import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export class StatementTable extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            statements: []
        };
    }

    render() {
        return (
            <div>
                <p className="small text-info">You added the following statements. Click the button below to
                    Generate a policy.</p>
                <DataTable value={this.props.statements}>
                    <Column field="effect" header="Effect"/>
                    <Column field="action" header="Actions"/>
                    <Column field="resource" header="Resources"/>
                </DataTable>
            </div>
        );
    }
}
