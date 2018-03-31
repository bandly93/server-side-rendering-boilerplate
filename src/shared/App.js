import React, {Component,Fragment} from 'react';

class App extends Component{
	render(){
		return<Fragment>
			<h1> Hello {this.props.data} </h1>
		</Fragment>

	}
}

export default App;
