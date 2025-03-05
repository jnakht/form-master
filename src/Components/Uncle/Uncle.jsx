import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div className="">
           <h2>Uncle</h2> 
           <section className="flex">
                <Cousin name='Shahin'></Cousin>
                <Cousin name='Sharmin'></Cousin>
           </section>
        </div>
    );
};

export default Uncle;