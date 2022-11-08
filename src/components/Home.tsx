import { IonContent } from "@ionic/react";
import Header from "./Header"
import Memory from "./Memory";

const Home:React.FC = () => {
    return (
        <IonContent>
            <Header/>
            <IonContent>
                <Memory/>
                <Memory/>
                <Memory/>
            </IonContent>
        </IonContent>
       
    );
};

export default Home;