import List from "./components/List";
import Search from "./components/Search";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  function Example() {
    return (
      <input
        onFocus={(e) => {
          console.log("Focused on input");
        }}
        placeholder="onFocus is triggered when you click this input."
      />
    );
  }
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
      <Example />
    </div>
  );
}

export default App;
