(function() {

    class GroupIterator {
        constructor(group) {
            this.group = group.array;
            this.length = group.array.length;
            this.index = 0;
        }

        next() {
            if(this.index === this.length) return {done: true};

            return {value: this.group[this.index++], done: false};
        }
    }
    
    class Group {
        constructor() {
            this.array = [];
        }

        add(element) {
            if(this.array.indexOf(element) === -1) {
                this.array.push(element);
            }
        }

        delete(element) {
            let position = this.array.indexOf(element);
            if(position !== -1) {
                this.array.splice(position, position + 1);
            }
        }

        has(element) {
            if(this.array.indexOf(element) === -1) return false;

            return true;
        }

        static from(iterable) {
            let newGroup = new Group();
            for(let element of iterable) {
                newGroup.add(element);
            }

            return newGroup;
        }
    }

    Group.prototype[Symbol.iterator] = function() {
        return new GroupIterator(this);
    }

    let array = [1,9,3,6,3,6,3,2,5,6,3,6];
    let myGroup = Group.from(array);
    console.log(myGroup);

    for(let element of myGroup) {
        console.log(element);
    }
    
})()