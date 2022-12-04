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

///function

//round one
///round one place one
roundOnePlaceOne.onclick = () => {
  roundOnePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundOnePlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundOnePlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundOnePlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundOnePlaceOne.style = 'background-color: orange';
  };
};
//round one place two
roundOnePlaceTwo.onclick = () => {
  roundOnePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundOnePlaceTwo.style = 'background-color: orange';
  };
};
//round one place three
roundOnePlaceThree.onclick = () => {
  roundOnePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundOnePlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundOnePlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundOnePlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundOnePlaceThree.style = 'background-color: orange';
  };
};
//round one place four
roundOnePlaceFour.onclick = () => {
  roundOnePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundOnePlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundOnePlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundOnePlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundOnePlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundOnePlaceFour.style = 'background-color: orange';
  };
};

//guess btn function
oneBtn.onclick = () => {
  oneBtn.style = 'display: none';
  twoBtn.style = 'display: block';

  //round two
  //round two place one
  roundTwoPlaceOne.onclick = () => {
    roundTwoPlaceOne.style = 'border: solid 3px darkslategrey';
    colors.style = 'display: flex';

    red.onclick = () => {
      roundTwoPlaceOne.style = 'background-color: red';
    };
    blue.onclick = () => {
      roundTwoPlaceOne.style = 'background-color: blue';
    };
    yellow.onclick = () => {
      roundTwoPlaceOne.style = 'background-color: yellow';
    };
    grey.onclick = () => {
      roundTwoPlaceOne.style = 'background-color: grey';
    };
    orange.onclick = () => {
      roundTwoPlaceOne.style = 'background-color: orange';
    };
  };
  //round two place two
  roundTwoPlaceTwo.onclick = () => {
    roundTwoPlaceTwo.style = 'border: solid 3px darkslategrey';
    colors.style = 'display: flex';

    red.onclick = () => {
      roundTwoPlaceTwo.style = 'background-color: red';
    };
    blue.onclick = () => {
      roundTwoPlaceTwo.style = 'background-color: blue';
    };
    yellow.onclick = () => {
      roundTwoPlaceTwo.style = 'background-color: yellow';
    };
    grey.onclick = () => {
      roundTwoPlaceTwo.style = 'background-color: grey';
    };
    orange.onclick = () => {
      roundTwoPlaceTwo.style = 'background-color: orange';
    };
  };
  //round two place three
  roundTwoPlaceThree.onclick = () => {
    roundTwoPlaceThree.style = 'border: solid 3px darkslategrey';
    colors.style = 'display: flex';

    red.onclick = () => {
      roundTwoPlaceThree.style = 'background-color: red';
    };
    blue.onclick = () => {
      roundTwoPlaceThree.style = 'background-color: blue';
    };
    yellow.onclick = () => {
      roundTwoPlaceThree.style = 'background-color: yellow';
    };
    grey.onclick = () => {
      roundTwoPlaceThree.style = 'background-color: grey';
    };
    orange.onclick = () => {
      roundTwoPlaceThree.style = 'background-color: orange';
    };
  };
  //round two place four
  roundTwoPlaceFour.onclick = () => {
    roundTwoPlaceFour.style = 'border: solid 3px darkslategrey';
    colors.style = 'display: flex';

    red.onclick = () => {
      roundTwoPlaceFour.style = 'background-color: red';
    };
    blue.onclick = () => {
      roundTwoPlaceFour.style = 'background-color: blue';
    };
    yellow.onclick = () => {
      roundTwoPlaceFour.style = 'background-color: yellow';
    };
    grey.onclick = () => {
      roundTwoPlaceFour.style = 'background-color: grey';
    };
    orange.onclick = () => {
      roundTwoPlaceFour.style = 'background-color: orange';
    };
  };

  twoBtn.onclick = () => {
    twoBtn.style = 'display: none';
    threeBtn.style = 'display: block';

    //round three
    //round three place one
    roundThreePlaceOne.onclick = () => {
      roundThreePlaceOne.style = 'border: solid 3px darkslategrey';
      colors.style = 'display: flex';

      red.onclick = () => {
        roundThreePlaceOne.style = 'background-color: red';
      };
      blue.onclick = () => {
        roundThreePlaceOne.style = 'background-color: blue';
      };
      yellow.onclick = () => {
        roundThreePlaceOne.style = 'background-color: yellow';
      };
      grey.onclick = () => {
        roundThreePlaceOne.style = 'background-color: grey';
      };
      orange.onclick = () => {
        roundThreePlaceOne.style = 'background-color: orange';
      };
    };
    //round three place two
    roundThreePlaceTwo.onclick = () => {
      roundThreePlaceTwo.style = 'border: solid 3px darkslategrey';
      colors.style = 'display: flex';

      red.onclick = () => {
        roundThreePlaceTwo.style = 'background-color: red';
      };
      blue.onclick = () => {
        roundThreePlaceTwo.style = 'background-color: blue';
      };
      yellow.onclick = () => {
        roundThreePlaceTwo.style = 'background-color: yellow';
      };
      grey.onclick = () => {
        roundThreePlaceTwo.style = 'background-color: grey';
      };
      orange.onclick = () => {
        roundThreePlaceTwo.style = 'background-color: orange';
      };
    };
    //round three place three
    roundThreePlaceThree.onclick = () => {
      roundThreePlaceThree.style = 'border: solid 3px darkslategrey';
      colors.style = 'display: flex';

      red.onclick = () => {
        roundThreePlaceThree.style = 'background-color: red';
      };
      blue.onclick = () => {
        roundThreePlaceThree.style = 'background-color: blue';
      };
      yellow.onclick = () => {
        roundThreePlaceThree.style = 'background-color: yellow';
      };
      grey.onclick = () => {
        roundThreePlaceThree.style = 'background-color: grey';
      };
      orange.onclick = () => {
        roundThreePlaceThree.style = 'background-color: orange';
      };
    };
    //round three place four
    roundThreePlaceFour.onclick = () => {
      roundThreePlaceFour.style = 'border: solid 3px darkslategrey';
      colors.style = 'display: flex';

      red.onclick = () => {
        roundThreePlaceFour.style = 'background-color: red';
      };
      blue.onclick = () => {
        roundThreePlaceFour.style = 'background-color: blue';
      };
      yellow.onclick = () => {
        roundThreePlaceFour.style = 'background-color: yellow';
      };
      grey.onclick = () => {
        roundThreePlaceFour.style = 'background-color: grey';
      };
      orange.onclick = () => {
        roundThreePlaceFour.style = 'background-color: orange';
      };
    };
  };

  threeBtn.onclick = () => {
    threeBtn.style = 'display: none';
    fourBtn.style = 'display: block';
  };
  fourBtn.onclick = () => {
    fourBtn.style = 'display: none';
    fiveBtn.style = 'display: block';
  };
  fiveBtn.onclick = () => {
    fiveBtn.style = 'display: none';
    sixBtn.style = 'display: block';
  };
  sixBtn.onclick = () => {
    sixBtn.style = 'display: none';
    sevenBtn.style = 'display: block';
  };
  sevenBtn.onclick = () => {
    sevenBtn.style = 'display: none';
    eightBtn.style = 'display: block';
  };
  eightBtn.onclick = () => {
    eightBtn.style = 'display: none';
    nineBtn.style = 'display: block';
  };
  nineBtn.onclick = () => {
    nineBtn.style = 'display: none';
    tenBtn.style = 'display: block';
  };
  tenBtn.onclick = () => {
    //you won!!!!!
  };
};

