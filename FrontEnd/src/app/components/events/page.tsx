'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';


type event = {
  "_id": string
  "location": string,
  "name": string,
  "description": string,
  "createdBy": string,
  "picture": string,
  "__v": number
}

type ChildProps = {
  pageChanger: React.Dispatch<React.SetStateAction<number>>;
  accessToken: string;
  setEvent: React.Dispatch<React.SetStateAction<event>>;
};

export default function Events({accessToken,pageChanger,setEvent}:ChildProps) {

  const [events , setEvents] = useState([]) 
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.post('https://ca12-37-99-87-186.ngrok-free.app/api/get-events',{"accessToken":accessToken});
        const fetchedEvents: [] = response.data.events;
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchData()
    const timer = setInterval(() => {
      // Timer logic
    }, 1000);
  
    return () => clearInterval(timer); // Cleanup
  }, [accessToken]);

  return (
  <div className='eventsContainer'>
    <div className='events'>
      <div className='searchBarWrapper'>
        <input type='text' className="searchBar" placeholder='Search...' />
      </div>
      <div className='eventsWrapper'>
        {events?.map( (event:{_id:string,name:string,description:string}) => (
            <div key={event._id} className='event' onClick={e=>{
              setEvent({
                "_id": event._id,
                "location": "",
                "name": event.name,
                "description": event.description,
                "createdBy": "",
                "picture": "",
                "__v": 0
              })
              pageChanger(4)
            }}>
                <Image src="/logoOqiga1.png" alt="balflaldasdla" width={50} height={50}/>
                <div>
                  <h3>{event.name}</h3>
                  <p> Description : {event.description}</p>
                </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}
