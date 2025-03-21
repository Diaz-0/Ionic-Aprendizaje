import {IonPage, IonContent} from '@ionic/react'
import { FormActividades, ItemActividades, ListaActividades } from '../components/Actividades';
import {Header} from '../components/Header'


export function Home () {

  return (
    <IonPage>
          <Header/>
          <IonContent>
            <ListaActividades/>
            <FormActividades/>
            <ItemActividades/>
          </IonContent>
        </IonPage>
  );
};


