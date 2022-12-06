///variables;
//colors
const colors = document.getElementById('colors');

const red = document.getElementById('pick1');
const blue = document.getElementById('pick2');
const yellow = document.getElementById('pick3');
const grey = document.getElementById('pick4');
const orange = document.getElementById('pick5');

//btn
oneBtn = document.getElementById('roundOneBtn');
twoBtn = document.getElementById('roundTwoBtn');
threeBtn = document.getElementById('roundThreeBtn');
fourBtn = document.getElementById('roundFourBtn');
fiveBtn = document.getElementById('roundFiveBtn');
sixBtn = document.getElementById('roundSixBtn');
sevenBtn = document.getElementById('roundSevenBtn');
eightBtn = document.getElementById('roundEightBtn');
nineBtn = document.getElementById('roundNineBtn');
tenBtn = document.getElementById('roundTenBtn');

///places
//round One
const roundOnePlaceOne = document.getElementById('roundOne/placeOne');
const roundOnePlaceTwo = document.getElementById('roundOne/placeTwo');
const roundOnePlaceThree = document.getElementById('roundOne/placeThree');
const roundOnePlaceFour = document.getElementById('roundOne/placeFour');
//round Two
const roundTwoPlaceOne = document.getElementById('roundTwo/placeOne');
const roundTwoPlaceTwo = document.getElementById('roundTwo/placeTwo');
const roundTwoPlaceThree = document.getElementById('roundTwo/placeThree');
const roundTwoPlaceFour = document.getElementById('roundTwo/placeFour');
//round Three
const roundThreePlaceOne = document.getElementById('roundThree/placeOne');
const roundThreePlaceTwo = document.getElementById('roundThree/placeTwo');
const roundThreePlaceThree = document.getElementById('roundThree/placeThree');
const roundThreePlaceFour = document.getElementById('roundThree/placeFour');
//round Four
const roundFourPlaceOne = document.getElementById('roundFour/placeOne');
const roundFourPlaceTwo = document.getElementById('roundFour/placeTwo');
const roundFourPlaceThree = document.getElementById('roundFour/placeThree');
const roundFourPlaceFour = document.getElementById('roundFour/placeFour');
//round Five
const roundFivePlaceOne = document.getElementById('roundFive/placeOne');
const roundFivePlaceTwo = document.getElementById('roundFive/placeTwo');
const roundFivePlaceThree = document.getElementById('roundFive/placeThree');
const roundFivePlaceFour = document.getElementById('roundFive/placeFour');
//round Six
const roundSixPlaceOne = document.getElementById('roundSix/placeOne');
const roundSixPlaceTwo = document.getElementById('roundSix/placeTwo');
const roundSixPlaceThree = document.getElementById('roundSix/placeThree');
const roundSixPlaceFour = document.getElementById('roundSix/placeFour');
//round Seven
const roundSevenPlaceOne = document.getElementById('roundSeven/placeOne');
const roundSevenPlaceTwo = document.getElementById('roundSeven/placeTwo');
const roundSevenPlaceThree = document.getElementById('roundSeven/placeThree');
const roundSevenPlaceFour = document.getElementById('roundSeven/placeFour');
//round Eight
const roundEightPlaceOne = document.getElementById('roundEight/placeOne');
const roundEightPlaceTwo = document.getElementById('roundEight/placeTwo');
const roundEightPlaceThree = document.getElementById('roundEight/placeThree');
const roundEightPlaceFour = document.getElementById('roundEight/placeFour');
//round Nine
const roundNinePlaceOne = document.getElementById('roundNine/placeOne');
const roundNinePlaceTwo = document.getElementById('roundNine/placeTwo');
const roundNinePlaceThree = document.getElementById('roundNine/placeThree');
const roundNinePlaceFour = document.getElementById('roundNine/placeFour');
//round ten
const roundTenPlaceOne = document.getElementById('roundTen/placeOne');
const roundTenPlaceTwo = document.getElementById('roundTen/placeTwo');
const roundTenPlaceThree = document.getElementById('roundTen/placeThree');
const roundTenPlaceFour = document.getElementById('roundTen/placeFour');

//code  ////want to make automatic
const theCode = ['red', 'blue', 'yellow', 'grey'];

//guess code
let guessOne = ['', '', '', ''];
let guessTwo = ['', '', '', ''];
let guessThree = ['', '', '', ''];
let guessFour = ['', '', '', ''];
let guessFive = ['', '', '', ''];
let guessSix = ['', '', '', ''];
let guessSeven = ['', '', '', ''];
let guessEight = ['', '', '', ''];
let guessNine = ['', '', '', ''];
let guessTen = ['', '', '', ''];



