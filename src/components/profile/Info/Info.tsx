import {IonGrid,IonRow,IonCol,IonText} from '@ionic/react';

import "./info.scss";

export function Info() {
  return (
    <div className='info-container'>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText color="dark">10</IonText>
                    <IonText color="dark">Actividad</IonText>
                </IonCol>
                <IonCol>
                    <IonText color="dark">5</IonText>
                    <IonText color="dark">Realizadas</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}