import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="">
      <div className="flex gap-10 pl-30 pr-20 py-10">
        <img
          className="w-200 rounded-3xl shadow"
          src="https://www.shutterstock.com/image-photo/create-static-showing-chicken-curry-600nw-2648052515.jpg"
        />
        <section className="self-center pl-10">
          <p className="text-6xl text-green-800 font-extrabold ">MenuCraft</p>
          <br />
          <h1 className="text-5xl text-gray-800 font-bold">Simple Recipes. Better Meals</h1>
          <br />
          <p className="text-xl text-gray-800  font-extrabold">
            Cooking Made Simple, Every Day MenuCraft helps you turn cooking into
          an easy and enjoyable experience. Discover recipes, ingredients, and
          step-by-step guides designed for everyone — from beginners to food
          lovers.
          </p>
        </section>
      </div>
    </div>
  );
}
