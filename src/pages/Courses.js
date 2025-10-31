import CardCourses from "./CardCourses";

function Courses(){
    const persons = [
        { img: require('../asset/image/One.jpg'), name: "Ayan", age: 25, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Falgun", age: 24, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Pawan", age: 25, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Pranoti", age: 28, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Prasad", age: 27, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Purva", age: 24, mobile: "9822408310" },
        { img: require('../asset/image/One.jpg'), name: "Shivam", age: 26, mobile: "9822408310" },
    ];

    return(<div>
      <CardCourses persons={persons}/>
    </div>)
}
export default Courses;