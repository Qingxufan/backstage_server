const re = /^[0-9]+.?[0-9]*/
function checkRate(nubmer) {
    if (!re.test(nubmer)) {
        return false
    }
    return true
}
module.exports = { checkRate }