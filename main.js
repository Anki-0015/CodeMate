const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
    }
  });

  win.loadURL('http://localhost:3000/chatbot');
}

app.whenReady().then(createWindow);
