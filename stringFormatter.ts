function capitalize (str:string):string {
    if(str.length === 0){
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice();
}

function toLowerCaseStrs (str : string[]) : string[] {
    let result : string[] = [];
    if (str.length === 0){
        return [""];
    }
    else{
        for(let val of str){
            let temp = val.toLowerCase();
            result.push(temp);
        }
    }
    return result;
} 

function countWords(str : string) : number {
    let count =0;
    if(str.length === 0){
        return 0;
    }
    else {
        for(let i=0;i<str.length;i++){
            count++;
        }
    }
    return count;
}

function isValidEmail (email : string) : boolean {
    const regexEmailCode = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmailCode.test(email);
}

console.log(isValidEmail("ajityalasangi@gmail.com"));
