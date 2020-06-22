const { app, BrowserWindow, Menu, Tray, globalShortcut } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

/**
 * Configurations
 */

const DEV_PATH = 'http://localhost:3000';
const RELEASE_PATH = `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`;
const ICON = path.join(__dirname, './public/icon.png');

let mainWindow;
let tray = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 370,
    height: 480,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: ICON,
  });

  mainWindow.loadURL(isDev ? DEV_PATH : RELEASE_PATH);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Tray
  tray = new Tray(ICON);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ]);
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu);
  tray.on('click', () => {
    mainWindow.show();
  });

  globalShortcut.register('CommandOrControl+Q', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  })
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