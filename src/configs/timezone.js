const moment = require('moment-timezone');
moment.tz.setDefault(process.env.TIMEZONE_TZ);
const { format } = require('date-fns');
require('dotenv').config()
const now = moment();

class timezone{
    get_date(){
        const date = now.year()+'-'+(now.month() + 1).toString().padStart(2, '0')+'-'+now.date()
        return date
    }
    
    get_hour(){
        const hour = now.hour()+':'+now.minutes()+':'+now.seconds()
        return hour
    }
    
    formatDateInContacts(contacts) {
        return contacts.map((contact) => {
          return {
            ...contact,
            date: format(new Date(contact.date), 'dd/MM/yyyy'), // format response from database
          };
        });
    }
}

module.exports = timezone;