import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name}) => {
    return (
        <div className="">
            <h2>Cousin</h2>
            <p>{name}</p>
            {
                name === 'Shahidul' && <Special></Special>
            }
            {
                name === "Shahin" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;