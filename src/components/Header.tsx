import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { search } from "ionicons/icons";


const Header:React.FC = () => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-float-start">memories App</IonTitle>
          <IonButton class="ion-float-end">
            <IonIcon icon={search} ></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
    );
};

export default Header;