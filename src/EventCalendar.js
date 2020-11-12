import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class EventCalendar extends React.Component{
    render(){
        let arrayOfEvents = this.props.events.map(evt=> {
            return{
                ...evt,title: evt.name
            }
        })
        return (
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events = {
                  arrayOfEvents
              }
            />
          )
    }
}


export default EventCalendar