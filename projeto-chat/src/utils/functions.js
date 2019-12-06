import moment from 'moment';

/**
 * Formata uma data para o padrão YYYY-MM-DDTHH:mm:ssZZ
 *
 * @author Bruno Eduardo
 * @param {moment.MomentInput} date
 * @returns {String} A data formatada
 */
function formatDate(date) {
  return moment(date).format('YYYY-MM-DDTHH:mm:ssZZ');
}

export { formatDate };
