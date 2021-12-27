function About({ history }) {
  return (
    <div>
      <p>About Component</p>
      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={() => history.goForward()}>Go Forward</button>
      <button onClick={() => history.push("/posts")}>
        Posts Page using Push
      </button>
      <button onClick={() => history.replace("/posts")}>
        Posts Page using Replace
      </button>
    </div>
  );
}

export default About;
