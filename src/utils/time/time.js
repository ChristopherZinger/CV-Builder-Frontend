import moment from 'moment';

export const formatDate = date => {
    return moment(new Date(date))
        .format("YYYY MMMM")
}