const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('axios', {
  openAI: (sentence) => ipcRenderer.invoke('axios.openAI',sentence),
  
  // we can also expose variables, not just functions
})