import React, { useContext, useState } from 'react';
import tarotContext from '../context/tarotContext';
import '../style/mainPage.css';

function Answer() {
  const { dataAPI, src } = useContext(tarotContext);

  if(dataAPI.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="bodyMain">
      <div className="div-image">
      <img src={ src } alt="tentativa de foto"/> 
      </div>
      <div className="div-answer">
        <h2 className="text-answer h2answer">{ dataAPI.name }</h2>
        <p className="text-answer">{ dataAPI.meaning_up }</p>
        <p className="text-answer">{ dataAPI.meaning_rev }</p>
        <p className="text-answer">{ dataAPI.desc }</p>
      </div>
  </div>
  );
}

export default Answer;