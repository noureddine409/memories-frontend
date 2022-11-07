import { personCircle, home, mail, settings } from 'ionicons/icons';
import { IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

const NavBar:React.FC = () => {
    return (
        <IonTabs>
      <IonRouterOutlet>

      </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home">
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="profil">
        <IonIcon icon={personCircle} />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>

      <IonTabButton tab="contactUs">
        <IonIcon icon={mail} />
        <IonLabel>Contact Us</IonLabel>
      </IonTabButton>

      <IonTabButton tab="settings">
        <IonIcon icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>

      
    </IonTabBar>
  </IonTabs>
    );
};

export default NavBar;