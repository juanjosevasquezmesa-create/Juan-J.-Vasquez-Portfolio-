class Matrix2x2 {
    constructor(value1 = 0, value2 = 0, value3 = 0, value4 = 0) {// the = 0 is done to ensure if the user does not enter a value it defaults to 0
        this.values = [value1, value2, value3, value4];
    }

    get(row, col){
        return this.values[row *2 + col];
    }

    add(row, col, num){
        this.values[row*2 + col] += num;// matrix 1 (index 0) if (0, 0), matrix 2 (index 1) if (0, 1), matrix 3 (index 2) if (1, 0), matrix 4 (index 3) if (1, 1)
    }

    set(row, col, num){
        this.values[row*2 + col] = num;
    }

    sub(row, col, num){
        this.values[row*2 + col] -= num;
    }

    scalMulti(num){
        return this.values = this.values.map((val) => val * num);
    }

    matrixAdd(nums){
        // let [a,b,c,d] = this.values
        return (this.values.map((val, index) => val + nums[index]));
    }

    matrixSub(nums){
        return this.values.map((val, index) => val - nums[index]);
    }

    matrixMulti(nums){
        return this.values.map((val, index) => val * nums[index]);
        
    }

    matrixDeterminant(){
        return (this.values[0]*this.values[3]) - (this.values[1]*this.values[2]);
    }

    matrixInverse(){
        let tempArray = [this.values[3], (-1 * this.values[1]), (-1 * this.values[2]), this.values[0]];

        if(this.matrixDeterminant() != 0){
            return tempArray = tempArray.map((val) => val / this.matrixDeterminant());

        }  else {
            return ("The Determinant is not inversable");
        }
    }

    print(){
        console.log(this.values);
    }

    returnMatrix(){
        return [this.values[0], this.values[1], this.values[2], this.values[3]];
    }
}

class List {
    constructor() {
        this.array = [];
    }

    add(obj){
        this.array.push(obj);
    }
    returnIndex(index){
        return this.array[index];
    }
}

let list = new List();
list.add(new Matrix2x2(2, 5, 3, 9));
let A = list.returnIndex(0);
let B = new Matrix2x2(7, 9, 2, 0);
let index = new Matrix2x2(1, 2, 3, 4);

let AplusB = A.

A.print();
B.print();



// let AplusB = A.matrixAdd(B.returnMatrix());
// console.log(AplusB);

// console.log(newIndex);

