const setupEvents = require('../installers/setupEvents');
if(setupevents.handleSquirrelEvent()) {
  return;
}

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const Store = require('./store');

let mainWindow;

function createWindow() {

  let { width, heigth } = store.get('windowBounds');

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function() {
    mainWindow = null;
  })

  mainWindow.on('resize', () => {
    let { width, height } = mainWindow.getBounds();
    store.set('windowBounds', { width, height });
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function() {
  if(mainWindow === null) {
    createWindow();
  }
})