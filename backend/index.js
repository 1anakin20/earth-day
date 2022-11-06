import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push, remove} from 'firebase/database';
import {firebaseConfig} from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);


//------------------------------add gleaner---------------------------------------------//

function writeGleanerData(firstName, lastName, address, city, province, email, phone, groupSize, availability, password) {
    const db = getDatabase(app);
    // const reference = ref(db, 'gleaner/' + userId); 

    const ListRef = ref(db, 'gleaner');
    const newRef = push(ListRef);
  
  
    set( newRef, {
         firstName: firstName,
         lastName: lastName, 
         address: address, 
         city: city,
         province: province,         
         email: email, 
         phone: phone, 
         groupSize: groupSize, 
         availability: availability, 
         password: password
                  
               
        });
  }
  


//   writeGleanerData('jack', 'wang','123 montreal','montreal','quebec' ,'111_jack@gmail.com', '5147897894', '1450', 'Nov. 7', 'xy');  
  // each time call this function will generate a new duplicated record


//------------------------------add farmer---------------------------------------------//

function writeFarmerData(farmName, firstName, lastName, address, city, province, email, phone, availability, password) {
    const db = getDatabase(app);
    // const reference = ref(db, 'gleaner/' + userId); 

    const ListRef = ref(db, 'farm');
    const newRef = push(ListRef);
  
  
    set( newRef, {
         farmName: farmName,
         firstName: firstName,
         lastName: lastName, 
         address: address, 
         city: city,
         province: province,         
         email: email, 
         phone: phone, 
         availability: availability, 
         password: password
                  
               
        });
  }


//   writeFarmerData('abc farm','jack', 'wang','123 montreal','montreal','quebec' ,'111_jack@gmail.com', '5147897894', 'Nov. 7', 'xy');  
  



//------------------------------add food bank---------------------------------------------//

function writeFoodbankData(FoodbankName, firstName, lastName, address, city, province, email, phone, availability, password) {
    const db = getDatabase(app);
    // const reference = ref(db, 'gleaner/' + userId); 

    const ListRef = ref(db, 'foodbank');
    const newRef = push(ListRef);
  
  
    set( newRef, {
         FoodbankName:FoodbankName,
         firstName: firstName,
         lastName: lastName, 
         address: address, 
         city: city,
         province: province,         
         email: email, 
         phone: phone, 
         availability: availability, 
         password: password
                 
               
        });
  }
  


//  writeFoodbankData('sdf bank','jack', 'wang','123 montreal','montreal','quebec' ,'111_jack@gmail.com', '5147897894', 'Nov. 7', 'xy');  




//------------------------------get specific data when change happens---------------------------------------------//
  
const db = getDatabase(app);
const distanceRef = ref(db, 'gleaner/' + 1 + '/groupSize') ;     

onValue( distanceRef, (snapshot) =>{ 
const data = snapshot.val();
console.log(data);
}
);  




// post tabel 
// size limit
// post id,  farm id, num of gleaner need, gleaner id 

//------------------------------add post---------------------------------------------//

function addPost(postName, address) {

    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        postName: postName, 
        address: address
    });
}

// addPost('applePick', '34 montreal')


//------------------------------remove record---------------------------------------------//
// remove()