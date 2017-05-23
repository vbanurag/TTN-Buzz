/**
 * Created by anurag on 23/5/17.
 */
import moment from 'moment';

export const parseTime = (date) => {
    return moment(date).fromNow();
}
