'use strict';
const Config = require('electron-config');

module.exports = new Config({
	defaults: {
    dockBadge: false,
		zoomFactor: 1,
		lastWindowState: {
			width: 1064,
			height: 800
		},
		alwaysOnTop: false
	}
});
