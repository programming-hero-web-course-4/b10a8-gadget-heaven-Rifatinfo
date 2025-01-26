import {  useLoaderData, useParams } from "react-router-dom";
import { IoMdStarHalf } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { addToStoredReadList, addToStoredWishList } from "../Utility/localstorage";

const GadgetDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    console.log(typeof idInt, details);
    const clickAbleData =  details.find(phone => phone.id === idInt);
    console.log(clickAbleData);
    const {image,name,description,rating,stock,specification} = clickAbleData;

    const handAddToCart = id =>{
        addToStoredReadList(id);
    }
    const handleWishList = id =>{
        addToStoredWishList(id);
    }
    return (
        <div className="mt-12">
             <div></div>

             {/* gadget information  */}
             <div className="md:flex md:justify-center md:items-center">
             <div className="md:flex md:items-center md:gap-5 shadow-lg w-full">
                <div className=" md:ml-60">
                    <img className="mx-auto" src={image} alt="" />
                </div>
                <div className="p-9">
                   <p className="md:text-2xl text-xl font-bold">{name}</p>
                   <button className=" mt-1 mb-1 rounded-xl border-2 border-[#309C08] p-1 font-semibold">{stock}</button>
                   <p><span className="font-bold">description</span> : {description}</p>
                   <p className="font-bold">specification : </p>
                   <div>
                       <ul>
                        {
                            Object.entries(specification).map(([key, value]) => (
                                <li key={key}>
                                    <span className="font-semibold">{key} :</span> {value}
                                </li>
                            ))
                        }
                       </ul>
                   </div>
                   
                   <div>
                    <p className="font-bold">Rating : {rating}</p>
                    <p><IoMdStarHalf className="text-yellow-500"/></p>
                   </div>
                   {/* button */}
                   <div className="flex gap-3 items-center">
                   <button onClick={() => handAddToCart(id)} className="btn hover:text-black bg-[#9538E2] text-white px-4 py-3 rounded-xl mt-2">Add To Cart</button>
                   <p onClick={() => handleWishList(id)} className="btn text-2xl border rounded-full p-2 px-3 bg-slate-100 mt-2"> <GiSelfLove className="cursor-pointer" /></p>
                   </div>
                </div>
             </div>
             </div>
        </div>
    );
};

export default GadgetDetails;
