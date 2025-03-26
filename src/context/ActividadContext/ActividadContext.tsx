import Reac, {createContext, useState, useRef} from 'react'
import {IonModal, IonContent} from '@ionic/react';
import { ActModel } from '../../models';
import {ActividadContextType} from './ActividadContext.type';
import { FormActividades } from '../../components/Actividades';

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
    const modalRef=useRef<HTMLIonModalElement>(null);

    const [totalAct, setTotalAct] = useState(8);
    const [totalCompActi, setTotalCmpActi] = useState(5);
    const [actividades, seActividades] = useState<ActModel[]>([]);
    const [completActi, setComletActi] = useState<ActModel[]>([]);

    const abrirFormActi=()=>modalRef.current?.present();
    const cerrarFormActi=()=>modalRef.current?.dismiss()

    const crearActividad=()=>{};
    const checkCompleto=()=>{};

    const valueContext:ActividadContextType.Context = {
        totalAct,
        totalCompActi,
        actividades: [],
        completActi: [],
        abrirFormActi,
        crearActividad: () => {},
        checkCompleto: () => {},

    }

    return(
        <ActividadContext.Provider value={valueContext}>
            {children}

            <IonModal ref={modalRef} trigger='open-modal' initialBreakpoint={0.25} breakpoints={[0,0.5]}>
                <IonContent className='ion-padding'>
                    <FormActividades/>
                </IonContent>
            </IonModal>
        </ActividadContext.Provider>
    )
}