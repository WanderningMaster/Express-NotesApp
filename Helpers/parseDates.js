module.exports.findAllDate = (date) =>{
    const dateRegexp = /((0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/[12]\d{3})/g;
    return date.match(dateRegexp).join(' ');
}