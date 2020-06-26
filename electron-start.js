const { app, BrowserWindow, Menu, Tray, globalShortcut, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { settings } = require('cluster');

/**
 * Configurations
 */

const DEV_PATH = 'http://localhost:3000';
const RELEASE_PATH = `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`;
const ICON = path.join(__dirname, './public/icon.png');
const TRAYICON = path.join(__dirname, './public/trayicon.png');

let mainWindow;
let settingsWindow;

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
  tray = new Tray(TRAYICON);
  
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Settings'},
    { type: 'separator'},
    { label: 'Quit Aurora', role: 'close', click: () => {mainWindow.close(); settingsWindow = null}}
  ]);

  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu);
  tray.on('click', () => {
    mainWindow.show();
  });

  globalShortcut.register('CommandOrControl+Q', () => {
    if ((settingsWindow != null) && (settingsWindow.isVisible())) {
      settingsWindow.close();
    } else if ((!mainWindow.isVisible()) || (mainWindow.isMinimized())) {      
      mainWindow.show();
    } else {
      mainWindow.minimize();
    }
  })
}

function createSettingsWindow() {
  settingsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: ICON,
  });

  settingsWindow.loadURL(isDev ? DEV_PATH + '/settings' : RELEASE_PATH);

  settingsWindow.on('closed', () => {
    settingsWindow = null;
  });

}

ipcMain.on('toggle-settings', (event, arg) => {
  createSettingsWindow();
})

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