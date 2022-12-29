function translate(str){
    let sentance = str.split(' ');
    let result = [];  
  
    for(let word of sentance)
    {
      if((/[aeiou]/).test(word[0])){
        result.push(word + "way");
      }
      else{
        result.push(word.substring(1) + word[0]+ "ay");
      }
    }
    return result.join(" ");
  }
  
  console.log(translate('pig'));
    console.log(translate('eat'));
    console.log(translate('eat banana'));
    console.log(translate('album with auther'));
    
  
    
      var tButton = document.getElementById('tButton');
     tButton.onclick = function () {
       var inputText = document.getElementById('inputText').value;
       var outputText = document.getElementById('outputText').value = translate(inputText);
     };