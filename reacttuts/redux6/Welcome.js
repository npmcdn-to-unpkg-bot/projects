define(function(require){
	var React = require('react');
	var connect = require('react-redux').connect;
	function Welcome(props){
		return (
			<h1>{props.msg}</h1>
		)
	}
	function mapStateToProps(state){
		return{
			msg: state.initialPageState.msg
		}
	}
	return connect(mapStateToProps)(Welcome);
});