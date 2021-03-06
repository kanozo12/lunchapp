const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

//일렉트론 환경설정
const props = {
    width: 400,
    height: 300,
    resizeable: true,
    webPreferences: {
        nodeIntegration: true,
        nativeWindowOpen: true
    },
    autoHideMenuBar: true
}

let win = null;
app.on("ready", () => {
    win = new BrowserWindow(props);
    // win.setMenu(null);
    win.loadFile("index.html");
    win.webContents.openDevTools();
});

ipcMain.on("loadData", (e, arg) => {
    request('http://www.naver.com', (err, res, body) => {
        let $ = cheerio.load(body);
        let list = $(".ah_roll_area > .ah_l > li > a > .ah_k");

        let word = [];
        [].forEach.call(list, x => {
            word.push($(x).text());
        });
        
        e.returnValue = word;
    });
});