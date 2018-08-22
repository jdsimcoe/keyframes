'use strict';
const electron = require('electron');
const config = require('./config');

const ipc = electron.ipcRenderer;

function setDockBadge() {
  // document.body.classList.toggle('dock-badge', config.get('dockBadge'));
  // var recurring = $('body.dock-badge .present .recurring-todo-item-list li:not(.is-done)').length;
  // var normal = $('body.dock-badge .present .todo-item-list li:not(.is-done)').length;
  // var total = recurring + normal;
  // document.title = "TeuxDeux (" + total + ")";
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
