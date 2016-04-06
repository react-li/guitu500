import React, { PropTypes } from "react";

export default class ErrorPage extends React.Component {

  static propTypes = {
    err: PropTypes.object
  }

  render() {
    const { err } = this.props;
    return (
      <div>
        <h1>啊偶！页面错误</h1>

        { process.env.NODE_ENV === "development" && err &&
          <pre align="center">
            { err.message }
          </pre>
        }

      </div>
    );
  }

}
