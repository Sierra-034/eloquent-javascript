(function() {
    class Group {
        constructor() {
            this.group = [];
        }

        add(element) {
            if(this.group.indexOf(element) === -1) {
                this.group.push(element);
            }
        }

        delete(element) {
            let position = this.group.indexOf(element);
            if(position !== -1) {
                this.group.splice(position, position + 1);
            }
        }

        has(element) {
            if(this.group.indexOf(element) === -1) return false;

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

    let myGroup = new Group();
    myGroup.add(2);
    myGroup.add(6);
    myGroup.add(1);
    myGroup.add(6);
    myGroup.add(2);

    let el = 1;
    
    console.log(myGroup);
    console.log("has", myGroup.has(el));
    console.log("delete", myGroup.delete(el));
    console.log("has", myGroup.has(el));
    console.log(myGroup);

    let simpleArray = [1,2,3,42,3,2,4,5,3,5,2,3,42,24,5];
    let setFromArray = Group.from(simpleArray);
    console.log("from SimpleArray", setFromArray);

})()