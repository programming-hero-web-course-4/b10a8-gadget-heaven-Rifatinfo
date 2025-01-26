
import { useState } from "react";
import { Link, useLoaderData} from "react-router";

const Home = () => {
    const gadgets = useLoaderData();
    // console.log(gadgets);
    const [sort, setSort] = useState([]);

    const handleSortingItem = (itemType) =>{
        setSort(itemType);
        if(itemType === "Laptops"){
            const item = [...sort].sort((a, b) => a.name - b.name);
            setSort(item);
        }
    }
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
                <div className="w-full p-4 md:w-1/5 border shadow-lg rounded-lg">
                   <div className="md:grid md:grid-cols-1 md:gap-4 md:ml-8 grid grid-cols-2 gap-2">
                      <button onClick={() => handleSortingItem("Laptops")} className="btn btn-outline text-[#9538E2]">Laptops</button>
                      <button onClick={() => handleSortingItem("Phones")} className="btn btn-outline text-[#9538E2]">Phones</button>
                      <button onClick={() => handleSortingItem("Accessories")} className="btn btn-outline text-[#9538E2]">Accessories</button>
                      <button onClick={() => handleSortingItem("Smart Watches")} className="btn btn-outline text-[#9538E2]">Smart Watches</button>
                   </div>
                </div>
                <div className="w-full md:w-4/5 border  shadow-lg rounded-lg">
                    <div className="grid p-4 grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
                        {
                            gadgets.map(gadget => 
                                <div key={gadget.id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src={gadget.image}
                                            alt="" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{gadget.name}</h2>
                                        <p><span className="font-semibold">Price :</span> {gadget.price}</p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/gadget/${gadget.id}`}>
                                                <button className="btn btn-outline text-[#9538E2]">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;