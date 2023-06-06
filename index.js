console.log("---------------start---------------")
class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append (value){
        const newNode = new node(value)
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    display (){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
    find(key){
        let count = 0;
        let current = this.head;
        while(current){
            if(current.value === key){
                return current;
            }else{
                count = count + 1;
                console.log("Count:",count)
                current = current.next;
            }
        }
    }
}

const linkedListObj = new linkedList();
linkedListObj.append(10);
linkedListObj.append(20);
linkedListObj.append(30);
linkedListObj.display();
let foundObject = linkedListObj.find(10);
if(foundObject){
    console.log("foundObject:",foundObject)
}else{
    console.log("Could not find the object")
}


console.log("---------------end---------------")
