function isEven(value : number) : boolean {
    if(value %2 ==0){
        return true;
    }
    return false;
}

function square(value : number) : number {
    if (value === 0) {
        return 0;
    }
    else {
        return value * value;
    }
}

function max(val1: number , val2: number) : number {
    if(val1 > val2) {
        return val1;
    }
    else {
        return val2;
    }
}

function sumArray(numbers : number[]) : number {
    if(numbers.length === 0){
        return 0;
    }
    else {
        let sum :number =0;
        for (const n of numbers) {
            sum = sum + n;
        }
        return sum;
    }
}