///functions
//round one
///round one place one
roundOnePlaceOne.onclick = () => {
  roundOnePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceOne.style = 'background-color: red';
    guessOne[0] = 'red';
  };
  blue.onclick = () => {
    roundOnePlaceOne.style = 'background-color: blue';
    guessOne[0] = 'blue';
  };
  yellow.onclick = () => {
    roundOnePlaceOne.style = 'background-color: yellow';
    guessOne[0] = 'yellow';
  };
  grey.onclick = () => {
    roundOnePlaceOne.style = 'background-color: grey';
    guessOne[0] = 'grey';
  };
  orange.onclick = () => {
    roundOnePlaceOne.style = 'background-color: orange';
    guessOne[0] = 'orange';
  };
};
//round one place two
roundOnePlaceTwo.onclick = () => {
  roundOnePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: red';
    guessOne[1] = 'red';
  };
  blue.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: blue';
    guessOne[1] = 'blue';
  };
  yellow.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: yellow';
    guessOne[1] = 'yellow';
  };
  grey.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: grey';
    guessOne[1] = 'grey';
  };
  orange.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: orange';
    guessOne[1] = 'orange';
  };
};
//round one place three
roundOnePlaceThree.onclick = () => {
  roundOnePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceThree.style = 'background-color: red';
    guessOne[2] = 'red';
  };
  blue.onclick = () => {
    roundOnePlaceThree.style = 'background-color: blue';
    guessOne[2] = 'blue';
  };
  yellow.onclick = () => {
    roundOnePlaceThree.style = 'background-color: yellow';
    guessOne[2] = 'yellow';
  };
  grey.onclick = () => {
    roundOnePlaceThree.style = 'background-color: grey';
    guessOne[2] = 'grey';
  };
  orange.onclick = () => {
    roundOnePlaceThree.style = 'background-color: orange';
    guessOne[2] = 'orange';
  };
};
//round one place four
roundOnePlaceFour.onclick = () => {
  roundOnePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceFour.style = 'background-color: red';
    guessOne[3] = 'red';
  };
  blue.onclick = () => {
    roundOnePlaceFour.style = 'background-color: blue';
    guessOne[3] = 'blue';
  };
  yellow.onclick = () => {
    roundOnePlaceFour.style = 'background-color: yellow';
    guessOne[3] = 'yellow';
  };
  grey.onclick = () => {
    roundOnePlaceFour.style = 'background-color: grey';
    guessOne[3] = 'grey';
  };
  orange.onclick = () => {
    roundOnePlaceFour.style = 'background-color: orange';
    guessOne[3] = 'orange';
  };
};

//round two
//round two place one
roundTwoPlaceOne.onclick = () => {
  roundTwoPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTwoPlaceOne.style = 'background-color: red';
    guessTwo[0] = 'red'
  };
  blue.onclick = () => {
    roundTwoPlaceOne.style = 'background-color: blue';
    guessTwo[0] = 'blue'
  };
  yellow.onclick = () => {
    roundTwoPlaceOne.style = 'background-color: yellow';
    guessTwo[0] = 'yellow'
  };
  grey.onclick = () => {
    roundTwoPlaceOne.style = 'background-color: grey';
    guessTwo[0] = 'grey'
  };
  orange.onclick = () => {
    roundTwoPlaceOne.style = 'background-color: orange';
    guessTwo[0] = 'orange'
  };
};
//round two place two
roundTwoPlaceTwo.onclick = () => {
  roundTwoPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTwoPlaceTwo.style = 'background-color: red';
    guessTwo[1] = 'red'
  };
  blue.onclick = () => {
    roundTwoPlaceTwo.style = 'background-color: blue';
    guessTwo[1] = 'blue'
  };
  yellow.onclick = () => {
    roundTwoPlaceTwo.style = 'background-color: yellow';
    guessTwo[1] = 'yellow'
  };
  grey.onclick = () => {
    roundTwoPlaceTwo.style = 'background-color: grey';
    guessTwo[1] = 'grey'
  };
  orange.onclick = () => {
    roundTwoPlaceTwo.style = 'background-color: orange';
    guessTwo[1] = 'orange'
  };
};
//round two place three
roundTwoPlaceThree.onclick = () => {
  roundTwoPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTwoPlaceThree.style = 'background-color: red';
    guessTwo[2] = 'red'
  };
  blue.onclick = () => {
    roundTwoPlaceThree.style = 'background-color: blue';
    guessTwo[2] = 'blue'
  };
  yellow.onclick = () => {
    roundTwoPlaceThree.style = 'background-color: yellow';
    guessTwo[2] = 'yellow'
  };
  grey.onclick = () => {
    roundTwoPlaceThree.style = 'background-color: grey';
    guessTwo[2] = 'grey'
  };
  orange.onclick = () => {
    roundTwoPlaceThree.style = 'background-color: orange'
    guessTwo[2] = 'orange'
  };
};
//round two place four
roundTwoPlaceFour.onclick = () => {
  roundTwoPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTwoPlaceFour.style = 'background-color: red';
    guessTwo[3] = 'red'
  };
  blue.onclick = () => {
    roundTwoPlaceFour.style = 'background-color: blue';
    guessTwo[3] = 'blue'
  };
  yellow.onclick = () => {
    roundTwoPlaceFour.style = 'background-color: yellow';
    guessTwo[3] = 'yellow'
  };
  grey.onclick = () => {
    roundTwoPlaceFour.style = 'background-color: grey';
    guessTwo[3] = 'grey'
  };
  orange.onclick = () => {
    roundTwoPlaceFour.style = 'background-color: orange';
    guessTwo[3] = 'orange'
  };
};

