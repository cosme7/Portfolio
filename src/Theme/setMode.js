const setMode = mode => {
    
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };