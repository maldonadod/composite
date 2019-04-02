import React, { Component } from 'react';
import Container from './Components/Container';
import Leave from './Components/Leave';

function Child(name) {
  return {
    name,
    render(output, { index }) {
      return output.leave({
        name,
        key: index
      })
    }
  }
}
function Contain(label, ...children) {
  return {
    render(output) {
      return output.container({
        label,
        key: label,
        children: children.map((leave, index) => leave.render(output, { index }))
      })
    }
  }
}

const tree = Contain(
  "X1",
  Child("Nietzche"),
  Child("Platon"),
  Contain(
    "X2",
    Child("Nietzche"),
    Child("Platon"),
    Contain(
      "X2",
      Child("Nietzche"),
      Child("Platon")
    )
  ),
  Contain(
    "X1",
    Child("Nietzche"),
    Child("Platon"),
    Contain(
      "X2",
      Child("Nietzche"),
      Child("Platon"),
      Contain(
        "X2",
        Child("Nietzche"),
        Child("Platon")
      )
    )
  )
)

const ReactOutput = {
  container(props) {
    return <Container {...props} />
  },
  leave(props) {
    return <Leave {...props} />
  },
}

class App extends Component {
  render() {
    return (
      <div className="App">

        {
          tree.render(ReactOutput)
        }

        {/* <Container label="philosopher">
          <Leave name="Nietzche" />
          <Leave name="Platon" />
          <Container label="philosopher">
            <Leave name="Nietzche" />
            <Leave name="Platon" />
          </Container>
        </Container> */}
      </div>
    );
  }
}

export default App;
