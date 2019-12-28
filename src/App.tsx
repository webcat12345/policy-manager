import React from 'react';
import './App.scss';

import { PolicyGenerator } from './components/PolicyGenerator/PolicyGenerator';

const App: React.FC = () => {

    return (
        <div className="App">
            <div className="container">
                <PolicyGenerator />
            </div>
        </div>
    );
};

export default App;
