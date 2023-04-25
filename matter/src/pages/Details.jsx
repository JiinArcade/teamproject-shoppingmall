import React from 'react'
import Detail from './Detail';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Details = (id) => {



  return (
    <div>
     {<Detail id={id}/>}
    </div>
  )
}

export default Details