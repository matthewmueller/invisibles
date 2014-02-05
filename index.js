/**
 * Expose `invisibles`
 */

module.exports = invisibles;

/**
 * Convert text into visible spaces
 *
 * @param {String} str
 * @return {String} str
 * @api private
 */

function invisibles(str) {
  return str
    .replace(/ /g, '·')
    .replace(/\r/g, '¬')
    .replace(/\t/g, '‣')
    .replace(/\n/g, '¬')
}
