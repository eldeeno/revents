import React, { Fragment, Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    return (
      <Fragment>
        <EventListItem/>
        <EventListItem/>
        <EventListItem/>
      </Fragment>
    )
  }
}

export default EventList;