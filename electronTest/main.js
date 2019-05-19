const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
	//Create the browser window
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		//frame: false,
		//transparent:true,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadFile('index.html')
	mainWindow.setFullScreen(true)
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
