/**
 * Created by anurag on 23/5/17.
 */
import moment from 'moment';

export const parseTime = (date) => {
    return moment(date).fromNow();
};
export const parseDate = (date) => {
    const dateObj = new Date(date);
    const m = moment(dateObj);
    return m.format('MM-DD-YYYY');
};
