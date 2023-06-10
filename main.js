const {app,BrowserWindow} = require("electron")
const path=require("path")

const createWindow=()=>{
    var win=new BrowserWindow({
        height:600,
        weight:800,
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(()=>{
    createWindow();
});
