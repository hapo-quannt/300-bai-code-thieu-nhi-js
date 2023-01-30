const isEmpty = obj => Object.entries(obj).length === 0;
//--------------
const isEmpty2 = obj => JSON.stringify(obj) === '{}';
//--------------
const isEmpty3 = obj => !Object.keys(obj).some(key => obj.hasOwnProperty(key));