//round three
//round three place one
roundThreePlaceOne.onclick = () => {
  roundThreePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundThreePlaceOne.style = 'background-color: red';
    guessThree[0] = 'red'
  };
  blue.onclick = () => {
    roundThreePlaceOne.style = 'background-color: blue';
    guessThree[0] = 'blue'
  };
  yellow.onclick = () => {
    roundThreePlaceOne.style = 'background-color: yellow';
    guessThree[0] = 'yellow'
  };
  grey.onclick = () => {
    roundThreePlaceOne.style = 'background-color: grey';
    guessThree[0] = 'grey'
  };
  orange.onclick = () => {
    roundThreePlaceOne.style = 'background-color: orange';
    guessThree[0] = 'orange'
  };
};
//round three place two
roundThreePlaceTwo.onclick = () => {
  roundThreePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundThreePlaceTwo.style = 'background-color: red';
    guessThree[1] = 'red'
  };
  blue.onclick = () => {
    roundThreePlaceTwo.style = 'background-color: blue';
    guessThree[1] = 'blue'
  };
  yellow.onclick = () => {
    roundThreePlaceTwo.style = 'background-color: yellow';
    guessThree[1] = 'yellow'
  };
  grey.onclick = () => {
    roundThreePlaceTwo.style = 'background-color: grey';
    guessThree[1] = 'grey'
  };
  orange.onclick = () => {
    roundThreePlaceTwo.style = 'background-color: orange';
    guessThree[1] = 'orange'
  };
};
//round three place three
roundThreePlaceThree.onclick = () => {
  roundThreePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundThreePlaceThree.style = 'background-color: red';
    guessThree[2] = 'red'
  };
  blue.onclick = () => {
    roundThreePlaceThree.style = 'background-color: blue';
    guessThree[2] = 'blue'
  };
  yellow.onclick = () => {
    roundThreePlaceThree.style = 'background-color: yellow';
    guessThree[2] = 'yellow'
  };
  grey.onclick = () => {
    roundThreePlaceThree.style = 'background-color: grey';
    guessThree[2] = 'grey'
  };
  orange.onclick = () => {
    roundThreePlaceThree.style = 'background-color: orange';
    guessThree[2] = 'orange'
  };
};
//round three place four
roundThreePlaceFour.onclick = () => {
  roundThreePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundThreePlaceFour.style = 'background-color: red';
    guessThree[3] = 'red'
  };
  blue.onclick = () => {
    roundThreePlaceFour.style = 'background-color: blue';
    guessThree[3] = 'blue'
  };
  yellow.onclick = () => {
    roundThreePlaceFour.style = 'background-color: yellow';
    guessThree[3] = 'yellow'
  };
  grey.onclick = () => {
    roundThreePlaceFour.style = 'background-color: grey';
    guessThree[3] = 'grey'
  };
  orange.onclick = () => {
    roundThreePlaceFour.style = 'background-color: orange';
    guessThree[3] = 'orange`'
  };
};

//round four
//round four place one
roundFourPlaceOne.onclick = () => {
  roundFourPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceOne.style = 'background-color: red';
    guessFour[0] = 'red';
  };
  blue.onclick = () => {
    roundFourPlaceOne.style = 'background-color: blue';
    guessFour[0] = 'blue';
  };
  yellow.onclick = () => {
    roundFourPlaceOne.style = 'background-color: yellow';
    guessFour[0] = 'yellow';
  };
  grey.onclick = () => {
    roundFourPlaceOne.style = 'background-color: grey';
    guessFour[0] = 'grey';
  };
  orange.onclick = () => {
    roundFourPlaceOne.style = 'background-color: orange';
    guessFour[0] = 'orange';
  };
};
//round four place two
roundFourPlaceTwo.onclick = () => {
  roundFourPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: red';
    guessFour[1] = 'red';
  };
  blue.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: blue';
    guessFour[1] = 'blue';
  };
  yellow.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: yellow';
    guessFour[1] = 'yellow';
  };
  grey.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: grey';
    guessFour[1] = 'grey';
  };
  orange.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: orange';
    guessFour[1] = 'orange';

  };
};
//round four place three
roundFourPlaceThree.onclick = () => {
  roundFourPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceThree.style = 'background-color: red';
    guessFour[0] = 'red';
  };
  blue.onclick = () => {
    roundFourPlaceThree.style = 'background-color: blue';
    guessFour[2] = 'blue';
  };
  yellow.onclick = () => {
    roundFourPlaceThree.style = 'background-color: yellow';
    guessFour[2] = 'yellow';
  };
  grey.onclick = () => {
    roundFourPlaceThree.style = 'background-color: grey';
    guessFour[2] = 'grey';
  };
  orange.onclick = () => {
    roundFourPlaceThree.style = 'background-color: orange';
    guessFour[2] = 'orange';
  };
};
//round four place four
roundFourPlaceFour.onclick = () => {
  roundFourPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceFour.style = 'background-color: red';
    guessFour[3] = 'red';
  };
  blue.onclick = () => {
    roundFourPlaceFour.style = 'background-color: blue';
    guessFour[3] = 'blue';
  };
  yellow.onclick = () => {
    roundFourPlaceFour.style = 'background-color: yellow';
    guessFour[3] = 'yellow';
  };
  grey.onclick = () => {
    roundFourPlaceFour.style = 'background-color: grey';
    guessFour[3] = 'grey';
  };
  orange.onclick = () => {
    roundFourPlaceFour.style = 'background-color: orange';
    guessFour[3] = 'orange';
  };
};

