import { initializeApp, } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getStorage,uploadBytes, ref, getDownloadURL} from "firebase/storage"
import {doc,setDoc,getFirestore, query, collection, getDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDJYsheH4rEF3VH5yy8OD5WiTilvgWMfx8",
  authDomain: "react-project-5cd4a.firebaseapp.com",
  projectId: "react-project-5cd4a",
  storageBucket: "react-project-5cd4a.appspot.com",
  messagingSenderId: "678624702914",
  appId: "1:678624702914:web:74842ce7f475f652cb265b"
};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore(app)
const storage =getStorage(app)
async function register(formData) {
  const {name,email,password,age,images}=formData
  console.log(images)
  try{
    const createUserWithEmailAndPasswordRes=await
    createUserWithEmailAndPassword(auth,email,password)
    const uid =createUserWithEmailAndPasswordRes.user.uid;
    let url =""
    if(images[0]){
      const imageName=images[0].name
      const folderName="userPic"
      const imgRef=await ref(storage,folderName + imageName)
      console.log(imgRef)
      const uplaodBytesRes=await uploadBytes(imgRef,images[0])
      console.log(uplaodBytesRes)
      url =await getDownloadURL(uplaodBytesRes.ref)
      console.log(url)
    }
    const res=await setDoc(doc(db,"users",uid),{
      name:name,
      Email:email,
      uid:uid,
      age,
      profileImage:url
    });
    console.log(res)
    return{
      status:"sucess",
    };
  } catch(error){
    console.log(error.message)
    return{
      status:"error",
      error:error.message,
    }
  }
}
async function login(formData) {
  const {email,password}=formData
  try{
    const createUserWithEmailAndPasswordRes=await
    signInWithEmailAndPassword(auth,email,password)
    return{
      status:"sucess",
    };
  } catch(error){
    console.log(error.message)
    return{
      status:"error",
      error:error.message,
    }
  }
}
async function getAllUserData(){
  try{
    const q=query(collection(db,"users"));
    const querySnapshot=await getDoc(q)
    let arr=[]
    querySnapshot.forEach((doc)=>{
      console.log(doc.id,"=>",doc.data())
    })
    console.log(arr)
    return{
      status:"sucess",
      data:arr,
    }
  }
    catch(error){
      console.log(error.message)
      return{
        status:"error",
        error:error.message,
      }
    }
  }


export {register,login,auth,getAllUserData}