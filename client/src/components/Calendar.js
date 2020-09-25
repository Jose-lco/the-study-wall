import React, { useContext, useEffect, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from '../events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { PostContext } from '../contexts/PostContext';
import Modal from './Modal';
const localizer = momentLocalizer(moment)

//let allViews = Object.keys(Views).map(k => Views[k])



function Basic() {
  const { posts, toggleModal } = useContext(PostContext);
  const [study, setStudy] = useState(events)
  const handleSelect = ({ start, end }) => {
    toggleModal();
  }

  return (
    <div>
      <div>
        <Calendar
          selectable
          events={study}
          views={{
            week: true,
            day: true,}}
          step={60}
          showMultiDayTimes
          localizer={localizer}
          defaultView={Views.WEEK}
          getNow={() => new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </div>
      <div>
        <Modal />
      </div>
    </div>
  )
}
export default Basic