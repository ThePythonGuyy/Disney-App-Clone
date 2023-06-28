import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import db from './firebase'
import { addDoc, collection } from 'firebase/firestore'

const AddDoc = () => {
    const [data, setData] = useState({})

    const AddData = () => {
      if(!data) {
        return null
      }
      let num = 0
      let max = Object.keys(data).length;
      const colRef = collection(db, "movies");
      Object.values(data).map(dt => {
       console.log(dt);
       num ++;
       if(num > max){
        console.log('heyy returning')
        return null
       }
        addDoc(colRef, {
          backgroundImg: dt.backgroundImg,
          cardImg: dt.cardImg,
          description: dt.description,
          subTitle: dt.subTitle,
          title: dt.title,
          titleImg: dt.titleImg,
          type: dt.type
        })
        .then(() => {
          console.log('successful upload')
        });
      });
   
    }

    useEffect(() => {
      console.log('updating........')
        axios
            .get('http://localhost:4000/movies')
            .then(res => {
                setData(res.data)
                
            })
            .catch(err => {
                console.log(err.message)
            });
            
            // AddData()
          
    },[]);

    useEffect(() => {
      console.log('calling AddData', data);
      AddData()
    },[data])
  return (
    <div >
      
    </div>
  )
}

export default AddDoc
