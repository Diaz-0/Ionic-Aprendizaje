import {IonGrid,IonRow,IonCol,IonText} from '@ionic/react';
import {useActividad} from '../../../hooks';

import "./info.scss";

export function Info() {
const {totalAct,totalCompActi} = useActividad();
  return (
    <div className='info-container'>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color="dark">{totalAct}</IonText>
                    <IonText color="dark">Actividad</IonText>
                </IonCol>
                <IonCol>
                    <IonText color="dark">{totalCompActi}</IonText>
                    <IonText color="dark">Realizadas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}