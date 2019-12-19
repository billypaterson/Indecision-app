let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
    };

const appRoot = document.getElementById("app");

const render = () => {
    const visible = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>
            {visibility ? "Hide details" : "Show details"}
        </button>
        {visibility && (
            <div>
            <p>Hi, These are some details!</p>
            </div>
        )}    
    </div>
    
    );
    
    ReactDOM.render(visible, appRoot);
    
};
    
render();