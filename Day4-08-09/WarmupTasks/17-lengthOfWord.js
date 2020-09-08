function getLengthOfWord(word1) {
  if (word1 == null) {
    return -1;
  }
  if (typeof word1 == 'string') {
    return console.log(word1.length);
  } else {
    return -1;
  }
}

getLengthOfWord('GUVI');
getLengthOfWord('');
getLengthOfWord();
getLengthOfWord(9);
