// // // // const student = {
// // // //     fullname : "piyush khandelwal",
// // // //     marks : 95.66,
// // // //     printmarks : function() {
// // // //         console.log("marks:"+this.marks);
// // // //     }
// // // // }
// // // class car{
// // //     constructor(){
// // //         console.log("fxn run ho gya ...");
// // //     }
// // //     start(){
// // //         console.log("start");
// // //     }
// // //     stop(){
// // //         console.log("stop");
// // //     }
// // //     setbrand(brand){
// // //         this.brandname=brand;
// // //     }
// // // }
// // // // let car1=new car();
// // // car1.start();
// // // car1.setbrand("omni");
// // // car1.stop(); 
// // // let car2=new car();
// // // car2.setbrand("ambulance");

// // class person {
// //     constructor(){
// //         console.log("parent class constructor:)")
// //     }
// //     eat(){
// //         console.log("eat");
// //      }
// //      sleep(){
// //         console.log("time to sleep");
// //      }
// // }
// // class engineer extends person {
// //     constructor(){
// //         super();//invoke parent class constructor
// //         console.log("child class constructor:)")
// //     }
// //     college(){
// //         console.log("try to learn new technology:)");
// //     }
// // }
// // let piyush = new engineer();
// // piyush.college();
// // piyush.eat();
// // piyush.sleep(); 

// class user {
//    name =" piyush khandelwal";
//    email = "jai@gmail.com";
//     constructor(name,email){
//        this.name=name;
//        this.email=email;
//     }
//      viewdata(){
//         console.log("name:"+this.name);
//         console.log("email:"+this.email);
//         console.log("you are not safe here i am watching you:(:)):((::))");
//      }
// }
// class admin extends user{
//     constructor(name,email){
//         super(name,email);

//     }
//     editdata(){
//         console.log("you are safe now you are with your admin")
//     }
// }
// let user1 = new user("piyush","khandelwal");
// user1.viewdata();
// let admin1=new admin("admin","admin@gmail.com");
// admin1.editdata();



// error handling

let a=10;
let b=0;
console.log(a+b);
console.log(a+b);
console.log(a+b);
try {
    console.log(a+c);
} catch (error) {
    console.log("error coming.....");
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
