import {IonIcon} from '@ionic/react';
import { chevronForwardCircleOutline } from 'ionicons/icons';
import { OptionType } from './Option.type';

import './Options.scss';

export function Options(props:OptionType.Props) {
    const {titulo, icon, onClick} = props;
  return (
    <div className='option' onClick={onClick}>
        <div>
            <IonIcon icon={icon}/>
            <span>{titulo}</span>
        </div>
        <IonIcon icon={chevronForwardCircleOutline}/>
    </div>
  )
}