//round five
//round five place one
roundFivePlaceOne.onclick = () => {
  roundFivePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceOne.style = 'background-color: red';
    guessFive[0] = 'red';
  };
  blue.onclick = () => {
    roundFivePlaceOne.style = 'background-color: blue';
    guessFive[0] = 'grey';
  };
  yellow.onclick = () => {
    roundFivePlaceOne.style = 'background-color: yellow';
    guessFive[0] = 'yellow';
  };
  grey.onclick = () => {
    roundFivePlaceOne.style = 'background-color: grey';
    guessFive[0] = 'grey';
  };
  orange.onclick = () => {
    roundFivePlaceOne.style = 'background-color: orange';
    guessFive[0] = 'orange';
  };
};
//round five place two
roundFivePlaceTwo.onclick = () => {
  roundFivePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: red';
    guessFive[1] = 'red';
  };
  blue.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: blue';
    guessFive[1] = 'blue';
  };
  yellow.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: yellow';
    guessFive[1] = 'yellow';
  };
  grey.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: grey';
    guessFive[1] = 'grey';
  };
  orange.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: orange';
    guessFive[1] = 'orange';
  };
};
//round five place three
roundFivePlaceThree.onclick = () => {
  roundFivePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceThree.style = 'background-color: red';
    guessFive[2] = 'red';
  };
  blue.onclick = () => {
    roundFivePlaceThree.style = 'background-color: blue';
    guessFive[2] = 'blue';
  };
  yellow.onclick = () => {
    roundFivePlaceThree.style = 'background-color: yellow';
    guessFive[2] = 'yellow';
  };
  grey.onclick = () => {
    roundFivePlaceThree.style = 'background-color: grey';
    guessFive[2] = 'grey';
  };
  orange.onclick = () => {
    roundFivePlaceThree.style = 'background-color: orange';
    guessFive[2] = 'orange';
  };
};
//round five place four
roundFivePlaceFour.onclick = () => {
  roundFivePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceFour.style = 'background-color: red';
    guessFive[3] = 'red';
  };
  blue.onclick = () => {
    roundFivePlaceFour.style = 'background-color: blue';
    guessFive[3] = 'blue';
  };
  yellow.onclick = () => {
    roundFivePlaceFour.style = 'background-color: yellow';
    guessFive[3] = 'yellow';
  };
  grey.onclick = () => {
    roundFivePlaceFour.style = 'background-color: grey';
    guessFive[3] = 'grey';
  };

  orange.onclick = () => {
    roundFivePlaceFour.style = 'background-color: orange';
    guessFive[3] = 'orange';
  };
};

