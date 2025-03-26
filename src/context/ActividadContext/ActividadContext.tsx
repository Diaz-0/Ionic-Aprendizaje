import Reac, {createContext, useState} from 'react'
import { ActModel } from '../../models';
import {ActividadContextType} from './ActividadContext.type'

export const ActividadContext = createContext<ActividadContextType.Context>({
    totalAct: 0,
    totalCompActi: 0,
    actividades: [],
    completActi: [],
    abrirFormActi: () => {},
    crearActividad: () => {},
    checkCompleto: () => {},
})

export function ActividadesProvider(props:ActividadContextType.Props){
    const {children} = props;

    const [totalAct, setTotalAct] = useState(8);
    const [totalCompActi, setTotalCmpActi] = useState(5);
    const [actividades, seActividades] = useState<ActModel[]>([]);
    const [completActi, setComletActi] = useState<ActModel[]>([]);

    const valueContext:ActividadContextType.Context = {
        totalAct,
        totalCompActi,
        actividades: [],
        completActi: [],
        abrirFormActi: () => {},
        crearActividad: () => {},
        checkCompleto: () => {},

    }

    return(
        <ActividadContext.Provider value={valueContext}>
            {children}
        </ActividadContext.Provider>
    )
}