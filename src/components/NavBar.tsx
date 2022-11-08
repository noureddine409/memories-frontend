import { personCircle, home, mail, settings, addCircleOutline } from 'ionicons/icons';
import { IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Route } from 'react-router';
import Home from './Home';
import Profile from './Profile';
import ContactUs from './ContactUs';
import Settings from './Settings';
import PostSave from './PostSave';


const NavBar:React.FC = () => {
    return (
        <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/settings" component={Settings} />
        <Route path="/post" component={PostSave} />
      </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href='/home'>
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="profil" href='/profile'>
        <IonIcon icon={personCircle} />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>

      <IonTabButton tab="addPost" href='/post'>
        <IonIcon icon={addCircleOutline} size="large" />
      </IonTabButton>

      <IonTabButton tab="contactUs" href='contactUs'>
        <IonIcon icon={mail} />
        <IonLabel>Contact Us</IonLabel>
      </IonTabButton>

      <IonTabButton tab="settings" href='/settings'>
        <IonIcon icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>

      
    </IonTabBar>
  </IonTabs>
    );
};

export default NavBar;