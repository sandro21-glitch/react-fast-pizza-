import { useSelector } from "react-redux";
import UsernameInput from "../components/UsernameInput";
import { Link } from "react-router-dom";
const Home = () => {
  const { userName } = useSelector((store) => store.user);
  return (
    <section className="section h-screen">
      <div className=" text-center my-20">
        <h1 className="font-bold leading-[2.5rem] mb-10 text-[1.5rem] md:text-[2rem]">
          The best pizza. <br />
          <span className="text-lightYellow opacity-90">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <UsernameInput />
        {userName && (
          <Link
            to={"/menu"}
            className="capitalize bg-lightYellow rounded-3xl p-4 font-bold focus:outline outline-yellow-300 focus:outline-offset-4 hover:opacity-80 transition-opacity ease-in duration-100"
          >
            continue ordering, {userName}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Home;
