import { IonText, IonAvatar } from '@ionic/react'
/* import {avatar} from '../../../assets' */
import './Avatar.scss'
import {useUser} from "../../../hooks"


/* const nombre:string="Jesus Diaz"; */

export function Avatar() {
  const {avatar,username}=useUser();
  
  return (
    <div className='container-avatar'>
        <IonAvatar>
            <img src={avatar} />
        </IonAvatar>
        <IonText color='dark'>{username}</IonText>
    </div>
  )
}
