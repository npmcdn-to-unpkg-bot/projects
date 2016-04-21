var MessageView = (props) => <div>{props.message}</div>;

var RandomMessage = React.createClass({
  getInitialState: function() {
    return { message: 'Hello, Universe' };
  },
  onClick: function() {
    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
    var randomMessage = messages[Math.floor((Math.random() * 3))];

    this.setState({ message: randomMessage });
  },
  render: function() {
    return (
      <div>
        <MessageView message={ this.state.message }/>
        <p><input type="button" onClick={ this.onClick } value="Change Message"/></p>
      </div>
    );
  }
});



ReactDOM.render(
  <RandomMessage />,
  document.getElementById('container')
);


