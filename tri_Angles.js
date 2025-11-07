//(0,0), (3,0), and (0,4)

class point {
    constructor(x, y) {
        this.point = [x, y]
    }

    returnPoint(){
        return this.point;//returns the array
    }
}

class line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    lineLength(){
        let large1 = Math.max(this.point1[0], this.point2[0]);
        let min1 = Math.min(this.point1[0], this.point2[0]);

        let large2 = Math.max(this.point1[1], this.point2[1]);
        let min2 = Math.min(this.point1[1], this.point2[1]);
        return Math.sqrt((Math.pow((large1 - min1), 2)) + (Math.pow((large2 - min2), 2)));
    }
}

class triangle {//works
    constructor(point1, point2, point3) {
        this.set = [new line(point1, point2).lineLength(), new line(point1, point3).lineLength(), new line(point2, point3).lineLength()];
        this.pointSet = [point1, point2, point3];
    }

    trianglePerimeter(){//works
        let run = false;
        
        switch (Math.max(this.set[0], this.set[1], this.set[2])) {
            case this.set[0]:
                run = ((this.set[1] + this.set[2]) > this.set[0])
                break;
        
            case this.set[1]:
                run = ((this.set[0] + this.set[2]) > this.set[1])
                break;

            case this.set[2]:
                run = ((this.set[1] + this.set[0]) > this.set[2])
                break;
        }
        if (run) {
            console.log("The perimeter is: ", this.set[0] + this.set[1] + this.set[2]);
            
        } else {
            console.log(NaN);
        }
    }

    triangleArea(){//works
        let run = false;
        
        switch (Math.max(this.set[0], this.set[1], this.set[2])) {
            case this.set[0]:
                run = ((this.set[1] + this.set[2]) > this.set[0])
                break;
        
            case this.set[1]:
                run = ((this.set[0] + this.set[2]) > this.set[1])
                break;

            case this.set[2]:
                run = ((this.set[1] + this.set[0]) > this.set[2])
                break;
        }
        if (run) {            
            console.log(`The area is:  ${(1/2*(this.pointSet[0][0]*(this.pointSet[1][1] - this.pointSet[2][1]) + this.pointSet[1][0]*(this.pointSet[2][1] - this.pointSet[0][1]) + this.pointSet[2][0]*(this.pointSet[0][1] - this.pointSet[1][1])))}`);
        } else {
            console.log(NaN);
        }
    }

}

let point1 = new point(0, 0);
let point2 = new point(4, 0);
let point3 = new point(0, 3);

let triangle1 = new triangle(point1.returnPoint(), point2.returnPoint(), point3.returnPoint());

triangle1.triangleArea();