//round six
//round six place one
roundSixPlaceOne.onclick = () => {
  roundSixPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceOne.style = 'background-color: red';
    guessSix[0] = 'red';
  };
  blue.onclick = () => {
    roundSixPlaceOne.style = 'background-color: blue';
    guessSix[0] = 'blue';

  };
  yellow.onclick = () => {
    roundSixPlaceOne.style = 'background-color: yellow';
    guessSix[0] = 'yellow';

  };
  grey.onclick = () => {
    roundSixPlaceOne.style = 'background-color: grey';
    guessSix[0] = 'grey';

  };
  orange.onclick = () => {
    roundSixPlaceOne.style = 'background-color: orange';
    guessSix[0] = 'orange';
  };
};
//round six place two
roundSixPlaceTwo.onclick = () => {
  roundSixPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: red';
    guessSix[1] = 'red';
  };
  blue.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: blue';
    guessSix[1] = 'blue';
  };
  yellow.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: yellow';
    guessSix[1] = 'yellow';
  };
  grey.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: grey';
    guessSix[1] = 'grey';
  };
  orange.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: orange';
    guessSix[1] = 'orange';
  };
};
//round six place three
roundSixPlaceThree.onclick = () => {
  roundSixPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceThree.style = 'background-color: red';
    guessSix[2] = 'red';
  };
  blue.onclick = () => {
    roundSixPlaceThree.style = 'background-color: blue';
    guessSix[2] = 'blue';
  };
  yellow.onclick = () => {
    roundSixPlaceThree.style = 'background-color: yellow';
    guessSix[2] = 'yellow';
  };
  grey.onclick = () => {
    roundSixPlaceThree.style = 'background-color: grey';
    guessSix[2] = 'grey';
  };
  orange.onclick = () => {
    roundSixPlaceThree.style = 'background-color: orange';
    guessSix[2] = 'orange';
  };
};
//round six place four
roundSixPlaceFour.onclick = () => {
  roundSixPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceFour.style = 'background-color: red';
    guessSix[3] = 'red';
  };
  blue.onclick = () => {
    roundSixPlaceFour.style = 'background-color: blue';
    guessSix[3] = 'blue';
  };
  yellow.onclick = () => {
    roundSixPlaceFour.style = 'background-color: yellow';
    guessSix[3] = 'yellow';
  };
  grey.onclick = () => {
    roundSixPlaceFour.style = 'background-color: grey';
    guessSix[3] = 'grey';
  };
  orange.onclick = () => {
    roundSixPlaceFour.style = 'background-color: orange';
    guessSix[3] = 'orange';
  };
};

//round seven
//round seven place one
roundSevenPlaceOne.onclick = () => {
  roundSevenPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: red';
    guessSeven[0] = 'red';
  };
  blue.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: blue';
    guessSeven[0] = 'blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: yellow';
    guessSeven[0] = 'yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: grey';
    guessSeven[0] = 'grey';
  };
  orange.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: orange';
    guessSeven[0] = 'orange';
  };
};
//round seven place two
roundSevenPlaceTwo.onclick = () => {
  roundSevenPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: red';
    guessSeven[1] = 'red';
  };
  blue.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: blue';
    guessSeven[1] = 'blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: yellow';
    guessSeven[1] = 'yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: grey';
    guessSeven[1] = 'grey';
  };
  orange.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: orange';
    guessSeven[1] = 'orange';
  };
};
//round seven place three
roundSevenPlaceThree.onclick = () => {
  roundSevenPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: red';
    guessSeven[2] = 'red';
  };
  blue.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: blue';
    guessSeven[2] = 'blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: yellow';
    guessSeven[2] = 'yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: grey';
    guessSeven[2] = 'grey';
  };
  orange.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: orange';
    guessSeven[2] = 'orange';
  };
};
//round seven place four
roundSevenPlaceFour.onclick = () => {
  roundSevenPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: red';
    guessSeven[3] = 'red';
  };
  blue.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: blue';
    guessSeven[3] = 'blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: yellow';
    guessSeven[3] = 'yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: grey';
    guessSeven[3] = 'grey';
  };
  orange.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: orange';
    guessSeven[3] = 'orange';
  };
};

//round eight
//round eight place one
roundEightPlaceOne.onclick = () => {
  roundEightPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceOne.style = 'background-color: red';
    guessEight[0] = 'red';
  };
  blue.onclick = () => {
    roundEightPlaceOne.style = 'background-color: blue';
    guessEight[0] = 'blue';

  };
  yellow.onclick = () => {
    roundEightPlaceOne.style = 'background-color: yellow';
    guessEight[0] = 'yellow';

  };
  grey.onclick = () => {
    roundEightPlaceOne.style = 'background-color: grey';
    guessEight[0] = 'grey';

  };
  orange.onclick = () => {
    roundEightPlaceOne.style = 'background-color: orange';
    guessEight[0] = 'orange';
  };
};
//round eight place two
roundEightPlaceTwo.onclick = () => {
  roundEightPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: red';
    guessEight[1] = 'red';
  };
  blue.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: blue';
    guessEight[1] = 'blue';
  };
  yellow.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: yellow';
    guessEight[1] = 'yellow';
  };
  grey.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: grey';
    guessEight[1] = 'grey';
  };
  orange.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: orange';
    guessEight[1] = 'orange';
  };
};
//round eight place three
roundEightPlaceThree.onclick = () => {
  roundEightPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceThree.style = 'background-color: red';
    guessEight[2] = 'red';
  };
  blue.onclick = () => {
    roundEightPlaceThree.style = 'background-color: blue';
    guessEight[2] = 'blue';
  };
  yellow.onclick = () => {
    roundEightPlaceThree.style = 'background-color: yellow';
    guessEight[2] = 'yellow';
  };
  grey.onclick = () => {
    roundEightPlaceThree.style = 'background-color: grey';
    guessEight[2] = 'grey';
  };
  orange.onclick = () => {
    roundEightPlaceThree.style = 'background-color: orange';
    guessEight[2] = 'orange';
  };
};
//round eight place four
roundEightPlaceFour.onclick = () => {
  roundEightPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceFour.style = 'background-color: red';
    guessEight[3] = 'red';
  };
  blue.onclick = () => {
    roundEightPlaceFour.style = 'background-color: blue';
    guessEight[3] = 'blue';
  };
  yellow.onclick = () => {
    roundEightPlaceFour.style = 'background-color: yellow';
    guessEight[3] = 'yellow';
  };
  grey.onclick = () => {
    roundEightPlaceFour.style = 'background-color: grey';
    guessEight[3] = 'grey';
  };
  orange.onclick = () => {
    roundEightPlaceFour.style = 'background-color: orange';
    guessEight[3] = 'orange';
  };
};

