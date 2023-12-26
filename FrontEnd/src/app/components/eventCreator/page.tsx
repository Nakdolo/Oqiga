import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

type FormProps = {
  pageChanger: React.Dispatch<React.SetStateAction<number>>;
  authStr: string; // Assuming authStr is passed as a prop
};

export default function CreateObjectForm({ pageChanger, authStr }: FormProps) {
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newObject = {
        "accessToken" :authStr,
        "location":location,
        "name":name,
        "description" :description,
        "picture" :picture,
      };
      // Assuming 'link' is the endpoint to send this object
      await axios.post('https://ca12-37-99-87-186.ngrok-free.app/api/sent-events', newObject);
      // Perform any other actions after creating the object
      pageChanger(3); // Change page or perform any other action upon successful submission
    } catch (error) {
      console.log("There's an issue in creating the object:", error);
    }
  };

  return (
    <>
      <div className="createFormContainer">
        <Head>
          <title>Create Object</title>
        </Head>
        <main className="createFormMain">
          <h1>Create Object</h1>
          <form className="createForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Location"
              className="createInput"
              value={location}
              onChange={handleLocationChange}
            />
            <input
              type="text"
              placeholder="Name"
              className="createInput"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Description"
              className="createInput"
              value={description}
              onChange={handleDescriptionChange}
            />
            <input
              type="text"
              placeholder="Picture URL"
              className="createInput"
              value={picture}
              onChange={handlePictureChange}
            />
            <button type="submit" className="createButton">
              Create Object
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
