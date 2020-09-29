import React, { useContext, useEffect } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';

import { PostContext } from '../contexts/PostContext';
import Modal from './Modal';
const localizer = momentLocalizer(moment)


function Basic() {
  const { posts, addPosts, toggleModal, addTime } = useContext(PostContext);
  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      let posts = res.data.map(result => {
          return {id: result.id, title: result.category, start: new Date(result.start), end: new Date(result.end), desc: result.body, link: result.link}
      })
      addPosts(posts)
  })
  })
  const handleSelect = ({ start, end }) => {
    toggleModal();
    addTime(start, end)
  }

  return (
    <div>
      <div>
        <Calendar
          selectable
          events={posts}
          views={{
            week: true,
            day: true,}}
          step={60}
          showMultiDayTimes
          localizer={localizer}
          defaultView={Views.WEEK}
          getNow={() => new Date()}
          onSelectEvent={event => alert(event.desc)}
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