import React from 'react';
import ReactDOM from 'react-dom';
import { FocusStyleManager } from '@blueprintjs/core';

FocusStyleManager.onlyShowFocusOnTabs();

const container = document.getElementById('app-container');

ReactDOM.render((<div>Hello blueprint</div>), container);


