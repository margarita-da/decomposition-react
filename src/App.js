import "./App.css"
import NewsList from "./components/NewsList"
import Item from "./components/Item"
import Search from "./components/Search"
import Banners from "./components/Banners"
import Programs from "./components/Programs"

function App() {
  const newsArray = [
    {
      text: "Новость плохая",
      link: "#",
      img: (
        <img
          src="http://placehold.it/20x20"
          className="card-img-top"
          alt="..."
        />
      ),
      className: "list__item",
    },
    {
      text: "Новость хорошая",
      link: "#",

      img: (
        <img
          src="http://placehold.it/20x20"
          className="card-img-top"
          alt="..."
        />
      ),
      className: "list__item",
    },
  ]
  const programmsArray = [
    {
      time: "08:00",
      text: "Дисней. мультфильмы",
    },
    {
      time: "09:00",
      text: "Играй, гармонь, любимая",
    },
  ]

  return (
    <div className="App">
      <NewsList items={newsArray}>
        {(items) =>
          items.map((item, index) => <Item key={index} items={item} />)
        }
      </NewsList>
      <Search classes="search" />
      <Banners />
      <Programs items={programmsArray}>
        {(items) =>
          items.map((item, index) => <Item key={index} items={item} />)
        }
      </Programs>
    </div>
  )
}

export default App
