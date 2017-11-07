import React from 'react'

export default class LinkListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>
    )
  }
}

LinkListItem.propsTypes = {
  _id: React.PropsTypes.string.isRequired,
  url: React.PropsTypes.string.isRequired,
  shortUrl: React.PropsTypes.string.isRequired,
  userId: React.PropsTypes.string.isRequired
}