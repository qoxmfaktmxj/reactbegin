import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let post = '강남우동맛집';
  return (
    <div className="App">

        <div className="black-nav">
            <h4 style={{color:"yellowgreen", fontSize:"20px"}}>회원요청목록</h4>
        </div>
        <div className="list">            
            <h4>글제목</h4>
            <p>7월 12일 발행</p>
        </div>

    </div>
  );
}

export default App;