//round four
//round four place one
roundFourPlaceOne.onclick = () => {
  roundFourPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFourPlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFourPlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFourPlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFourPlaceOne.style = 'background-color: orange';
  };
};
//round four place two
roundFourPlaceTwo.onclick = () => {
  roundFourPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFourPlaceTwo.style = 'background-color: orange';
  };
};
//round four place three
roundFourPlaceThree.onclick = () => {
  roundFourPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFourPlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFourPlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFourPlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFourPlaceThree.style = 'background-color: orange';
  };
};
//round four place four
roundFourPlaceFour.onclick = () => {
  roundFourPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFourPlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFourPlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFourPlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFourPlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFourPlaceFour.style = 'background-color: orange';
  };
};

//round five
//round five place one
roundFivePlaceOne.onclick = () => {
  roundFivePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFivePlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFivePlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFivePlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFivePlaceOne.style = 'background-color: orange';
  };
};
//round five place two
roundFivePlaceTwo.onclick = () => {
  roundFivePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFivePlaceTwo.style = 'background-color: orange';
  };
};
//round five place three
roundFivePlaceThree.onclick = () => {
  roundFivePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFivePlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFivePlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFivePlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFivePlaceThree.style = 'background-color: orange';
  };
};
//round five place four
roundFivePlaceFour.onclick = () => {
  roundFivePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundFivePlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundFivePlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundFivePlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundFivePlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundFivePlaceFour.style = 'background-color: orange';
  };
};

