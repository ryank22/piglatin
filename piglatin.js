piglatin(['apple', 'pear']) => ['apple-ay', 'pear-ay'],
piglatin(['you', 'can', 'win']) => ['you-ay', 'can-ay', 'win-ay'],

function piglatin(list1, list2) {

  const resultList = [];
  for (let i = 0; i < list1.length; i++) {

    resultList.push(list1[i], list[2]);
  }
  return resultList;
}
console.log(piglatin(['apple', 'pear']));