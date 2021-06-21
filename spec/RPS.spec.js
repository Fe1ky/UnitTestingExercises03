const whoWon = require('../RPS.js');
const assert = require('assert');

describe("whoWon", function(){

   it("if players play the same RPS move declare a tie", function(){
assert.strictEqual(whoWon('rock','rock'), 'TIE!');
   });

      it("if paper and scissors are input make the player who entered sissors is the winner", function(){
assert.strictEqual(whoWon('paper','scissors'), 'Player 2 wins!');
   });

      it("if rock and paper are input make the player who entered paper is the winner", function(){
assert.strictEqual(whoWon('rock','paper'), 'Player 2 wins!');
   });

      it("if scissors and rock are input make the player who entered rock is the winner", function(){
assert.strictEqual(whoWon('scissors','rock'), 'Player 2 wins!');
   });

});