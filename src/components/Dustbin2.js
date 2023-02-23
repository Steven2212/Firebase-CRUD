import React from "react";
import { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { collection,addDoc, getDocs, updateDoc,doc, deleteDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FirestoreGetdata = () => {
  const usersCollectionref = collection(database, "test"); //test is our collection name.
  const [users, setUsers] = useState([]);

  const [newName, setnewName] = useState()
  const [newAge, setnewAge] = useState(0)
  const [updatedName, setupdatedName] = useState()
  const [updatedAge, setupdatedAge] = useState(0)

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  


//To create or post data into firestore db.

const createUser = async ()=>{
    await addDoc(usersCollectionref, {name:newName,age:newAge})
}

//To fetch or get data from firestore db.

  const getData = async () => {
    const data = await getDocs(usersCollectionref); //We can get the data of all the documents.
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //We are fetching the specific data needed from the document got from above.
  };

  //To update data from firestore db.
  const updateUser = async (id,age,name)=>{
    setShow(true)
    const userDoc = doc(database,"test",id);
    // const newFields = {age:age+1};
    // await updateDoc(userDoc,newFields)
    await updateDoc(userDoc,{

      name:"vadapab",
      age: 78

      // name:"harish",
      // age:71
    })
    console.log(updatedAge)
    console.log(updatedName)
  }

  //To delete user data from firestore db.
  const deleteUser = async (id)=>{
    const userDoc = doc(database,"test",id);
    await deleteDoc(userDoc)
  }
  useEffect(() => {
    getData();
  }, );


  

  return (
    <>

<div>Post or create user data.</div>
<input type="text" placeholder="Name"  onChange={(e)=>setnewName(e.target.value)} />
    <input type="number" placeholder="Age" onChange={(e)=>setnewAge(e.target.value)} />
    <button  onClick={createUser}>Create User</button>
  


      <div>Fetch Data</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button className="modal-trigger" href="#modal1" onClick={()=>updateUser(user.id,user.age, user.name)}  >Update User</button>
            <button onClick={()=>deleteUser(user.id)} >Delete User</button>
          </div>
        );
      })}

    



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
    <input type="text" placeholder="Name" onChange={(e)=>setupdatedName(e.target.value)} />
    <input type="number" placeholder="Age" onChange={(e)=>setupdatedAge(e.target.value)} />


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      
    

    

    </>
  );
};

export default FirestoreGetdata;
