const PostButton = (props) => {
	let style = {
		width: "25px",
		height: "25px"
	}
	return <button style={style} onClick={props.handleClick}>{props.label}</button>
}

const PostText = (props) => {
	let style = {
		border: "solid grey 1px",
		width: props.width
	}
	return <div style={style}>{props.text}</div>
}

const Post = (props) => {
	let style = {
		display:"flex"
	}
	return (
		<div style={style}>
			<PostButton label="x" handleClick={props.removeItem} />
			<PostText width={200} text={props.text} />
			<PostButton label="-" handleClick={props.decrementScore} />
			<PostText width="25" text={props.score} />
			<PostButton label="+" handleClick={props.incrementScore} />
		</div>
	)
}

const PostList = (props) => {
	return (
		<ol>
		{
			props.postList.map((item, index) => <Post
					key={index}
					text={item.item}
					score={item.score}
					removeItem={() => props.removeItem(index)}
					incrementScore={() => props.updateScore(index, 1)}
					decrementScore={() => props.updateScore(index, -1)}
				/>
			)
		}
		</ol>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value:"", items: []};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value})
	}
	addItem() {
		let itemsCopy = this.state.items.slice();
		let newValue = this.state.value;
		itemsCopy.push({"item": newValue, "score": 0});
		this.setState({value: "", items: itemsCopy})
	}
	// By using arrow function, we do not need to bind this for removeItem
	removeItem = (index) => {
		let itemsCopy = this.state.items.slice();
		itemsCopy.splice(index, 1);
		this.setState({items: itemsCopy})
	}
	updateScore = (index, value) => {
		let itemsCopy = this.state.items.slice();
		itemsCopy[index].score += value;
		this.setState({items: itemsCopy})
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.addItem.bind(this)}>submit</button>
				<PostList 
					postList={this.state.items}
					removeItem={this.removeItem}
					updateScore={this.updateScore}
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("tutorial3")
)
