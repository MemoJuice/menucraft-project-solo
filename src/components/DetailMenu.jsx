export default function DetailMenu() {
  return (
    <div className="relative">
        <img
          className="object-cover object-center w-full h-200"
          src="https://media.gettyimages.com/id/1139252953/video/apple-pie.jpg?s=640x640&k=20&c=l-Fjh5EJsAxGmzgvGcMgujmKoW-7rNLIhyC4UYOjXHc="
        />
        <div className="absolute inset-90 flex-col text-center ">
        <p className="text-5xl font-bold mb-10 ">Discover What to Cook Today</p>
        <button className="px-6 py-3 text-2xl text-yellow-50 bg-black font-medium rounded-3xl ">View The Menu</button>
        </div>
    </div>
  );
}
