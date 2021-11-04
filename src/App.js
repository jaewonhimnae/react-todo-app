import './App.css';
import { useState } from 'react';

function App() {

  const [todoDatas, setTodoDatas] = useState([{
    id: "1",
    title: "공부하기",
    completed: true,
  },
  {
    id: "2",
    title: "청소하기",
    completed: false,
  },]);

  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodoDatas = todoDatas.filter(data => data.id !== id);
    console.log('newTodoDatas', newTodoDatas);
    setTodoDatas(newTodoDatas)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoDatas(prev =>
      [...prev, newTodo]
    )

    // 입력란에 있던 글씨 지워주기
    setValue("");
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleCompleChange = (id) => {
    let newTodoDatas = todoDatas.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoDatas(newTodoDatas);
  }

  return (
    <div className="container">
      <div className='todoBlock'>
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoDatas.map(data => (
          <div style={getStyle(data.completed)} key={data.id}>
            <p>
              <input
                type="checkbox"
                onChange={() => handleCompleChange(data.id)}
                defaultChecked={data.completed}
              />
              {" "}{data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
            </p>
          </div>
        ))}

        <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>

      </div>
    </div>
  );
}

const btnStyle = {
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default App;


