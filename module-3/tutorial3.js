function PostButton(props) {
	return <button onClick={props.handleClick}>{props.label}</button>
}

function PostText(props) {
	return <div>{props.text}</div>
}

function Post(props) {
	return (
		<div>
			<PostButton label="x" handleClick={props.removeItem} />
			<PostText text={props.text} />
			<PostButton label="-" />
			<PostText text={props.score} />
			<PostButton label="+" />
		</div>
	)
}

function PostList(props) {
	return (
		<ol>
		{
			props.postList.map((item, index) => <Post
					key={index}
					text={item.item}
					score={item.score}
					removeItem={() => props.removeItem(index)}
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
		console.log(index);
		itemsCopy.splice(index, 1);
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
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("tutorial3")
)
