import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = () => {
    const gift = useContext(AssetContext);
    console.log(gift)
    return (
        <div className="">
            <h2>Special</h2>
            <p>Has: {gift}</p>
        </div>
    );
};

export default Special;