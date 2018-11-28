var React = require("react");

var CountDown = React.createClass({
    getInitialState: function() {
        this.lastRefreshedTime = new Date().getTime();
        return {
            countDownSeconds: this.props.countDownSeconds ? this.props.countDownSeconds : 0
        }
    },
    componentWillMount: function() {
        this.MesasageInterval  = setInterval(function() {
            this.updateRefreshTimer();
        }.bind(this), 1000)

    },
    render: function() {
        var countdown = this.state.countDownSeconds;
        var days = Math.floor(countdown / 86400);
        var hours =  Math.floor((countdown % 86400) / 3600);
        var minutes =  Math.floor(((countdown % 86400) % 3600) / 60);
        var seconds =  Math.floor(((countdown % 86400) % 3600) % 60);
        var displayTime =  days.toString() + " days " + hours.toString() + " hours " +  + minutes.toString() + " minutes "  + seconds.toString() + " seconds";

        return <div className="count-down">{displayTime}</div>;
    },
    updateRefreshTimer: function() {
        var time = parseInt((new Date().getTime() - this.lastRefreshedTime) / 1000, 0);
        this.state.countDownSeconds = (this.state.countDownSeconds - time > 0) ? this.state.countDownSeconds - time : 0;
        this.lastRefreshedTime = new Date().getTime();
        this.setState({});
    }
});

module.exports = CountDown;
