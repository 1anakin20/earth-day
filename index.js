import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue} from 'firebase/database';  


const firebaseConfig = {
    apiKey: "AIzaSyBSCJjXkCl7zH26AOle7xSO_lrJmMyl1hw",
    authDomain: "earth-day-9d912.firebaseapp.com",
    databaseURL: "https://earth-day-9d912-default-rtdb.firebaseio.com",
    projectId: "earth-day-9d912",
    storageBucket: "earth-day-9d912.appspot.com",
    messagingSenderId: "296094286428",
    appId: "1:296094286428:web:e425b2fafaef3b828c5c99",
    measurementId: "G-633FC55T5Y"

};

const app = initializeApp(firebaseConfig);

function writeGleanerData(userId, firstName, lastName, address, email, phone, groupSize, startingTime, password) {
    const db = getDatabase(app);
    const reference = ref(db, 'gleaner/' + userId); 
  
  
    set( reference, {
         firstName: firstName,
         lastName: lastName, 
         address: address, 
         email: email, 
         phone: phone, 
         groupSize: groupSize, 
         startingTime: startingTime, 
         password: password
                   
               
        });
  }
  
  writeGleanerData('1', 'jack', 'wang','123 montreal','updated111_jack@gmail.com', '5147897894', '1450', 'Nov. 7', 'xy');  


  
const db = getDatabase(app);
const distanceRef = ref(db, 'gleaner/' + 1 + '/groupSize') ;     

onValue( distanceRef, (snapshot) =>{ 
const data = snapshot.val();
console.log(data);
}
);  
