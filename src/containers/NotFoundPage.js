import React, { Component } from "react";
import { FormattedMessage } from "../utils/IntlComponents";

export default class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <FormattedMessage message="meta.notFoundTitle" />
      </div>
    );
  }

}