//round six
//round six place one
roundSixPlaceOne.onclick = () => {
  roundSixPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSixPlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSixPlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSixPlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSixPlaceOne.style = 'background-color: orange';
  };
};
//round six place two
roundSixPlaceTwo.onclick = () => {
  roundSixPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSixPlaceTwo.style = 'background-color: orange';
  };
};
//round six place three
roundSixPlaceThree.onclick = () => {
  roundSixPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSixPlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSixPlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSixPlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSixPlaceThree.style = 'background-color: orange';
  };
};
//round six place four
roundSixPlaceFour.onclick = () => {
  roundSixPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSixPlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSixPlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSixPlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSixPlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSixPlaceFour.style = 'background-color: orange';
  };
};

//round seven
//round two place one
roundSevenPlaceOne.onclick = () => {
  roundSevenPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSevenPlaceOne.style = 'background-color: orange';
  };
};
//round two place two
roundSevenPlaceTwo.onclick = () => {
  roundSevenPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSevenPlaceTwo.style = 'background-color: orange';
  };
};
//round two place three
roundSevenPlaceThree.onclick = () => {
  roundSevenPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSevenPlaceThree.style = 'background-color: orange';
  };
};
//round two place four
roundSevenPlaceFour.onclick = () => {
  roundSevenPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundSevenPlaceFour.style = 'background-color: orange';
  };
};

//round eight
//round two place one
roundEightPlaceOne.onclick = () => {
  roundEightPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundEightPlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundEightPlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundEightPlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundEightPlaceOne.style = 'background-color: orange';
  };
};
//round two place two
roundEightPlaceTwo.onclick = () => {
  roundEightPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundEightPlaceTwo.style = 'background-color: orange';
  };
};
//round two place three
roundEightPlaceThree.onclick = () => {
  roundEightPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundEightPlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundEightPlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundEightPlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundEightPlaceThree.style = 'background-color: orange';
  };
};
//round two place four
roundEightPlaceFour.onclick = () => {
  roundEightPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundEightPlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundEightPlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundEightPlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundEightPlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundEightPlaceFour.style = 'background-color: orange';
  };
};

//round nine
//round nine place one
roundNinePlaceOne.onclick = () => {
  roundNinePlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundNinePlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundNinePlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundNinePlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundNinePlaceOne.style = 'background-color: orange';
  };
};
//round nine place two
roundNinePlaceTwo.onclick = () => {
  roundNinePlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundNinePlaceTwo.style = 'background-color: orange';
  };
};
//round nine place three
roundNinePlaceThree.onclick = () => {
  roundNinePlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundNinePlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundNinePlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundNinePlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundNinePlaceThree.style = 'background-color: orange';
  };
};
//round nine place four
roundNinePlaceFour.onclick = () => {
  roundNinePlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundNinePlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundNinePlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundNinePlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundNinePlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundNinePlaceFour.style = 'background-color: orange';
  };
};

//round ten
//round ten place one
roundTenPlaceOne.onclick = () => {
  roundTenPlaceOne.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceOne.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundTenPlaceOne.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundTenPlaceOne.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundTenPlaceOne.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundTenPlaceOne.style = 'background-color: orange';
  };
};
//round ten place two
roundTenPlaceTwo.onclick = () => {
  roundTenPlaceTwo.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundTenPlaceTwo.style = 'background-color: orange';
  };
};
//round ten place three
roundTenPlaceThree.onclick = () => {
  roundTenPlaceThree.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceThree.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundTenPlaceThree.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundTenPlaceThree.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundTenPlaceThree.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundTenPlaceThree.style = 'background-color: orange';
  };
};
//round ten place four
roundTenPlaceFour.onclick = () => {
  roundTenPlaceFour.style = 'border: solid 3px darkslategrey';
  colors.style = 'display: flex';

  red.onclick = () => {
    roundTenPlaceFour.style = 'background-color: red';
  };
  blue.onclick = () => {
    roundTenPlaceFour.style = 'background-color: blue';
  };
  yellow.onclick = () => {
    roundTenPlaceFour.style = 'background-color: yellow';
  };
  grey.onclick = () => {
    roundTenPlaceFour.style = 'background-color: grey';
  };
  orange.onclick = () => {
    roundTenPlaceFour.style = 'background-color: orange';
  };
};