//round nine
//round nine place one
roundNinePlaceOne.onclick = () => {
  roundNinePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceOne.style = 'background-color: red';
    guessNine[0] = 'red';
  };
  blue.onclick = () => {
    roundNinePlaceOne.style = 'background-color: blue';
    guessNine[0] = 'blue';
  };
  yellow.onclick = () => {
    roundNinePlaceOne.style = 'background-color: yellow';
    guessNine[0] = 'yellow';
  };
  grey.onclick = () => {
    roundNinePlaceOne.style = 'background-color: grey';
    guessNine[0] = 'grey';
  };
  orange.onclick = () => {
    roundNinePlaceOne.style = 'background-color: orange';
    guessNine[0] = 'orange';
  };
};
//round nine place two
roundNinePlaceTwo.onclick = () => {
  roundNinePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: red';
    guessNine[1] = 'red';
  };
  blue.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: blue';
    guessNine[1] = 'blue';
  };
  yellow.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: yellow';
    guessNine[1] = 'yellow';
  };
  grey.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: grey';
    guessNine[1] = 'grey';
  };
  orange.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: orange';
    guessNine[1] = 'orange';
  };
};
//round nine place three
roundNinePlaceThree.onclick = () => {
  roundNinePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceThree.style = 'background-color: red';
    guessNine[2] = 'red';
  };
  blue.onclick = () => {
    roundNinePlaceThree.style = 'background-color: blue';
    guessNine[2] = 'blue';
  };
  yellow.onclick = () => {
    roundNinePlaceThree.style = 'background-color: yellow';
    guessNine[2] = 'yellow';
  };
  grey.onclick = () => {
    roundNinePlaceThree.style = 'background-color: grey';
    guessNine[2] = 'grey';
  };
  orange.onclick = () => {
    roundNinePlaceThree.style = 'background-color: orange';
    guessNine[2] = 'orange';
  };
};
//round nine place four
roundNinePlaceFour.onclick = () => {
  roundNinePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceFour.style = 'background-color: red';
    guessNine[3] = 'red';
  };
  blue.onclick = () => {
    roundNinePlaceFour.style = 'background-color: blue';
    guessNine[3] = 'blue';
  };
  yellow.onclick = () => {
    roundNinePlaceFour.style = 'background-color: yellow';
    guessNine[3] = 'yellow';
  };
  grey.onclick = () => {
    roundNinePlaceFour.style = 'background-color: grey';
    guessNine[3] = 'grey';
  };
  orange.onclick = () => {
    roundNinePlaceFour.style = 'background-color: orange';
    guessNine[3] = 'orange';
  };
};

//round ten
//round ten place one
roundTenPlaceOne.onclick = () => {
  roundTenPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceOne.style = 'background-color: red';
    guessNine[0] = 'red';
  };
  blue.onclick = () => {
    roundTenPlaceOne.style = 'background-color: blue';
    guessNine[0] = 'blue';
  };
  yellow.onclick = () => {
    roundTenPlaceOne.style = 'background-color: yellow';
    guessNine[0] = 'yellow';
  };
  grey.onclick = () => {
    roundTenPlaceOne.style = 'background-color: grey';
    guessNine[0] = 'grey';
  };
  orange.onclick = () => {
    roundTenPlaceOne.style = 'background-color: orange';
    guessNine[0] = 'orange';
  };
};
//round ten place two
roundTenPlaceTwo.onclick = () => {
  roundTenPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: red';
    guessNine[1] = 'red';
  };
  blue.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: blue';
    guessNine[1] = 'blue';
  };
  yellow.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: yellow';
    guessNine[1] = 'yellow';
  };
  grey.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: grey';
    guessNine[1] = 'grey';
  };
  orange.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: orange';
    guessNine[1] = 'orange';
  };
};
//round ten place three
roundTenPlaceThree.onclick = () => {
  roundTenPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceThree.style = 'background-color: red';
    guessNine[2] = 'red';
  };
  blue.onclick = () => {
    roundTenPlaceThree.style = 'background-color: blue';
    guessNine[2] = 'blue';
  };
  yellow.onclick = () => {
    roundTenPlaceThree.style = 'background-color: yellow';
    guessNine[2] = 'yellow';
  };
  grey.onclick = () => {
    roundTenPlaceThree.style = 'background-color: grey';
    guessNine[2] = 'grey';
  };
  orange.onclick = () => {
    roundTenPlaceThree.style = 'background-color: orange';
    guessNine[2] = 'orange';
  };
};
//round ten place four
roundTenPlaceFour.onclick = () => {
  roundTenPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceFour.style = 'background-color: red';
    guessNine[3] = 'red';
  };
  blue.onclick = () => {
    roundTenPlaceFour.style = 'background-color: blue';
    guessNine[3] = 'blue';
  };
  yellow.onclick = () => {
    roundTenPlaceFour.style = 'background-color: yellow';
    guessNine[3] = 'yellow';
  };
  grey.onclick = () => {
    roundTenPlaceFour.style = 'background-color: grey';
    guessNine[3] = 'grey';
  };
  orange.onclick = () => {
    roundTenPlaceFour.style = 'background-color: orange';
    guessNine[3] = 'orange';
  };
};


