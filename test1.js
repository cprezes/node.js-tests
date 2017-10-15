getClothing(false);
function getClothing(isCold) {
    let param;
    if (isCold) {
       param = 'Grab a jacket!';
    } else {
       param = 'It’s a shorts kind of day.';
    }
     console.log(param);
  }