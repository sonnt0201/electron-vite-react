/// <reference types="vite/client" />

interface Window {
  ipcRenderer: {

    on: (...args: Parameters<typeof import('electron').ipcRenderer.on>) => void;
    off: (...args: Parameters<typeof import('electron').ipcRenderer.off>) => void;
    send: (...args: Parameters<typeof import('electron').ipcRenderer.send>) => void;
    invoke: (...args: Parameters<typeof import('electron').ipcRenderer.invoke>) => Promise<any>;

    // user-defined shortcut methods
     removeAllListener: () => void;
    echo: (message: string) => Promise<string>;

  }
}
