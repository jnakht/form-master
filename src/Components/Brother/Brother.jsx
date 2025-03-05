import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="">
            <h2>Brother</h2>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;