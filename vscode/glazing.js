nodeRequire('electron')
    .remote
    .getCurrentWindow()
    // 设置半透明效果  https://electronjs.org/docs/api/browser-window#winsetvibrancytype-macos 
    .setVibrancy('ultra-dark');