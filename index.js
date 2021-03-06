/**
 * Expose `invisibles`
 */

module.exports = invisibles
module.exports['default'] = invisibles

/**
 * Convert text into visible spaces
 *
 * @param {String} str
 * @return {String} str
 * @api private
 */

function invisibles(str) {
  if (!str) return ''
  return str
    .replace(/ /g, '·')
    .replace(/\r/g, '¬')
    .replace(/\t/g, '‣')
    .replace(/\n/g, '¬')
}
