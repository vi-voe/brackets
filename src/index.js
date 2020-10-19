module.exports = function check(str, bracketsConfig) {
 // если нечетное количество скобок
 if(str.length%2) return false;

 //перевести строку в массив
 let strArr = str.split('');
 let result = false;

  function test(arr){
    arr.reduce( (prev, current, ind) => {
      bracketsConfig.forEach(element => {
        if(element[0] == prev && element[1] == current) {
          arr.splice(ind-1, 2);
          if(arr.length == 0) {
            result = true;
          } else {
            test(arr)
          }
        }
      });
      return prev=current
    })
  }
  test(strArr);

 return result
}