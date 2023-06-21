import { useEffect, useState } from "react";


export const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if(!response.ok) {
        throw new Error("Данные не удалось загрузить")
      }
      return response.json()
    })
    .then((json) => {
      setData(json)
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  const mapData = data.map((item) => {
    if (item.completed) {
      return <li>{item.title}</li>
    }
    return false
  })

  return (
    <div className="App">
      <ul>
         {mapData}
      </ul>
    </div>
  );
}


