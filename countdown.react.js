var React = require("react");

var CountDown = React.createClass({
    getInitialState: function() {
        return {
            countDownSeconds: this.props.countDownSeconds ? this.props.countDownSeconds : 0
        }
    },
    render: function() {
        var countdown = this.state.countDownSeconds;
        var days = Math.floor(countdown / 86400);
        var hours =  Math.floor((countdown % 86400) / 3600);
        var minutes =  Math.floor(((countdown % 86400) % 3600) / 60);
        var seconds =  Math.floor(((countdown % 86400) % 3600) % 60);
        var displayTime =  days.toString() + " days " + hours.toString() + " hours " +  + minutes.toString() + " minutes "  + seconds.toString() + " seconds";

        return <div className="count-down">{displayTime}</div>;
    }
});

module.exports = CountDown;