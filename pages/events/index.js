import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';


export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={ events} />
    </Fragment>
  )
}
