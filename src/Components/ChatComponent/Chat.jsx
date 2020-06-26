import React from "react";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="chat-Box-container">
          <h3>Need Help?</h3>
          <div>
            <li>Hello</li>
            <li>I am here</li>
            <li>What are you doing</li>
            <li>That is great</li>
            <li>Lets have a trip</li>
            <li>Ladakh</li>
            <li>Hello</li>
            <li>I am here</li>
            <li>What are you doing</li>
            <li>That is great</li>
            <li>Lets have a trip</li>
            <li>Ladakh</li>
            <li>Hello</li>
            <li>I am here</li>
            <li>What are you doing</li>
            <li>That is great</li>
            <li>Lets have a trip</li>
            <li>Ladakh</li>
          </div>
          <form>
            <textarea
              rows="3"
              placeholder="Type here...."
              autoComplete="off"
              name="name"
            />
          </form>
        </div>
      </>
    );
  }
}

export default Chat;
