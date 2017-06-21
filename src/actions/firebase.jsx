import firebase from 'firebase'

export const FIREBASE_STARTED = 'FIREBASE_STARTED'
export const MESSAGING_STARTED = 'MESSAGING_STARTED'
export const MESSAGING_RECEIVED = 'MESSAGING_RECEIVED'
const config = {
  apiKey: "AIzaSyCF365l8zUac096MFPLUtbPE6sqH182G2Q",
  authDomain: "eurofurence-de86f.firebaseapp.com",
  databaseURL: "https://eurofurence-de86f.firebaseio.com",
  projectId: "eurofurence-de86f",
  storageBucket: "eurofurence-de86f.appspot.com",
  messagingSenderId: "1003745003618"
};

export function startFirebase () {
  return (dispatch) => {
    const app = firebase.initializeApp(config);
    dispatch({type: FIREBASE_STARTED, app})

    return Promise.resolve(app)
  }
}

export function startMessaging (){
  return (dispatch) =>  {
    const messaging = firebase.messaging();

    messaging.requestPermission()
      .then(() => {
        messaging.onMessage(function(payload) {
          dispatch({type: MESSAGING_RECEIVED, payload})
        })
        dispatch({type: MESSAGING_STARTED, messaging})
        dispatch(getMessagingToken(messaging))
      })
      .catch(() => console.warn("No messaging allowed!"))

  }
}

export function getMessagingToken (messaging) {
  return dispatch =>  {
    messaging.getToken()
      .then(token => {
        if(token){
          dispatch({type: 'MESSAGING_TOKEN_RECEIVED', token})
          messaging.onMessage(function(payload) {
            dispatch({type: MESSAGING_RECEIVED, payload})
          })
        }
      })
  }
}