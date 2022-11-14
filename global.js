//Global object

//console.log(global);

setTimeout(()=> {
  console.log('in the timeout');
}, 30000);

const int = setInterval(() => {
  console.log ('in the interval')
}, 1000);