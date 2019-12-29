import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
