import React, {useState} from 'react';
import './App.css';

function App() {
    
    let[글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']);
    let[따봉,따봉변경] = useState(0);

    function 제목바꾸기(){
        var newArray = [...글제목];
        newArray[0] = '여자코트추천';
        newArray[1] = '부산 국밥 맛집';
        글제목변경(newArray);
    }
  return (
    <div className="App">

        <div className="black-nav">
            <h4 style={{color:"yellowgreen", fontSize:"20px"}}>회원요청목록</h4>
        </div>
        <button onClick={제목바꾸기}>버튼</button>
        <div className="list">            
            <h3>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
            <p>7월 12일 발행</p>
        </div>
        <div className="list">
            <h3>{글제목[1]}</h3>
            <p>7월 13일 발행</p>
        </div>
        
        <Modal/>
        <Modal/>
        <Modal/>


    </div>
  );
}

function Modal(){
    return(
        <>
        <div>
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
            <div></div>
        </>
    )
}

export default App;
