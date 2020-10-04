import moment from 'moment';

export const fromatDate = date => {
    return moment(new Date(date))
        .format("YYYY MMMM")
}