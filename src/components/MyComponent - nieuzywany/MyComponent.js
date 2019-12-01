import React from 'react'; 

// komponent klasowy, class z ES 6
 
class MyComponent extends React.Component {
state = {
    text: '',
}

handleChange = (event) => {
    this.setState({text: event.target.value.toUpperCase()});
}

    render () {
    return (
        <>
        <input 
        placeholder="your text" 
        onChange = {this.handleChange}
        // nazwę funkcji wpisuje się bez nawiasów, bo nawiasy sugerują, że się wykonuje od razu 
        value = {this.state.text}
        />
        <h1>{this.state.text}</h1>
        </>
        // jsx wymaga oplatania elementów tym <></>
        //   value = {this.state.text} podmienia wartosc w inpucie



    )
}
}

export default MyComponent;