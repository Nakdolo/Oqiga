import Image from 'next/image';
import styles from './page.module.css'
 
type event = {
        "_id": string
        "location": string,
        "name": string,
        "description": string,
        "createdBy": string,
        "picture": string,
        "__v": number
}

type eventWithWrapper={
    event:event
    authStr:string
    pageChanger:React.Dispatch<React.SetStateAction<number>>;
}  

export default function Event({event,authStr,pageChanger}:eventWithWrapper) {
  return (
    <>
        <div className='main_block'>
            
            <div className='hzchto'>
                <div className='button_header'>
                    <button className='button_back' onClick={e=>pageChanger(3)}>Back</button>
                </div>
                <div className='event_block'>
                    <div className='title_header'>
                        <Image src="/event1.jpg" alt="Мое изображение" width={200} height={200} />
                        <h1 className='title'>Title of event</h1>
                    </div>
                    
                    <div className='description'>Description:{event.description}</div>
                    <div className='conteiner_organizator'>
                        <div className='organizator'>organizer:{event.createdBy}</div>
                        <div className='data'> date:</div>
                    </div>
                </div>
            </div>
            <div className='right_block'>
            </div>
        </div>
        
    </>
  );
}
