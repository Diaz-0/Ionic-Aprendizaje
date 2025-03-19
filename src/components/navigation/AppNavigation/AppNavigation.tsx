import React from 'react'
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs,IonTabBar, IonTabButton, IonIcon, IonRouterOutlet} from '@ionic/react';
import { Route, Redirect} from 'react-router-dom';
import { Home, Settings } from '../../../screens';
import {settingsOutline, homeOutline} from 'ionicons/icons';

import './AppNavigation.scss';

export function AppNavigation() {
  return (
    <IonReactRouter>
        <IonTabs className='navigation'>
            <IonRouterOutlet>
                <Route exact path='/home' component={Home} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/'>
                <Redirect to='/' />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot='bottom' className='tab-bar'>
                <IonTabButton tab='home' href='/home'>
                    <IonIcon icon={homeOutline} />
                </IonTabButton>
                <IonTabButton tab='settings' href='/settings'>
                    <IonIcon icon={settingsOutline} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  );
}
