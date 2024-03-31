
import { useState } from "react";
import CustomButton from "../components/CustomButton"
import Gallery from "../components/Gallery";

const Home = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        return setCount(count + 1)
    }
    const handleDecrement = () => {
        return setCount(count - 1)
    }

    return (
        <div>
            <h1>Welcome to Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae consequatur, quod praesentium quidem maiores, fugit dignissimos eius natus porro dolor alias laboriosam. Ipsa hic vero delectus maxime et odio!</p>

            <div className="my-5">
                <CustomButton text="Click" />
            </div>

            <CustomButton background="red" textColor="#fff" border="red" padding="5px 30px" text="Save" />

            <h3 className="mt-5">Count: {count}</h3>

            <div className="my-5 p-5 d-flex align-items-center gap-2">
                <button onClick={handleIncrement} style={{ backgroundColor: "green" }}>
                    +
                </button>
                <button onClick={handleDecrement} style={{ backgroundColor: "red" }}>
                    -
                </button>
            </div>

            <div className="my-5">
                <Gallery />
            </div>
        </div>
    )
}

export default Home