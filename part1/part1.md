1. `i` will be logged to the console because `i` was declared with `var` and so will remain in scope after exiting the `for` loop.
2. `discountedPrices` will be logged to the console because `discountedPrice` was declared with `var` and so will remain in scope after exiting the `for` loop.
3. `finalPrice` will be logged to the console because it remains in scope throughout all of the function.
4. The function will iterate through the three elements of `prices` (i.e. 100, 200, 300). For each price it will multiply it by 0.5 (i.e. 1 - 0.5) then round it to the hundreths place and push it to the `discounted` list. Finally the function will return.

5. You will get an error because `i` is out of scope. It was enclosed in the for loop.
6. You will get an error because `discountedPrice` is out of scope. It was enclosed in the for loop.
7. `finalPrice` will be logged to the console as it remains in scope throughout the function.
8. The output will be the same as question 4.

9. An error will occur because `i` is out of scope, as it was enclosed in the for loop.
10. An error will occur because `discountedPrice` is out of scope, as it was enclosed in the for loop.
11. A `0` will be printed to the console, because finalPrice can't be changed.
12. A list of length `prices.length` filled with 0s will be returned. This is because `finalPrice` will be pushed to the list with each iteration of the for loop, and since it is a const value it will never change from `0`.

13.
	1. `student.name`
	2. `student['Grad Year']`
	3. `student.greeting()`
	4. `student['Favorite Teacher'].name`
	5. `student.courseLoad[0]`

14.
	1. `32` because `+` concatenates 2 to the string `3`.
	2. `1` because `-` converts `3` to a number.
	3. `3` because `+` converts `null` to `0`.
	4. `3null` because `+` concatenates `null` to the string `3`.
	5. `4` because `+` converts `true` to `1`.
	6. `0` because `+` converts `false` and `null` to `0`.
	7. `3` because `+` concatenates `undefined` to the string `3`.
	8. `NaN` because `-` converts the string `3` to a number, and `undefined` to be `NaN`.
15. 
	1. `true` because `>` converts `2` to a number.
	2. `false` because string comparison is performed.
	3. `true` because the string `2` is converted to a number.
	4. `false` because no type conversion is performed.
	5. `false` because `true` is converted to `1`.
	6. `true` because of the explicit cast of `2` to a boolean value.
16. The difference between `==` and `===` is that `==` performs type casting automatically, while `===` does not perform type casting and returns `false` if the inputs are different types.

17. `'How are you?'` is printed as `2` is not `==` to `true` but `2` is converted to `true` when cast to a boolean value by the if statement.

19. You will get `[6, 8, 10]`. This is because what is pushed to `newArr` is what is returned from `doSomething` which is `callback(num + 2)`. In this case `num` = `array[i]` and `callback` = `function(x) {return x * 2;}`. This all works out to be `(array[i] + 2) * 2`.

21. There will be an error because `i` is not defined. Otherwise the output will be `4` then `3` then `2`. `4` will be before `3` because even though the delay on `setTimeout` is `0`, it is still a new event which must be done afterwards.