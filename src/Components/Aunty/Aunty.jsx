import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name='Shahidul'></Cousin>
                <Cousin name='Parvin'></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add Money: 1000</button>
        </div>
    );
};

export default Aunty;