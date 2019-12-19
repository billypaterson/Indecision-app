console.log("app.js is running!");

//JSX - javaScript XML
const app = {
  title: "Learning React.js",
  subtitle: "Udemy Course",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
    
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderOptions();
  }

};

const removeAll = () => {
  app.options = [];
  renderOptions();
};


const makeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const renderOptions = () => {
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <button disabled={app.options.length === 0} onClick={makeDecision}>What should i do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
    {
        app.options.map((opt) => {
            return <li key={opt}>{opt}</li>;
        })
    }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>

);

ReactDOM.render(template, appRoot);

};

renderOptions();