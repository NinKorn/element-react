import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

(function (doc, win) {

    var docE1 = doc.documentElement,

        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

        recalc = function () {

            var clientWidth = docE1.clientWidth;

            if (!clientWidth) return;

            docE1.style.fontSize = 100 * (clientWidth / 750) + 'px';

        };
    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
