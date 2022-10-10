import React, {useState} from 'react';


export default function Theme() {
    
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    return (
        <>
            <button onClick={() => {toggleTheme()}}>Toggle theme</button>
        </>
    );
}