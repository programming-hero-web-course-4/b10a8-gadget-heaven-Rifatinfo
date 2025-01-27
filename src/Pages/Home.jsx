

import { useState } from "react";
import { Link, useLoaderData} from "react-router";

const Home = () => {
    const gadgets = useLoaderData();
    // console.log(gadgets);
    const [filteredItems, setFilteredItems] = useState(gadgets);

    const handleFilteringItem = (itemType) => {
        if(itemType === "All Accessories"){
            setFilteredItems(gadgets)
            return;
        }
        const filtered = gadgets.filter((item) => item.type === itemType); 
        const sortedItemsType = [...filtered].sort((a, b) => b.price- a.price);
        // setFilteredItems(filtered);
        setFilteredItems(sortedItemsType);
      };
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
                <div className="w-full p-4 md:w-1/5 border shadow-lg rounded-lg">
                   <div className="md:grid md:grid-cols-1 md:gap-4 md:ml-8 grid grid-cols-2 gap-2">
                      <button onClick={() => handleFilteringItem("All Accessories")} className="btn btn-outline text-[#9538E2]">All Accessories</button>
                      <button onClick={() => handleFilteringItem("Laptops")} className="btn btn-outline text-[#9538E2]">Laptops</button>
                      <button onClick={() => handleFilteringItem("Phones")} className="btn btn-outline text-[#9538E2]">Phones</button>
                      <button onClick={() => handleFilteringItem("Accessories")} className="btn btn-outline text-[#9538E2]">Accessories</button>
                      <button onClick={() => handleFilteringItem("Smart Watches")} className="btn btn-outline text-[#9538E2]">Smart Watches</button>
                   </div>
                </div>
                <div className="w-full md:w-4/5 border  shadow-lg rounded-lg">
                    <div className="grid p-4 grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
                        {
                            filteredItems.map(gadget => 
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