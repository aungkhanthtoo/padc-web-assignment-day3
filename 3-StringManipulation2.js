
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {      
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */
      let nameArray = oldName.split(' '); 
      if(nameArray.length == 0){
        return oldName
      }else if(nameArray.length == 1){
        return formattedName(nameArray[0])
      }

      nameArray[0] = formattedName(nameArray[0])
    
      nameArray[1] = formattedName(nameArray[1])

      nameArray.splice(1, 0, " ")

        return nameArray.join('');
    }

    console.log(nameFormatter(name));

    function formattedName(name){
      let first = name.slice(0, 1).toUpperCase();
      let rest = name.slice(1).toLowerCase();
      return first.concat(rest);
    }