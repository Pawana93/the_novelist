const electron = require('electron');
const path = require('path');
const url = require('url');


const {app, BrowserWindow, Menu, webContents} = electron;

let mainWindow;
let aboutWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden', show: false, width: 1281, height: 800, minWidth: 1281, minHeight: 800, icon: __dirname + '/assets/icons/win/icon.ico'});
    mainWindow.loadURL('file://${__dirname}/dist/index.html');   
    
    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.show();
    })

    mainWindow.on('closed', function(){
        app.quit();
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.maximize();
});