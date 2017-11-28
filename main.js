const electron = require('electron');
const path = require('path');
const url = require('url');


const {app, BrowserWindow, Menu, webContents} = electron;

let mainWindow;
let aboutWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden', show: false, width: 1281, height: 800, minWidth: 1281, minHeight: 800, icon: __dirname + '/assets/icons/win/icon.ico'});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));   
    
    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.show();
    })

    mainWindow.on('closed', function(){
        app.quit();
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    require('./menu/mainmenu');

    mainWindow.maximize();
});