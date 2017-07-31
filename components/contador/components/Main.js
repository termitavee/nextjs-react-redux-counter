import React from 'react';

class Counter extends React.Component {

    componentDidMount() {
        const {init, start, variation} = this.props;

	console.log('component/index this.props '+this.props)
        init(start, variation)
    }

    render() {
        const { value, increment, decrement } = this.props;
        return (
            <div>
                <h1>Cálculo</h1>
                <h1>{value}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
};

export default Counter;