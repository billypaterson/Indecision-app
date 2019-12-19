class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibilty() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibilty}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>Hi, These are some details!</p>
                    </div>
                )}    
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
//     };

// const appRoot = document.getElementById("app");

// const render = () => {
    
    
//     );
    
//     ReactDOM.render(visible, appRoot);
    
// };
    
// render();