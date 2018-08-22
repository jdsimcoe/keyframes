'use strict';
const Config = require('electron-config');

module.exports = new Config({
	defaults: {
    dockBadge: false,
		zoomFactor: 1,
		lastWindowState: {
			width: 1042,
			height: 768
		},
		alwaysOnTop: false
	}
});
