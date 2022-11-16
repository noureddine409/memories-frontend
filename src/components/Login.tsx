import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import logo from "../assets/attachment_123347290.jpg"
import '../theme/login.css'
import Input from "./Input";

const Login:React.FC = () => {
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
                    <h1 id="h">login</h1>
                    <img src={logo} alt="logo" />
                </div>
                <div id="form"> 
                <form  action="">
                    <Input placeholder={"username"} type={"text"}></Input>
                    <Input placeholder={"password"} type={"password"} ></Input>
                    <IonButton id="btn" expand="block" shape="round">Login</IonButton>
                </form>

                <div id="forget-password">
                    <a href="">forget password?</a>
                </div>
                <div id="ligne">
                    <span className="or">or</span>
                </div>
                <IonButton id="btn-register" expand="block" shape="round" color={"tertiary"}>Register</IonButton>

            </div>
            </IonContent>
            </>
    );
};

export default Login;