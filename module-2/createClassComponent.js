class Welcome extends React.Component {
	render() {
		return <h3>Welcome {this.props.message}</h3>
	}
}

ReactDOM.render(
	<Welcome message="module 2"/>,
	document.getElementById("root")
)
