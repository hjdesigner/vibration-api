'use strict';

var _playlist = require('./playlist');

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = document.querySelectorAll('button');
var textSupport = document.querySelector('p[data-js="support"]');

if ('vibrate' in navigator) {
    textSupport.innerHTML = 'You browser supports';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            button = _step.value;

            button.addEventListener('click', function (e) {
                console.log(_playlist2.default[e.target.dataset['js']]);
                navigator.vibrate(_playlist2.default[e.target.dataset['js']]);
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
} else {
    textSupport.innerHTML = 'You browser does not supports';
}