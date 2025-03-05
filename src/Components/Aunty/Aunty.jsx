import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name='Shahidul'></Cousin>
                <Cousin name='Parvin'></Cousin>
            </section>
        </div>
    );
};

export default Aunty;