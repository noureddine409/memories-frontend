import { IonContent, IonInput, IonItem } from "@ionic/react";
import "../theme/input.css"


const Input :React.FC<{placeholder: string, type: any}> = (placeholder) => {
    return (
            <IonItem className="ion-margin-bottom">
                <IonInput placeholder={placeholder.placeholder} type={placeholder.type} ></IonInput>
            </IonItem>
    );

};


export default Input;