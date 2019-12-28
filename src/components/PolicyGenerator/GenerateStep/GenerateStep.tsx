import React, { Component } from 'react';
import { Button } from 'primereact/button';

export class GenerateStep extends Component {
    render() {
        return (
            <section className="mb-5">
                <h4 className="mb-3">Step 3: Generate Policy</h4>
                <p className="small text-info">Tip: A policy is a document (written in the Access Policy Language) that
                    acts as a container for one or more statements.</p>
                <Button type="submit" className="ml-5 mt-4" label="Generate Policy"/>
                <Button type="button" className="ml-5 mt-4 p-button-danger" label="Start Over"/>
            </section>
        );
    }
}
