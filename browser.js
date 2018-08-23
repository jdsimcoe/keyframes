'use strict';
const electron = require('electron');
const config = require('./config');

const ipc = electron.ipcRenderer;

function setDockBadge() {
  document.body.classList.toggle('dock-badge', config.get('dockBadge'));
  var count = document.getElementsByClassName('unread')["0"].dataset.unreadCount;
  document.title = "Keyframes (" + count + ")";
}

ipc.on('toggle-dock-badge', () => {
	config.set('dockBadge', !config.get('dockBadge'));
	setDockBadge();
});


document.addEventListener('DOMContentLoaded', () => {
	// activate Dock Badge if it was set before quitting
	setDockBadge();
});

document.addEventListener('keyup', event => {
	setDockBadge();
});
