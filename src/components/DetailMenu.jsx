import { Link } from "react-router";

export default function DetailMenu() {
  return (
    <section className="flex w-auto">
      <div className="relative flex px-30 py-5">
        <img
          className="object-cover h-100 "
          src="https://media.istockphoto.com/id/1301094972/photo/hands-of-a-woman-holding-a-mobile-phone-above-a-cutting-board-full-of-vegetables.jpg?s=612x612&w=0&k=20&c=uLnPaPrhl3DnicrKZwvljxfxfv9sBjAmHxoqzS_-zmE="
        />
        <img
          className="object-cover h-100"
          src="https://media.istockphoto.com/id/809933218/photo/making-christmas-dinner.jpg?s=612x612&w=0&k=20&c=4UvJkQeX8ClZ-jf_o99HIz0JNNhyHHjg3k_AdzaqKpM="
        />
        <div className="absolute inset-33 flex-col text-center ">
          <p className="text-5xl font-bold mb-10 ">
            Discover What to Cook Today
          </p>
          <button
            class="btn"
            href="#"
            className="px-6 py-4 text-2xl text-yellow-50 bg-black font-medium rounded-2xl hover:bg-gray-900 "
          >
            View The Menu
          </button>
        </div>
      </div>
    </section>
  );
}
