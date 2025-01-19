import { useLoaderData } from "react-router-dom";
import { IoMdStarHalf } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";

const GadgetDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const {mainFeatures,releaseDate,others,image,name} = details.data;
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
                   <button className=" mt-1 mb-1 rounded-xl border-2 border-[#309C08] p-1 font-semibold">In Stock</button>
                   <p><span className="font-bold">ReleaseDate</span> : {releaseDate}</p>
                   <p className="font-bold">MainFeatures : </p>
                   <div>
                    <ol>
                        <li>{mainFeatures.chipSet}</li>
                        <li>{mainFeatures.displaySize}</li>  
                        <li>{mainFeatures.memory}</li>  
                    </ol>
                   </div>
                   <div>
                        <p className="font-bold">Sensor :</p>
                        <ol>
                            {mainFeatures.sensors.map((sen, index) => (
                            <li key={index}>{index+1} : {sen}</li>
                            ))}
                        </ol>
                   </div>
                   <div className="flex gap-2 items-center">
                    <p className="font-bold">Rating : </p>
                    <p><IoMdStarHalf className="text-yellow-500" /></p>
                   </div>
                   {/* button */}
                   <div className="flex gap-3 items-center">
                   <button className="bg-[#9538E2] text-white px-4 py-3 rounded-xl mt-2">Add To Cart</button>
                   <p className="text-2xl border rounded-full p-2 bg-slate-100 mt-2"> <GiSelfLove className="cursor-pointer" /></p>
                   </div>
                </div>
             </div>
             </div>
        </div>
    );
};

export default GadgetDetails;
