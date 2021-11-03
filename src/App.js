import './App.css';

function App() {

  let todoDatas = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ]

  const handleClick = (id) => {
   let newTodoDatas = todoDatas.filter(data => data.id !== id);
    console.log('newTodoDatas',newTodoDatas);
  }

  return (
    <div className="container">
      <div className='todoBlock'>
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoDatas.map(data => (
          <div style={listStyle} key={data.id}>
            <p>
              <input type="checkbox" defaultChecked={data.completed} />
              {" "}{data.title}
              <button style={btnStyle} onClick={() =>handleClick(data.id)}>x</button>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

const listStyle = {
  padding: "10px",
  borderBottom: "1px #ccc dotted",
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


