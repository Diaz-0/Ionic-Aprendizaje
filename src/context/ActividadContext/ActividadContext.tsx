import Reac, {createContext} from 'react'

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
