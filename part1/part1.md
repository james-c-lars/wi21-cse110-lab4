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