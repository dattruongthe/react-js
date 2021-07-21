import React from "react";

class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo author={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.formatDate(this.props.date)}
                </div>
                <div className="Comment-count">
                    {this.count(this.props)}
                </div>
            </div>
        );
    }
    formatDate(date) {
        return date+'123';
    }
    count(props){
        return props.count;
    }
}
class UserInfo extends React.Component {
    render() {
        return (
            <div className="UserInfo">
                <Avatar author={this.props.author} />
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>
            </div>
        );
    }
}
class Avatar extends React.Component {
    render() {
        return <img className="Avatar" src={this.props.author.avatarUrl} alt={this.props.author.name}/>
    }
}

export default Comment;