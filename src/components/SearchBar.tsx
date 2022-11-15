import { IonAvatar, IonBackButton, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonSearchbar, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBackCircle, arrowBackOutline } from "ionicons/icons";
import { start } from "repl";
import "../theme/SearchBar.css"

const SearchBar: React.FC = () => {
    return (
        <IonContent>
            <IonHeader translucent>
            <IonToolbar>
                <div className="container">
                    <div className="child-left">
                        <IonButton color="light" slot="start">
                            <IonBackButton defaultHref="/home"/>
                        </IonButton>
                    </div>
                    <div  className="child-right">
                        <IonSearchbar></IonSearchbar>
                    </div>
                </div>
                </IonToolbar>
            </IonHeader>

            
                <IonList>
                    <IonItem>
                        <IonAvatar slot="start" >
                            <img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/02/11/6375b4b9-641f-4586-b97d-5e097de47302_66b8c641.jpg?itok=ECv3iuoI&v=1613014008"/>
                        </IonAvatar>
                        <IonLabel>Elon Musk</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start" >
                            <img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/02/11/6375b4b9-641f-4586-b97d-5e097de47302_66b8c641.jpg?itok=ECv3iuoI&v=1613014008"/>
                        </IonAvatar>
                        <IonLabel>Elon Musk</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot="start" >
                            <img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/02/11/6375b4b9-641f-4586-b97d-5e097de47302_66b8c641.jpg?itok=ECv3iuoI&v=1613014008"/>
                        </IonAvatar>
                        <IonLabel>Elon Musk</IonLabel>
                    </IonItem>
                </IonList>
        </IonContent>


    );
};

export default SearchBar;