import React, { useState, useEffect } from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';

export default function Contador() {
  const [countGirls, setCountGirls] = useState(0);
  const [countBoys, setCountBoys] = useState(0);
  
  const userGirl = {
    name:"Girl",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/163/163811.png", 
    imageSize:50
  };
  
  const userBoy = {
    name:"Boy",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/145/145867.png", 
    imageSize:50
  };
  
  function incrementCountGirls() {
    setCountGirls(countGirls + 1);
  }

  function decrementCountGirls() {
    setCountGirls(countGirls - 1);
  }

  function incrementCountBoys() {
    setCountBoys(countBoys + 1);
  }

  function decrementCountBoys() {
    setCountBoys(countBoys - 1);
  }

  function resetCount() {
    setCountGirls(0);
    setCountBoys(0);
  }
  
  return (
 
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
      <div className="div-test">
      <div className='total'>
      <p>Total de pessoas: {countGirls + countBoys}</p>
      </div>
        <div className='div-col'> 
          <img
            className="avatar"
            src={userGirl.imageUrl}
            alt={"Photo of " + userGirl.name}
            style={{ width: userGirl.imageSize, height: userGirl.imageSize }}
          />
          <p>{userGirl.name}</p>
          <div className='button'>
            <Button status='incremento' onClick={incrementCountGirls} />
            <Button status='dec' onClick={decrementCountGirls} />
          </div>
          <p className='texto'>Total de meninas: {countGirls}</p>
        </div>

        <div className='div-col'>
          <img
            className="avatar"
            src={userBoy.imageUrl}
            alt={"Photo of " + userBoy.name}
            style={{ width: userBoy.imageSize, height: userBoy.imageSize }}
          />
          <p>{userBoy.name}</p>
          <div className='button'>
            <Button status='incremento' onClick={incrementCountBoys} />
            <Button status='dec' onClick={decrementCountBoys} />
          </div>
          <p className='texto'> Total de meninos: {countBoys}</p>
        </div>
      </div>
      <div className='reset'>
      <Button status='reset' onClick={resetCount}/>
      </div>
      </div>
      
  );
}
