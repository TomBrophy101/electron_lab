//
//  index.js
//  
//
//  Created by Tom Brophy on 27/03/2026.
//
const { app, BrowserWindow } = require('electron');
function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
