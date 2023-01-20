// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function nameValide(gamerTag) {
    if (gamerTag.length < 8) {
    return false;
    }
    if (!/[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(gamerTag)) {
     return false;
    }
    return true;
   }

exports.isEmpty = isEmpty;
