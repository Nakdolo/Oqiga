'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../header/page';
import Footer from '../footer/page';
import Events from '../events/page';

type ChildProps = {
    pageChanger: React.Dispatch<React.SetStateAction<number>>;
    nick: string;
    authStr: string;
    setEvent:React.Dispatch<React.SetStateAction<event>>;
  };
  type event = {
    "_id": string
    "location": string,
    "name": string,
    "description": string,
    "createdBy": string,
    "picture": string,
    "__v": number
}

export default function MainPage({ pageChanger , nick, authStr, setEvent}: ChildProps) {
    return (
    <>
        <Header nick={nick} changer={pageChanger}/>
          <Events accessToken={authStr} pageChanger={pageChanger} setEvent={setEvent}/>
        <Footer/>
    </>    
    );
  }