import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList(props){
    console.log(props)
   const { items } = props;

    return (
    <ul className={classes.list}>
        {items.map(event => <EventItem id={event.id} title={event.title} location={event.location} date={event.date} image={event.image}/>)}
    </ul>
    )

}

export default EventList;