import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from '../events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import BigCalendar from 'react-big-calendar'
import moment from 'moment';

import * as dates from '../utils/dates'
const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let Basic = (props) => (
  <Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
    getNow={() => new Date()}
    max={dates.add(dates.endOf(new Date(), 'day'), -1, 'hours')}
  />
)

export default Basic