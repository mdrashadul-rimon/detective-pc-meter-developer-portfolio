import { Link } from "react-router-dom";

const services = [
    {
        title: "Staff Stealing",
        price: 25500,
        image: "https://mdrashadul-rimon.github.io/service-images/staffstealing.png",
        description:
            "A majority of employees admit to stealing from their employer at least once in their lifetime.When theft does occur, the way it's managed can also prevent future theft.",
    },
    {
        title: "Crime Investigation",
        price: 75000,
        image: "https://mdrashadul-rimon.github.io/service-images/products.png",
        description:
            "Criminal investigation can include searching, interviews, interrogations, evidence collection and preservation, and various methods of investigation.",
    },
    {
        title: "Divorce Matters",
        price: 80300,
        image: "https://mdrashadul-rimon.github.io/service-images/divorced.png",
        description:
            "Divorce is often a contentious experience in which formerly intimate spouses are now adversaries. With this dynamic, spouses may start to hide information from family.",
    },
];

const Services = () => {
    return (
        <div className="md:container my-10 md:mx-auto">
            <h2 className="text-5xl text-center font-bold">Services</h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
                {
                    services.map((service) => (
                        <div className="px-4 mt-6 grid">
                            <div className="bg-white p-6 rounded-lg shadow-xl">
                                <div className="flex justify-center">
                                    <img src={service.image} alt="Image Here" className="w-50" />
                                </div>
                                <h4 className="my-2 text-gray-600 text-2xl font-semibold uppercase text-center leading-tight truncate">{service.title}</h4>

                                <div className="mt-4">
                                    <span className="text-green-600 text-3xl font-semibold">Fees: {service.price} TK</span>
                                </div>
                                <div>
                                    <span className="text-gray-800 my-2 text-sm text-justify p-2 inline-block rounded-lg tracking-wide">
                                        {service.description}
                                    </span>
                                </div>
                                <div className="flex justify-center">
                                    <Link to="/checkout">
                                        <button className="px-5 py-2 bg-slate-700 rounded font-semibold text-white hover:bg-slate-100  hover:text-gray-800 transition-colors">Proceed Checkout</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    );
};

export default Services;