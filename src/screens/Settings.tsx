import { IonPage, IonContent} from "@ionic/react";
import {Avatar, Info, MenuOptions} from '../components/profile';



export function Settings() {


  return (
    <IonPage>
      <IonContent>
        <Avatar/>
        <Info/>
        <MenuOptions/>
      </IonContent>
    </IonPage>
  )
}
