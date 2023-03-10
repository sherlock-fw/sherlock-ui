import React from 'react';
import { useMantineTheme } from '@mantine/core';


/*
TargetView:
A view that is used for presenting the collected data on a specific entity.
*/
export default function TargetView(){

    const theme = useMantineTheme()
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{fontSize:"22px",color:theme.colors.cyan[1],align:"center"}}>no target yet.</h1>
        </div>
    )

}