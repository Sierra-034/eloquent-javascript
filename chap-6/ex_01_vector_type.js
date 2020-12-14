(function() {
    class Vector {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        get length() {
            let xComponent = Math.pow(this.x, 2);
            let yComponent = Math.pow(this.y, 2);

            return Math.sqrt(xComponent + yComponent);
        }

        plus(vector) {
            if(!vector instanceof Vector) return undefined;

            let sum = new Vector(this.x + vector.x, this.y + vector.y);
            return sum;
        }

        minus(vector) {
            if(!vector instanceof Vector) return undefined;

            let diff = new Vector(this.x - vector.x, this.y - vector.y);
            return diff;
        }
    }

    let someVector = new Vector(3, 2);
    let otherVector = new Vector(7, 12);
    console.log(someVector.length);
    console.log(otherVector.length);

    let sumVector = someVector.plus(otherVector);
    console.log(sumVector);
    console.log(sumVector.length);
    
})()