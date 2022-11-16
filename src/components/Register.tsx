import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonRadio, IonRadioGroup, IonText, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import '../theme/register.css'
import logo from "../assets/attachment_123347290.jpg"
import Input from "./Input";

const Register:React.FC = () => {
    return (
        <>
        <IonHeader>
                <div className="ion-tool-bar">
                    <IonToolbar>
                        <IonButtons>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={arrowBack} ></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </div>
            </IonHeader>

            <IonContent className="ion-content">
                <div id="header">
                    <h1 id="h">Register</h1>
                    <img src={logo} alt="logo" />
                </div>
                <div id="form"> 
                <form  action="">
                    <Input placeholder={"First Name"} type={"text"}></Input>
                    <Input placeholder={"Last Name"} type={"text"}></Input>
                    <Input placeholder={"Email"} type={"text"}></Input>
                    <Input placeholder={"Password"} type={"password"} ></Input>
                    <Input placeholder={"Confirm Password"} type={"password"}></Input>
                    <div id="accept">
                        <input id="radio"  type="checkbox"></input><IonText id="text" > accept the <a href="https://www.kooora.com/">terms and conditions</a></IonText>
                    </div>
                    
                    
                    
                        

                    
                    <IonButton id="btn" expand="block" shape="round">Register</IonButton>
                </form>

                <div id="already">
                    <p>Already have account? <a href="">Login</a></p>
                </div>

            </div>
            </IonContent>
        </>
    );
};

export default Register;