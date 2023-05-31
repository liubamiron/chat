import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../index";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import Message from "./Message";

const Chat = () => {
  //   const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  //   const [messagesData, setMessagesData] = useState([]);
  const [messages, setMessages] = useState([]);

  //   We create a useEffect hook that will run anytime changes are made in the chatroom,
  //like sending or deleting a message.
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      console.log("m", messages);
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  const sendMessage = async () => {
    console.log("l", value);

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue("");
  };

  const getMessages = async () => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      setMessages([]);

      querySnapshot.docs.map((doc) =>
        setMessages((prevState) => {
          return [...prevState, doc.data()];
        })
      );
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div
      className="col-4 container"
      style={{ marginTop: "20px", justifyContent: "center" }}
    >
      <div
        style={{
          height: "60vh",
          border: "1px solid gray",
          padding: "15px",
          backgroundColor: "lightblue",
          overflowY: "auto",
        }}
      >
        {messages?.map((message) => (
          <Message key={message.uid} message={message} />
        ))}
      </div>
      <br />
      <textarea
        className="form-control"
        rows="2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <br />
      <div className="text-end">
        <button type="submit" className="btn btn-success" onClick={sendMessage}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default Chat;
