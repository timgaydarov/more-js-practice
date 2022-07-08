// Палиндром
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.

// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

const palindrom = str => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

console.log(palindrom('adada'))
console.log(palindrom('aaaddd'))

//==================================================================

// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

// - вывод fizz вместо чисел, кратных 3;
// - вывод buzz вместо чисел, кратных 5;
// - вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(5))

//==================================================================

