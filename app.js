import React from "react"

function app(props) {
    return (
        <div>
            <p>Challange acceptd, {props.name}!</p>
        </div>
    )
}
export default app


class app extends React.Component {
    customMethod() {
        console.log("Olá! Sou um componente de classe")
    }
render() {
    this.customMethod();
    return (
        <div>
            <h1>{Challenge.props}</h1>
        </div>
    );
}
}