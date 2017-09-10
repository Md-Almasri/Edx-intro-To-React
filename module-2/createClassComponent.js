class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {foo : 0, bar : 10}
	}
	componentDidMount() {
		//A- updating the State
		//this.setState({foo : this.state.foo + 1})
		//B- update the State and console log the new value
		// this.setState({foo : this.state.foo + 1}, () => {console.log(this.state)})
		// console.log(this.state) // will not work properly
		//C- update the state many times depending on previous value
		this.setState((prevState, props) => {return {foo : prevState.foo + 1}})
		// this.setState((prevState, props) => {return {foo : prevState.foo + 1}})
		//D- update the state below many times will not work 
		// this.setState({foo : this.state.foo + 1})
		// this.setState({foo : this.state.foo + 1})
	}	
	render() {
		return (
			<div>
				<h3>Welcome {this.props.message}</h3>
				<p>foo: {this.state.foo} bar: {this.state.bar}</p>
			</div>
		)
	}
}

ReactDOM.render(
	<Welcome message="module 2"/>,
	document.getElementById("createClassComponent")
)
