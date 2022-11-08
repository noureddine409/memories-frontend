import { IonCard, IonCardContent, IonCardHeader, IonFooter, IonIcon, IonImg, IonText } from "@ionic/react";
import '../theme/style.css'
import { bookmarkOutline, chatbubbleOutline, ellipsisHorizontal, heartCircleOutline, personCircleOutline, shareSocial } from "ionicons/icons";


const Memory:React.FC = () => {
    return (
        <IonCard className="ion-card">
                <IonCardHeader className="ion-card-header">
                    <span className="dot">
                        <IonIcon icon={personCircleOutline} size="large" className="ion-icon1" ></IonIcon>
                    </span>
                    <b className="b">&nbsp;&nbsp;noureddine</b>
                    <IonIcon icon={ellipsisHorizontal} size="large" className="ion-icon2" ></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-card-content">
                <IonImg src="https://docs-demo.ionic.io/assets/madison.jpg"></IonImg>
                </IonCardContent>
                <IonFooter >
                    <IonIcon icon={heartCircleOutline} size="large" className="ion-card-footer" ></IonIcon>
                    <IonIcon icon={chatbubbleOutline} size="large" className="ion-card-footer" ></IonIcon>
                    <IonIcon icon={shareSocial} size="large" className="ion-card-footer" ></IonIcon>
                    <IonIcon icon={bookmarkOutline} size="large" className="ion-card-footer ion-card-footer-right" ></IonIcon>
                </IonFooter>

                <div className="memory-body">
                    <div className="likes">
                        <IonText> Liked By <b>hamidIdifi</b> and <b>others</b> <br/></IonText>
                    </div>
                    <span className="feeling">
                        <IonText><b>noureddine</b> Feeling happy</IonText>
                    </span>
                    <span className="activity">
                        <IonText>  is <b>drinking</b></IonText>
                    </span>
                    
                    <p className="body">
                        Breastfeeding is good for babies and moms. Infants that are breastfed get antibodies from their mothers against common illnesses. Breastfed babies have less chance of being obese as an adult. Breastfeeding a baby lets the infant-mother pair bond in a very unique way. Mother’s who breastfeed lower their chances of developing breast cancer. Usually, mothers who breastfeed lose their pregnancy weight more quickly and easily. The benefits of breastfeeding are numerous.
                    </p>
                    
                
                <div className="memory-time">
                    <p>1 day ago .</p>
                </div>
                </div>

            </IonCard>
    );
};

export default Memory;