const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { app } = electron;
const { BrowserWindow } = electron;

/**
 * Configurations
 */

const DEV_PATH = 'http://localhost:3000';
const RELEASE_PATH = `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 370,
    height: 480,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, './public/icon.png'),
  });

  mainWindow.loadURL(isDev ? DEV_PATH : RELEASE_PATH);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});