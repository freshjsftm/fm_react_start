
class Heading extends React.Component{
  render(){
    console.log(this)
    const {titleForHeading, children} = this.props;
    return React.createElement(
      'h1', 
      {title:titleForHeading}, 
      ...children);
  }
}

const reactElement = React.createElement(
  Heading,
  {titleForHeading:'title123'},
  'Elon Musk', 
  '!!!'
);
const reactElement2 = React.createElement(Heading,{titleForHeading:'qwerty'});

ReactDOM.render(reactElement, document.getElementById('root'));