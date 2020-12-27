// Debouncing in Javascript
let counter = 0;
const getData = (data) => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++, data.target.value);
}

const debounce = function (fn, d) {
  let timer;
  return function (ev) {
      //console.log(ev)
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args,ev);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);