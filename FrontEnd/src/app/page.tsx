'use client'
import styles from './page.module.css'
import Footer from './components/footer/page'
import React, { useState } from 'react';
import About from './components/aboutPage/page';
import MainPage from './components/mainPage/page';
import SignUp from './components/signUp/page';
import Login from './components/logIn/page';
import Event from './components/event/page';
import Header from './components/header/page';
import CreateObjectForm from './components/eventCreator/page';

type event = {
  "_id": string
  "location": string,
  "name": string,
  "description": string,
  "createdBy": string,
  "picture": string,
  "__v": number
}

export default function Home() {
  const [page, changePage] = useState<number>(0)
  const [nick, changeNick] = useState<string>("")
  const [authStr,setAuthStr] = useState<string>("")
  const [event,setEvent] = useState<event>( {
    "_id": "6589941632ae9f88e6970cdd",
    "location": "Some Location",
    "name": "Some Event",
    "description": "POOL PARTY DETKA",
    "createdBy": "nakdolo",
    "picture": "1231fas",
    "__v": 0
  });

  return (
  < >
    {page== 0? <About pageChanger={changePage} />: <></> }
    {page== 1? <SignUp pageChanger={changePage} changeNick={changeNick} setAuthStr={setAuthStr}/>: <></> }
    {page== 2? <Login pageChanger={changePage} changeNick={changeNick} setAuthStr={setAuthStr}/>: <></> }
    {page== 3? <MainPage pageChanger={changePage} nick={nick} authStr = {authStr} setEvent={setEvent}/>: <></> }
    {page== 4? (<>
                  <Header nick={nick} changer={changePage}/>
                      <Event authStr={authStr} pageChanger={changePage} event={event}/>
                </>): <></> }
    {page==5? (<>
                  <Header nick={nick} changer={changePage}/>
                      <CreateObjectForm pageChanger={changePage} authStr={authStr}/> 
                   </>) : <></>}
    <Footer/> 
  </>
  )
}
