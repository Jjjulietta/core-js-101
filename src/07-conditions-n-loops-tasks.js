/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (!(num % 5) > 0 && !(num % 3 > 0)) {
    return 'FizzBuzz';
  }
  if (!(num % 3 > 0) && num % 5 > 0) {
    return 'Fizz';
  }
  if (!(num % 5 > 0) && num % 3 > 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n <= 1) { return n; }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = n1;
  let i = n1;
  while (i < n2) {
    i += 1;
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  let max;
  if (a > b && a > c) { max = a; } else
  if (b > a && b > c) { max = b; } else
  if (c > a && c > b) { max = c; }
  if (max === a) {
    if (max >= b + c) return false;
  }
  if (max === b) {
    if (max >= a + c) return false;
  }
  if (max === c) {
    if (max >= a + b) return false;
  }
  return true;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(/* rect1, rect2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const xp = point.x;
  const yp = point.y;
  const xc = circle.center.x;
  const yc = circle.center.x;
  const rad = circle.radius;
  if (Math.sqrt((xc - xp) ** 2 + (yc - yp) ** 2) < rad) return true;
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i], 0) === i && str.indexOf(str[i], i + 1) === -1) {
      return str[i];
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = '';
  if (isStartIncluded) { str += '['; } else { str += '('; }
  if (a > b) { str += `${b}, `; str += a; } else { str += `${a}, `; str += b; }
  if (isEndIncluded) { str += ']'; } else { str += ')'; }
  return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  if (str.indexOf(' ') !== -1) {
    const m = str.split(' ').map((item) => item.split('').reverse().join('')).reverse().join(' ');
    return m;
  }
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = String(num);
  return +str.split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const arr = String(ccn).split('');
  const k = arr[arr.length - 1];
  const arr1 = arr.slice(0, arr.length - 1).reverse();
  const arr2 = arr1.map((item, i) => { if (i % 2 > 0) { return item; } return item * 2; });
  let sum = 0;
  for (let i = 0; i < arr2.length; i += 1) {
    if (String(arr2[i]).length > 1) {
      const s = String(arr2[i]);
      const n = +s[0] + +s[1];
      arr2[i] = n;
    }
    sum += +arr2[i];
  }
  let kn;
  if (sum % 10 > 0) {
    const str = String(sum);
    kn = 10 - str[str.length - 1];
  } else { kn = 0; }
  if (+k === kn) { return true; }
  return false;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const str = String(num);
  const l = str.length;
  let sum = 0;
  for (let i = 0; i < l; i += 1) {
    sum += +str[i];
  }
  const str2 = String(sum);
  if (str2.length > 1) {
    return +str2[0] + +str2[1];
  }
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const obj = {
    '[': ']', '{': '}', '(': ')', '<': '>',
  };
  const close = [']', '}', ')', '>'];
  const stack = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]]) {
      stack.push(arr[i]);
    } if (close.includes(arr[i]) && stack.length === 0) { return false; }
    if (close.includes(arr[i]) && obj[stack[stack.length - 1]] === arr[i]) { stack.pop(); }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let str = '';
  let num1 = num;
  while (num1 > 0) {
    const j = Math.floor(num1 / n);
    const m = num1 % n;
    str += m;
    num1 = j;
  }
  return str.split('').reverse().join('');
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const arr = [];
  const n = m1[0].length;
  const l = m2.length;
  const r = m1.length;
  if (n !== l) return;
  for (let i = 0; i < r; i += 1) {
    const a = [];
    for (let y = 0; y < r; y += 1) {
      let sum = 0;
      for (let j = 0; j < l; j += 1) {
        const k = m1[i][j] * m2[j][y];
        sum += k;
      }
      a.push(sum);
    }
    arr.push(a);
  }

  // eslint-disable-next-line consistent-return
  return arr;
  // throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const set3 = new Set();
  let result1;
  let result2;
  for (let i = 0; i < position.length; i += 1) {
    const set = new Set();
    const set2 = new Set();
    for (let j = 0; j < position.length; j += 1) {
      result1 = position[i][j];
      set.add(position[i][j]);
      result2 = position[j][i];
      set2.add(position[j][i]);
      if (i === j) set3.add(position[i][j]);
    }
    if (set.size === 1 && result1) { return result1; }
    if (set2.size === 1 && result2) { return result2; }
  }
  if (set3.size === 1 && result1) { return `${result1}`; }
  if
  (position[0][2] === position[1][1]
    && position[1][1] === position[2][0] && position[0][2] !== '') { return position[0][2]; }

  // throw new Error('Not implemented');
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
