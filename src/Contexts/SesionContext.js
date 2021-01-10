import {createContext, useMemo, useContext, useState} from 'react';

const SesionContext = createContext();

export const SesionProvider = (props) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const sesion = useMemo( () => {
        return ({
            token,
            user,
            setToken,
            setUser
        })
    }, [token, user]);

    return <SesionContext.Provider value={sesion} {...props} />

}

export const useSesion = () => {
    const context = useContext(SesionContext);
    if(!context){
        throw new Error("Error en el contexto de la sesion");
    }

    return context;
}