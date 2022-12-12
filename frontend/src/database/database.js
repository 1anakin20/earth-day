import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, update, onValue, push, remove, get } from 'firebase/database';
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//===========================================================================================
// 1. add records to database
//===========================================================================================

//------------------------------add gleaner---------------------------------------------//

function writeGleanerData(firstName, lastName, address, city, province, email, phone, groupSize, availability, password) {
    // const reference = ref(db, 'gleaner/' + userId);

    const ListRef = ref(db, 'gleaner');
    const newRef = push(ListRef);
    set(newRef, {
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

// writeGleanerData('jack', 'wang','123 montreal','montreal','quebec' ,'111_jack@gmail.com', '5147897894', '1450', 'Nov. 7', 'xy');


//------------------------------add farmer---------------------------------------------//

export function writeFarmerData(user, setUser) {
    const db = getDatabase(app);
    // const reference = ref(db, 'gleaner/' + userId); 

    const ListRef = ref(db, 'users');
    const newRef = push(ListRef);

    setUser(prev => ({ ...prev,
        id: newRef.key
    }))

    set(newRef, {
        id: newRef.key,
        farmName: user.farmName,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        city: user.city,
        province: user.province,
        email: user.email,
        phone: user.phone,
        availability: user.availability,
        password: user.password,
        capacity: user.capacity,
        foodBank: user.foodBank,
        role: 'Farmer'
    });
}

//   writeFarmerData('abc farm','jack', 'wang','123 montreal','montreal','quebec' ,'111_jack@gmail.com', '5147897894', 'Nov. 7', 'xy');  


//------------------------------add food bank---------------------------------------------//

function writeFoodbankData(FoodbankName, firstName, lastName, address, city, province, email, phone, availability, password) {
    const db = getDatabase(app);
    // const reference = ref(db, 'gleaner/' + userId); 

    const ListRef = ref(db, 'foodbank');
    const newRef = push(ListRef);

    set(newRef, {
        FoodbankName: FoodbankName,
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


//===========================================================================================
// 2. create posts (gleaning post, inventory post, storage post)
//===========================================================================================

//-----------------------create gleaning post---------------------------------------------//

export function createGleaningPost(formValues, urgent) {
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        id: newPostRef.key,
        farm: formValues.farm,
        cropType: formValues.cropType,
        description: formValues.description,
        date: formValues.date,
        address: formValues.address,
        foodBank: formValues.foodBank,
        capacity: formValues.capacity,
        remaining: formValues.capacity,
        urgent: urgent,
        gleanerList: [],
    });
}

// createGleaningPost('1', 'apple, good', '')


//===========================================================================================
// 3. add gleaners(food banks, farms) to related post lists
//===========================================================================================

//----------------------add gleaners to post---------------------------------------------//

function addGleanerToPost(gleanerId, postId) {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/' + postId + '/gleanerList');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        gleanerId: gleanerId,
    });
}


// addGleanerToPost('777', '-NGEMuppk2GPCDYD22je')


// to create inventory post from farms(which can be seen by food bank), and add food banks to the list
// to create storage post from food bank(which can be seen by farms) , and add farms to the list


// select key, value----------/   -NGA-78iLQRYeoNUSeeH
// get gleaner id

const dbRef = ref(getDatabase());

// get(child(dbRef, 'gleaner/-NGA-78iLQRYeoNUSeeH')).then((snapshot) => {
// get(child(dbRef, 'gleaner/')).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });


//------------------------------remove record---------------------------------------------//

function deleteDate(gleanId) {
    remove(ref(db, "gleaner/" + gleanId))
        .then(() => {
            alert("data removed successfully");
        })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}

// ------------------------------ get posts ---------------------------------------------//

export async function getAllPosts() {
    let data = await get(child(dbRef, 'posts/'));
    return data.val();
}

export async function getPostById(postId) {
    let data = await get(child(dbRef, 'posts/' + postId));
    return data.val();
}


//===========================================================================================
// 4. User information
//===========================================================================================

//-----------------retreive user information---------------------------------------------//

export async function getUser(username, pass) {
    let data = await get(child(dbRef, 'users/'));
    let users = data.val();
    for (const userKey in users) {
        if (users[userKey].email === username) {
            if (users[userKey].password === pass) {
                return users[userKey];
            }
        }
    }
    return null;
}

//-----------------update farmer information---------------------------------------------//

export function updateFarmerData(user) {
    const userData = {
        id: user.id,
        farmName: user.farmName,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        city: user.city,
        province: user.province,
        email: user.email,
        phone: user.phone,
        availability: user.availability,
        password: user.password,
        capacity: user.capacity,
        foodBank: user.foodBank,
        role: 'Farmer'
    };
    
    const updates = {};
    updates['users/' + user.id] = userData;
    return update(dbRef, updates);
}

