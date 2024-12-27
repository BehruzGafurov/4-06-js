// Array1: Birinchi n ta toq sonlardan iborat massiv qaytarish
function getInitialOdds(n) {
    let result = [];
    for (let i = 1; result.length < n; i += 2) {
        result.push(i);
    }
    console.log(result);
}
 

// Array2: Juft sonlarni indekslari kamayish tartibida qaytarish
function getEvenReverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) result.push(arr[i]);
    }
    console.log(result);
}


// Array3: Massiv elementlarini A[0], A[n-1], A[1], A[n-2], ... tartibida chiqarish
function customOrder(arr) {
    let result = [];
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        result.push(arr[i]);
        if (i !== j) result.push(arr[j]);
    }
    console.log(result);
}


// Array4: K va L indekslari orasidagi elementlar yig'indisini chiqarish
function rangeSum(arr, K, L) {
    let sum = 0;
    for (let i = K; i <= L; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5); 

// Array5: Massivdan takrorlanmas elementlarni chiqarish
function getSingleArr(arr) {
    let unique = [];
    for (let i of arr) {
        if (!unique.includes(i)) unique.push(i);
    }
    console.log(unique);
}


// Array6: Eng kichik va eng katta elementlarning o'rnini almashtirish



// Array7: Massiv elementlarini bir joyga o'ngga siljitish
function shiftRight(arr) {
    let last = arr.pop();
    arr.unshift(last);
    console.log(arr);
}

// Homework Array1: 2 ning dastlabki n ta darajalaridan iborat massiv qaytarish
function getLevel2(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 ** (i + 1));
    }
    console.log(result);
}


// Homework Array2: Har bir elementi oldingi barcha elementlar yig'indisiga teng massiv yaratish
function generateArray(n, A, B) {
    let arr = [A, B];
    for (let i = 2; i < n; i++) {
        arr.push(arr.reduce((sum, num) => sum + num));
    }
    console.log(arr);
}

// Homework Array3: Massiv elementlarini teskari tartibda chiqarish



// Homework Array4: Toq sonlarni o'sish tartibida chiqarish va sonini chiqarish
function oddElements(arr) {
    let odds = arr.filter(x => x % 2 !== 0);
    console.log(odds);
    console.log("Toqlar soni:", odds.length);
}


// Homework Array5: Juftlarni o'sish tartibida, toqlarni kamayish tartibida chiqarish
function evenOddSplit(arr) {
    let evens = arr.filter(x => x % 2 === 0);
    let odds = arr.filter(x => x % 2 !== 0).reverse();
    console.log([...evens, ...odds]);
}


// Homework Array6: Juft indeksdagi elementlarni chiqarish
function evenIndexElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    console.log(result);
}


// Homework Array7: Toq indeksdagi elementlarni teskari tartibda chiqarish
function reverseOddIndex(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        result.push(arr[i]);
    }
    console.log(result);
}
reverseOddIndex([7, 4, 9, 2, 3, 1, 5]); // Natija: [5, 3, 9]// Array1: Birinchi n ta toq sonlardan iborat massiv qaytarish
function getInitialOdds(n) {
    let result = [];
    for (let i = 1; result.length < n; i += 2) {
        result.push(i);
    }
    console.log(result);
}
getInitialOdds(5); // Natija: [1, 3, 5, 7, 9]

// Array2: Juft sonlarni indekslari kamayish tartibida qaytarish
function getEvenReverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) result.push(arr[i]);
    }
    console.log(result);
}
getEvenReverse([4, 5, 7, 8, 6, 9]); // Natija: [6, 8, 4]

// Array3: Massiv elementlarini A[0], A[n-1], A[1], A[n-2], ... tartibida chiqarish
function customOrder(arr) {
    let result = [];
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        result.push(arr[i]);
        if (i !== j) result.push(arr[j]);
    }
    console.log(result);
}
customOrder([4, 5, 7, 8, 6, 9]);

// Array4: K va L indekslari orasidagi elementlar yig'indisini chiqarish
function rangeSum(arr, K, L) {
    let sum = 0;
    for (let i = K; i <= L; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5); 

// Array5: Massivdan takrorlanmas elementlarni chiqarish
function getSingleArr(arr) {
    let unique = [];
    for (let i of arr) {
        if (!unique.includes(i)) unique.push(i);
    }
    console.log(unique);
}
getSingleArr([7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]); 

// Array6: Eng kichik va eng katta elementlarning o'rnini almashtirish
function swapMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minIndex = arr.indexOf(min);
    let maxIndex = arr.indexOf(max);
    arr[minIndex] = max;
    arr[maxIndex] = min;
    console.log(arr);
}
swapMinMax([7, 4, 9, 2, 3, 1, 5]); 

// Array7: Massiv elementlarini bir joyga o'ngga siljitish
function shiftRight(arr) {
    let last = arr.pop();
    arr.unshift(last);
    console.log(arr);
}
shiftRight([1, 5, 8, 9, 10]); 
// Homework Array1: 2 ning dastlabki n ta darajalaridan iborat massiv qaytarish
function getLevel2(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 ** (i + 1));
    }
    console.log(result);
}
getLevel2(5); 

// Homework Array2: Har bir elementi oldingi barcha elementlar yig'indisiga teng massiv yaratish
function generateArray(n, A, B) {
    let arr = [A, B];
    for (let i = 2; i < n; i++) {
        arr.push(arr.reduce((sum, num) => sum + num));
    }
    console.log(arr);
}
generateArray(5, 2, 3);

// Homework Array3: Massiv elementlarini teskari tartibda chiqarish
function reverseArray(arr) {
    console.log(arr.reverse());
}
reverseArray([4, 5, 7, 8, 6, 9]); 

// Homework Array4: Toq sonlarni o'sish tartibida chiqarish va sonini chiqarish
function oddElements(arr) {
    let odds = arr.filter(x => x % 2 !== 0);
    console.log(odds);
    console.log("Toqlar soni:", odds.length);
}
oddElements([4, 5, 7, 8, 6, 9]); 

// Homework Array5: Juftlarni o'sish tartibida, toqlarni kamayish tartibida chiqarish
function evenOddSplit(arr) {
    let evens = arr.filter(x => x % 2 === 0);
    let odds = arr.filter(x => x % 2 !== 0).reverse();
    console.log([...evens, ...odds]);
}
evenOddSplit([4, 5, 7, 8, 6, 9]); 

// Homework Array6: Juft indeksdagi elementlarni chiqarish
function evenIndexElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    console.log(result);
}
evenIndexElements([7, 4, 9, 2, 3, 1, 5]); /

// Homework Array7: Toq indeksdagi elementlarni teskari tartibda chiqarish
function reverseOddIndex(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        result.push(arr[i]);
    }
    console.log(result);
}
reverseOddIndex([7, 4, 9, 2, 3, 1, 5]); 