//the important logic
//score variables
//round one
const roundOneScoreOne = document.getElementById('scoreForRoundOnePlaceOne');
const roundOneScoreTwo = document.getElementById('scoreForRoundOnePlaceTwo');
const roundOneScoreThree = document.getElementById('scoreForRoundOnePlaceThree');
const roundOneScoreFour = document.getElementById('scoreForRoundOnePlaceFour');
//round two
const roundTwoScoreOne = document.getElementById('scoreForRoundTwoPlaceOne');
const roundTwoScoreTwo = document.getElementById('scoreForRoundTwoPlaceTwo');
const roundTwoScoreThree = document.getElementById('scoreForRoundTwoPlaceThree');
const roundTwoScoreFour = document.getElementById('scoreForRoundTwoPlaceFour');
//round three
const roundThreeScoreOne = document.getElementById('scoreForRoundThreePlaceOne');
const roundThreeScoreTwo = document.getElementById('scoreForRoundThreePlaceTwo');
const roundThreeScoreThree = document.getElementById('scoreForRoundThreePlaceThree');
const roundThreeScoreFour = document.getElementById('scoreForRoundThreePlaceFour');
//round four
const roundFourScoreOne = document.getElementById('scoreForRoundFourPlaceOne');
const roundFourScoreTwo = document.getElementById('scoreForRoundFourPlaceTwo');
const roundFourScoreThree = document.getElementById('scoreForRoundFourPlaceThree');
const roundFourScoreFour = document.getElementById('scoreForRoundFourPlaceFour');
//round five
const roundFiveScoreOne = document.getElementById('scoreForRoundFivePlaceOne');
const roundFiveScoreTwo = document.getElementById('scoreForRoundFivePlaceTwo');
const roundFiveScoreThree = document.getElementById('scoreForRoundFivePlaceThree');
const roundFiveScoreFour = document.getElementById('scoreForRoundFivePlaceFour');
//round six
const roundSixScoreOne = document.getElementById('scoreForRoundSixPlaceOne');
const roundSixScoreTwo = document.getElementById('scoreForRoundSixPlaceTwo');
const roundSixScoreThree = document.getElementById('scoreForRoundSixPlaceThree');
const roundSixScoreFour = document.getElementById('scoreForRoundSixPlaceFour');
//round seven
const roundSevenScoreOne = document.getElementById('scoreForRoundSevenPlaceOne');
const roundSevenScoreTwo = document.getElementById('scoreForRoundSevenPlaceTwo');
const roundSevenScoreThree = document.getElementById('scoreForRoundSevenPlaceThree');
const roundSevenScoreFour = document.getElementById('scoreForRoundSevenPlaceFour');
//round eight
const roundEightreOne = document.getElementById('scoreForRoundEightPlaceOne');
const roundEightScoreTwo = document.getElementById('scoreForRoundEightPlaceTwo');
const roundEightScoreThree = document.getElementById('scoreForRoundEightPlaceThree');
const roundEightScoreFour = document.getElementById('scoreForRoundEightPlaceFour');
//round nine
const roundNineScoreOne = document.getElementById('scoreForRoundNinePlaceOne');
const roundNineScoreTwo = document.getElementById('scoreForRoundNinePlaceTwo');
const roundNineScoreThree = document.getElementById('scoreForRoundNinePlaceThree');
const roundNineScoreFour = document.getElementById('scoreForRoundNinePlaceFour');
//round ten
const roundTenScoreOne = document.getElementById('scoreForRoundTenPlaceOne');
const roundTenScoreTwo = document.getElementById('scoreForRoundTenPlaceTwo');
const roundTenScoreThree = document.getElementById('scoreForRoundTenPlaceThree');
const roundTenScoreFour = document.getElementById('scoreForRoundTenPlaceFour');


