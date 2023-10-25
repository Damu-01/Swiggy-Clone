import { createContext } from "react";

const ColorContext = createContext(
    {
        darkMode: {
            backgroundColor: 'black',
            color: 'white'
        },
        lightMode: {
            backgroundColor: 'white',
            color: 'black'
        }
    }
)

export default ColorContext;