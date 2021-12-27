function Home({ name, history, location }) {
  console.log(location);
  return (
    <div>
      <h3>{name} Component</h3>
      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={() => history.goForward()}>Go Forward</button>
      <button onClick={() => history.push("/about")}>
        About Page using Push
      </button>
      <button onClick={() => history.replace("/about")}>
        About Page using Replace
      </button>
      <p>Query Params: {location.search}</p>
    </div>
  );
}

export default Home;