//logic round one
oneBtn.onclick = () => {
  //place one
  if (guessOne[0] === theCode[0]) {
    roundOneScoreOne.style = 'background-color: black';
  } else if (theCode.includes(guessOne[0])){
    roundOneScoreOne.style = 'background-color: red';
  }
  //place two
  if (guessOne[1] === theCode[1]) {
    roundOneScoreTwo.style = 'background-color: black';
  } else if (theCode.includes(guessOne[1])){
    roundOneScoreTwo.style = 'background-color: red';
  }
  //place three
  if (guessOne[2] === theCode[2]) {
    roundOneScoreThree.style = 'background-color: black';
  } else if (theCode.includes(guessOne[2])){
    roundOneScoreThree.style = 'background-color: red';
  }
  //place four
  if (guessOne[3] === theCode[3]) {
    roundOneScoreFour.style = 'background-color: black';
  } else if (theCode.includes(guessOne[3])){
    roundOneScoreFour.style = 'background-color: red';
  }
};

//logic round two
twoBtn.onclick = () => {
  //place one
  if (guessTwo[0] === theCode[0]) {
    roundTwoScoreOne.style = 'background-color: black';
  } else if (theCode.includes(guessTwo[0])){
    roundTwoScoreOne.style = 'background-color: red';
  }
  //place two
  if (guessTwo[1] === theCode[1]) {
    roundTwoScoreTwo.style = 'background-color: black';
  } else if (theCode.includes(guessTwo[1])){
    roundTwoScoreTwo.style = 'background-color: red';
  }
  //place three
  if (guessTwo[2] === theCode[2]) {
    roundTwoScoreThree.style = 'background-color: black';
  } else if (theCode.includes(guessTwo[2])){
    roundTwoScoreThree.style = 'background-color: red';
  }
  //place four
  if (guessTwo[3] === theCode[3]) {
    roundTwoScoreFour.style = 'background-color: black';
  } else if (theCode.includes(guessTwo[3])){
    roundTwoScoreFour.style = 'background-color: red';
  }
};

//logic round three
threeBtn.onclick = () => {
  //place one
  if (guessThree[0] === theCode[0]) {
    roundThreeScoreOne.style = 'background-color: black';
  } else if (theCode.includes(guessThree[0])){
    roundThreeScoreOne.style = 'background-color: red';
  }
  //place two
  if (guessThree[1] === theCode[1]) {
    roundThreeScoreTwo.style = 'background-color: black';
  } else if (theCode.includes(guessThree[1])){
    roundThreeScoreTwo.style = 'background-color: red';
  }
  //place three
  if (guessThree[2] === theCode[2]) {
    roundThreeScoreThree.style = 'background-color: black';
  } else if (theCode.includes(guessThree[2])){
    roundThreeScoreThree.style = 'background-color: red';
  }
  //place four
  if (guessThree[3] === theCode[3]) {
    roundThreeScoreFour.style = 'background-color: black';
  } else if (theCode.includes(guessThree[3])){
    roundThreeScoreFour.style = 'background-color: red';
  }
};

//logic round four
fourBtn.onclick = () => {
  //place one
  if (guessFour[0] === theCode[0]) {
    roundFourScoreOne.style = 'background-color: black';
  } else if (theCode.includes(guessFour[0])){
    roundFourScoreOne.style = 'background-color: red';
  }
  //place two
  if (guessFour[1] === theCode[1]) {
    roundFourScoreTwo.style = 'background-color: black';
  } else if (theCode.includes(guessFour[1])){
    roundFourScoreTwo.style = 'background-color: red';
  }
  //place three
  if (guessFour[2] === theCode[2]) {
    roundFourScoreThree.style = 'background-color: black';
  } else if (theCode.includes(guessFour[2])){
    roundFourScoreThree.style = 'background-color: red';
  }
  //place four
  if (guessFour[3] === theCode[3]) {
    roundFourScoreFour.style = 'background-color: black';
  } else if (theCode.includes(guessFour[3])){
    roundFourScoreFour.style = 'background-color: red';
  }
};

//logic round five
fiveBtn.onclick = () => {
  //place one
  if (guessFive[0] === theCode[0]) {
    roundFiveScoreOne.style = 'background-color: black';
  } else if (theCode.includes(guessFive[0])){
    roundFiveScoreOne.style = 'background-color: red';
  }
  //place two
  if (guessFive[1] === theCode[1]) {
    roundFiveScoreTwo.style = 'background-color: black';
  } else if (theCode.includes(guessFive[1])){
    roundFiveScoreTwo.style = 'background-color: red';
  }
  //place three
  if (guessFive[2] === theCode[2]) {
    roundFiveScoreThree.style = 'background-color: black';
  } else if (theCode.includes(guessFive[2])){
    roundFiveScoreThree.style = 'background-color: red';
  }
  //place four
  if (guessFive[3] === theCode[3]) {
    roundFiveScoreFour.style = 'background-color: black';
  } else if (theCode.includes(guessFive[3])){
    roundFiveScoreFour.style = 'background-color: red';
  }
};