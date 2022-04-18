import { Link } from "react-router-dom";

const achievements = [
    {
        image: "https://mdrashadul-rimon.github.io/service-images/ach-1.png",
    },
    {
        image: "https://mdrashadul-rimon.github.io/service-images/ach-2.png",
    },
    {
        image: "https://mdrashadul-rimon.github.io/service-images/ach-3.png",
    },
    {
        image: "https://mdrashadul-rimon.github.io/service-images/ach-4.png",
    },

];
const Achievements = () => {
    return (
        <div className="md:container my-10 md:mx-auto">
            <h2 className="text-5xl text-center font-bold">Achievements</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-8">
                {
                    achievements.map((achievement) => (
                        <div className="grid px-4 mt-6">
                            <div className="grid p-6 justify-center items-center rounded-lg shadow-xl">
                                <div className="flex justify-center items-center hover:scale-125 transition ease-linear hover:transition hover:ease-in">
                                    <img src={achievement.image} alt="Image Here" className="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Link to="/about">
                    <button className="px-5 py-2 bg-slate-700 rounded font-semibold text-white hover:bg-slate-100  hover:text-gray-800 transition-colors">Show All Achievements</button>
                </Link>
            </div>
        </div>
    );
};

export default Achievements;