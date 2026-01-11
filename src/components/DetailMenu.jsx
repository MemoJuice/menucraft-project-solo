export default function DetailMenu() {
  return (
    <div className="relative">
        <img
          className="object-cover w-full h-200"
          src="https://media.istockphoto.com/id/1301094972/photo/hands-of-a-woman-holding-a-mobile-phone-above-a-cutting-board-full-of-vegetables.jpg?s=612x612&w=0&k=20&c=uLnPaPrhl3DnicrKZwvljxfxfv9sBjAmHxoqzS_-zmE="
          width={500} height={500}
        />
        <div className="absolute inset-90 flex-col text-center ">
        <p className="text-5xl font-bold mb-10 ">Discover What to Cook Today</p>
        <button class="btn" href="#" className="px-6 py-4 text-2xl text-yellow-50 bg-black font-medium rounded-2xl hover:bg-gray-900 ">View The Menu</button>
        </div>
    </div>
  );
}
