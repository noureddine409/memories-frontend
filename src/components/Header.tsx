import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { search } from "ionicons/icons";
import '../theme/header.css'

const Header:React.FC = () => {

  const handleOnClick = () => {
    console.log("hello world");
  }

    return (
        <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-float-start"><h4>memories App</h4></IonTitle>
          <IonButton class="ion-float-end" onClick={handleOnClick}>
            <IonIcon icon={search} ></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
    );
};

export default Header;