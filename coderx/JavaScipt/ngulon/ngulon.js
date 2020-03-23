
 var a = [1,2,3];
 var b = [10,20];
 function sumMultiplyArray(a, b) {
     var sum = 0;
     for(var i = 0; i < a.length; i++){
          for(var j = 0; i < b.length; j++){
        for(var j = 0; j < b.length; j++) {
              // sum += (a[i] * b[j]) ;
              console.log(a[i],b[j])
          }
     }
    console.log(sum)
   // viết code ở đây.
}

 sumMultiplyArray(a,b)
/*function sumMultiplyArray(a, b) {
  // viết code ở đây.
  sum = 0;
  for(var i = 0; i < a.length; i++) {
      for(var j = 0; j < b.length; j++) {
          sum += (a[i] * b[j]);
      }
  }
  console.log(sum)
}*/