import Link from "next/link";
import classes from './event-item.module.css'
import Button from "../ui/button";
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArroArrowRightIcon from "../icons/arrow-right-icon";


function EvetnItem(props){
    const {id, title, location, date, image} = props;

 const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
     day: 'numeric',
     month: 'long',
     year: 'numeric',
  });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

  return(
       <li key={id} className={classes.item}>
         <img src={'/' +image} alt={title}/>
            <div className={classes.content}>
            <div className={classes.summary}>
                    <h2> {title}</h2>
                  <div className={classes.date}>
                       <DateIcon/>
                        <time> {humanReadableDate} </time>
                    </div>
                  <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                    </div>
                    <div className={classes.actions}>
                  <Button link={exploreLink}>
                      <span>
                      Explore Event
                      </span>
                      <span className={classes.icon}><ArroArrowRightIcon/></span>
                  </Button>
                    </div>
                </div>
            </li>
        )
    }

export default EvetnItem;