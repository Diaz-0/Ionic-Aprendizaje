import {IonHeader,IonAvatar,IonProgressBar,IonText,IonIcon} from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons';
import {useUser, useActividad} from '../../hooks';


import './Header.scss'


export function Header() {
    const {avatar} = useUser();
    const {abrirFormActi}=useActividad();
  return (
    <IonHeader className='actividad-header'>
        <div className='actividad-header__top'>
            <IonAvatar>
                <img src={avatar}/>
            </IonAvatar>
            <IonIcon icon={addCircleOutline} onClick={abrirFormActi}/>
        </div>
        <div className='progreso'>
            <IonText color="dark" className='progreso__nombre'>
                Progreso
                </IonText>
                <div className='progreso__info'>
                    <IonText color="dark" >Actividades</IonText>
                    <IonText color="dark" >5/10</IonText>
                </div>
                <IonProgressBar className='progreso__bar'/>
        </div>
    </IonHeader>
  )
}
