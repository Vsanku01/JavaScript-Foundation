(function (sentence) {
  let sentenceList = sentence.toLowerCase().split(' ');
  for (let i = 0; i < sentenceList.length; i++) {
    sentenceList[i] =
      sentenceList[i][0].toUpperCase() + sentenceList[i].slice(1);
  }
  console.log(sentenceList.join(' '));
})('hi i hope all are doing well');
