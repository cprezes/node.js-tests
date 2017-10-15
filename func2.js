let upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
  });
console.log(upperizedNames);

upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
  });
  console.log(upperizedNames);


  const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];
  
  let longNames = names.filter(function(name) {
    return name.length > 6;
  });

  console.log(longNames);