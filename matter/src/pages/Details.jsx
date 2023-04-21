import React from 'react'
import Detail from './Detail';
import { useEffect,useState } from 'react';

const Details = () => {

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/details")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setDetail(data);
      });
  }, []);

  return (
    <div>
       {detail && <Detail texts={detail} title="All Blogs" />}
    </div>
  )
}

export default Details