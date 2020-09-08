var capitaliseString = function (sentence) {
  let sentenceList = sentence.toLowerCase().split(' ');
  for (let i = 0; i < sentenceList.length; i++) {
    sentenceList[i] =
      sentenceList[i][0].toUpperCase() + sentenceList[i].slice(1);
  }
  return sentenceList.join(' ');
};

console.log(capitaliseString('hi i hope all are doing well'));
