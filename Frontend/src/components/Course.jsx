import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import {Link} from 'react-router-dom'
import axios from "axios";

function Course() {
  const [book, setBook] = useState([])

  useEffect(()=>{
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-40 text-center justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            laboriosam officia repellendus pariatur reprehenderit soluta maxime
            labore amet, fugiat dignissimos dolores, eius, a quidem iure
            perferendis consequatur distinctio tenetur sed! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Eligendi quis, consequatur
            beatae alias totam vitae deleniti amet quae rerum consequuntur
            voluptates aliquam animi esse reiciendis iusto itaque, eos cumque
            voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quod, minima animi ratione placeat eum vel nemo sint ad
            architecto excepturi aut quia facilis distinctio ipsa obcaecati quo
            molestiae exercitationem aliquam.
          </p>
          <Link to = "/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700 duration-300 mt-5">
                Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} > </Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
