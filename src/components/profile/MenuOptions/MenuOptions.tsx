import {IonContent, IonModal} from '@ionic/react'
import {imageOutline,personCircleOutline} from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {useUser} from '../../../hooks'
import {Options} from './Options';
import { useRef } from 'react';
import { CambioDatos } from '../CambioDatos';

import './MenuOptions.scss';


export function MenuOptions() {
    const modalRef = useRef<HTMLIonModalElement>(null);
    const { onChangeAvatar } = useUser();
  
    const openName = () => modalRef.current?.present();
    const closeModal = () => modalRef.current?.dismiss();
  
    const openCamera = async () => {
      const response = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
  
      if (response.webPath) {
        onChangeAvatar(response.webPath);
      }
    };
  
    return (
      <>
        <div className="menu-options-container">
          <Options
            titulo="Cambiar avatar"
            icon={imageOutline}
            onClick={openCamera}
          />
          <Options
            titulo="Cambiar nombre"
            icon={personCircleOutline}
            onClick={openName}
          />
        </div>
  
        <IonModal
          ref={modalRef}
          trigger="open-modal"
          initialBreakpoint={0.35}
          breakpoints={[0, 0.35]}
        >
          <IonContent className="ion-padding">
            <CambioDatos onClose={closeModal} />
          </IonContent>
        </IonModal>
      </>
    );
  }
  
