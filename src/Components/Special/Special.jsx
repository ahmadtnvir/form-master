import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Asset : {asset}</p>
            <p>Has also : {gift}</p>
        </div>
    );
};

export default Special;