const { app, BrowserWindow, Menu, Tray, globalShortcut, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

/**
 * Configurations
 */

const DEV_PATH = 'http://localhost:3000';
const RELEASE_PATH = `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`;
const ICON = path.join(__dirname, './public/icon.png');
const TRAYICON = path.join(__dirname, './public/trayicon.png');
const SETTINGSICON = path.join(__dirname, './public/settingsicon.png');

let mainWindow;
let settingsWindow;
let addProjectWindow;
let tray;

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
    { label: 'Settings', role: 'window', icon: SETTINGSICON, click: () => {createSettingsWindow()}},
    { type: 'separator'},
    { label: 'Quit Aurora', role: 'close', click: () => {mainWindow.close(); settingsWindow.close();}}
  ]);

  tray.setToolTip('Aurora Future')
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
      mainWindow.hide();
    }
  })
}

function createSettingsWindow() {
  settingsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    backgroundColor: '#131313',
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

function createAddProjectWindow() {
  addProjectWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    backgroundColor: '#131313',
    webPreferences: {
      nodeIntegration: true,
    },
    icon: ICON,
  });

  addProjectWindow.loadURL(isDev ? DEV_PATH + '/add-project' : RELEASE_PATH);

  addProjectWindow.on('closed', () => {
    addProjectWindow = null;
  });
}

ipcMain.on('toggle-settings', () => {
  createSettingsWindow();
});

ipcMain.on('open-add-project', () => {
  if (!addProjectWindow) {
    createAddProjectWindow();
  }
});

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