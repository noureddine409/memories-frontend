import { IonContent } from "@ionic/react";
import Header from "./Header"
import Memory from "./Memory";

const Home:React.FC = () => {
    return (
        <IonContent>
                <Header/>
                <Memory/>
                <Memory/>
                <Memory/>
            
        </IonContent>
       
    );
};

export default Home;