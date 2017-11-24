const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app
var i18n = new(require('../translations/i18n'));

const template = [
  {
    label: i18n.__('File'),
    submenu: [
      {
        role: 'quit',
        label: i18n.__('Quit'),
        accelerator: 'Ctrl+Q'
      }
    ]
  },
  {
    label: i18n.__('Edit'),
    submenu: [
      {
        role: 'undo', label: i18n.__('Undo')
      },
      {
        role: 'redo', label: i18n.__('Redo')
      },
      {
        type: 'separator'
      },
      {
        role: 'cut', label: i18n.__('Cut')
      },
      {
        role: 'copy', label: i18n.__('Copy')
      },
      {
        role: 'paste', label: i18n.__('Paste')
      },
      {
        role: 'pasteandmatchstyle', label: i18n.__('Pasteandmatchstyle')
      },
      {
        role: 'delete', label: i18n.__('Delete')
      },
      {
        role: 'selectall', label: i18n.__('Select all')
      }
    ]
  },
  {
    label: i18n.__('View'),
    submenu: [
      {
        label: i18n.__('Reload'),
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: i18n.__('Toggle Developer Tools'),
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom', label: i18n.__('Reset Zoom')
      },
      {
        role: 'zoomin', label: i18n.__('Zoom in')
      },
      {
        role: 'zoomout', label: i18n.__('Zoom out')
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen', label: i18n.__('Toggle fullscreen')
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      }
    ]
  })
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  )
  // Window menu.
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)