//EX1:
// let profile = {
//     firstName: 'Code',
//     lastName: 'Gym',
//     birthDay: new Date('1979-01-02')
// }
// // let firstName = profile.firstName;
// // let lastName = profile.lastName;
// let {firstName, lastName} = profile;
// console.log(firstName, lastName);

//EX2:
function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i]
        if (point.x >= object.x && point.x <= object.x + object.width &&
            point.y >= object.y && point.y <= object.y + object.height)
            return object
    }
}
const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
let [Obj1, Obj2, Obj3] = myObjects;
console.log(detectCollision(...myObjects));