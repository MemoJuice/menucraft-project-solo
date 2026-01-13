import { Link } from "react-router";

export default function PreviewCulture() {
  return (
    <section className="w-full py-10">
        <div className="mx-auto max-w-7xl">
                <div className="carousel carousel-center bg-gray-50 max-w-7xl space-x-5  rounded-2xl ">
                    <div className="carousel-item w-70 h-70 ">
                        <img
                        src="https://media.timeout.com/images/105956654/750/422/image.jpg"
                        className="rounded-box object-cover  "/>
                    </div>
                    <div className="carousel-item w-70 h-70">
                        <img
                        src="https://www.travelsphere.co.uk/media/tbweizs1/italy_food_pizza_800x500.png?rmode=max&width=500&format=webp"
                        className="rounded-box object-cover" />
                    </div>
                    <div className="carousel-item  w-70 h-70">
                        <img
                        src="https://blog.swiggy.com/wp-content/uploads/2024/09/Image-1_-Pad-Thai-1024x538.png"
                        className="rounded-box object-cover " />
                    </div>
                    <div className="carousel-item  w-70 h-70">
                        <img
                        src="https://nomadparadise.com/wp-content/uploads/2021/12/thai-food-11-1024x683.jpg"
                        className="rounded-box object-cover " />
                    </div>
                    <div className="carousel-item  w-70 h-70">
                        <img
                        src="https://www.charnveeresortkhaoyai.com/wp-content/uploads/2024/07/May-4-northern-thailand-02-scaled.jpg"
                        className="rounded-box object-cover " />
                    </div>
                    <div className="carousel-item  w-70 h-70">
                        <img
                        src="https://japanspecialist.com/documents/465938/955401/3_Gyudon.jpg"
                        className="rounded-box object-cover " />
                    </div>
                    <div className="carousel-item  w-70 h-70">
                        <img
                        src="https://www.marionskitchen.com/wp-content/uploads/2019/07/Chicken-Katsu-Curry4.jpg"
                        className="rounded-box object-cover " />
                    </div>
                </div>
            </div>
    </section>
  )
}
