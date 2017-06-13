function myMax(arr) {
  var myMax = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > myMax) {
      myMax = arr[i];
    }
  }
  return myMax
}

function vowel_count(word){
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] == 'a' || word[i] == 'A' || word[i] == 'e' || word[i] == 'E' || word[i] == 'i' || word[i] == 'I' || word[i] == 'o' || word[i] == 'O' || word[i] == 'u' || word[i] == 'U') {
      count++;
    }
  }
  return count;
}

function reverse(word) {
  var reverse_word = '';
  for (var i = word.length-1; i >= 0; i--) {
    reverse_word += word[i];
  }
  return reverse_word;
}