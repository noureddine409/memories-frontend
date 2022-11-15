import { IonBadge, IonButton, IonContent, IonIcon, IonImg, IonLabel, IonSkeletonText, IonText } from '@ionic/react';
import { addOutline, ellipsisHorizontalOutline, pencilOutline } from 'ionicons/icons';
import '../theme/profile.css'
import Memory from './Memory';

const Profile = () => {
    return (
        <IonContent>
            <div className="header">
                <IonImg className='background-pic' src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000' />
                
            </div>
            <div className="flex">
                <div className="border-blue" >
                    <div className="border-white">
                        <div className="img-box">
                            <IonImg src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/02/11/6375b4b9-641f-4586-b97d-5e097de47302_66b8c641.jpg?itok=ECv3iuoI&v=1613014008"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="name">
                <h4 className="full-name" >Elon Musk</h4>
            </div>
            <div className="name">
                <IonText className="bio">richest man in the world</IonText>
            </div>
            <div className="space-between">
                <div className="item">
                    <IonBadge className="badge"> 20</IonBadge>
                    <IonLabel>Memories</IonLabel>
                </div>
                <div className="item">
                <   IonBadge className="badge">200k</IonBadge>
                    <IonLabel>Followers</IonLabel>
                </div>
                <div className="item">
                    <IonBadge className="badge">75</IonBadge>
                    <IonLabel>Following</IonLabel>
                    
                </div>
            </div>
            
            <div className="list">
                <IonButton color="primary"> <IonIcon icon={addOutline}></IonIcon> Add Memory</IonButton>
                <IonButton color="light"> <IonIcon icon={pencilOutline}></IonIcon> Edit profile</IonButton>
                <IonButton color="light"><IonIcon icon={ellipsisHorizontalOutline}></IonIcon></IonButton>
            </div>
            <IonSkeletonText></IonSkeletonText>
            <Memory></Memory>
        </IonContent>
    );
};

export default Profile;