/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

/*
A questão trata a ideia de verificar se é um Array ou um Object e a partir disso, 
verificar se o Array tem elementos ou se o Object tem chaves.
*/
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
