export default function Hero() {
  return (
    <div className="">
      <div className="flex gap-10 p-15">
        <img
          className="w-200 rounded-3xl shadow"
          src="https://www.shutterstock.com/image-photo/create-static-showing-chicken-curry-600nw-2648052515.jpg"
        />
        <section className="self-center text-2xl text-green-400 font-extrabold">
          <h1 className="text-5xl text-orange-400">Simple Recipes. Better Meals</h1>
          <br />
          <p className="text-xl text-green-400 font-extrabold">
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
