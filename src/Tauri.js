import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

// invoke = window.__TAURI__.invoke;


function Tauri() {

const [tauri, setTauri] = useState();

    useEffect(() => {
        invoke('my_custom_command').then(setTauri);
      }, []);

    // console.log(tauri);

    return (

        tauri


    )
}
export default Tauri