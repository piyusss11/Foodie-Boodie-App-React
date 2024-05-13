import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BOY_URL } from "../utils/constants";

function About() {
  return (
    <main className="mx-20 ">
      <section className="mt-12  flex justify-center ">
        <div className=" flex flex-col justify-center">
          <h1 className="text-3xl mb-8 font-bold hover:text-yellow-500 cursor-default">
            About Us
          </h1>
          <p>
            Welcome to Foodie Boodie, your go-to destination for delicious food
            delivered right to your doorstep. Founded on the belief that great
            food should be accessible to everyone, we strive to connect food
            lovers with the best restaurants in town.
          </p>
        </div>
        <div className=" flex justify-center">
          <img className="w-52" src={BOY_URL} alt="boy"></img>
        </div>
      </section>
      <section className="flex mt-12 gap-20 justify-center">
        <div className="border-2 border-black h-80 w-80 rounded-xl shadow-xl flex flex-col items-center px-6 ">
          <h1 className="text-3xl my-5 font-semi hover:text-yellow-500 cursor-default">
            Our Mission
          </h1>
          <p>
            At Foodie Boodie, our mission is simple: to make food ordering easy,
            convenient, and delightful for everyone. We are committed to
            providing a seamless experience that brings joy to our customers'
            lives and supports local restaurants.
          </p>
        </div>
        <div className="border-2 border-black h-80 w-80 rounded-xl shadow-xl flex flex-col items-center px-6 ">
          <h1 className="text-3xl my-5 font-semi hover:text-yellow-500 cursor-default">
            What We Offer
          </h1>
          <p>
            With our easy-to-use platform, you can explore a wide range of
            cuisines and dishes from top-rated restaurants in your area. Whether
            you're craving comfort food, exploring new flavors, or looking for a
            quick bite, we've got you covered.
          </p>
        </div>
      </section>
      <section className="mt-20 ">
        <div className="my-8">
          <h1 className="text-3xl mb-6 font-bold hover:text-yellow-500 cursor-default">
            Why Choose Us?
          </h1>
          <ul>
            <li>
              <span className="text-md font-bold">Wide Selection:</span> Choose
              from a diverse selection of restaurants and cuisines to satisfy
              any craving.
            </li>
            <li>
              <span className="text-md font-bold">Convenience: Order </span>
              from the comfort of your home or office, with quick and reliable
              delivery.
            </li>
            <li>
              <span className="text-md font-bold">Quality Assurance:</span> We
              partner with only the best restaurants to ensure that every meal
              is fresh, delicious, and made with care.
            </li>
            <li>
              <span className="text-md font-bold">Exceptional Service:</span>{" "}
              Our customer support team is here to assist you every step of the
              way, ensuring a hassle-free experience.
            </li>
          </ul>
        </div>
        <div className="my-8">
          <h1 className="text-3xl mb-6 font-bold hover:text-yellow-500 cursor-default">
            Our Commitment to Sustainability
          </h1>
          <p>
            At Foodie Boodie, we are committed to sustainability and reducing
            our environmental impact. We partner with eco-friendly restaurants
            and prioritize environmentally friendly packaging to minimize waste.
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-6 font-bold hover:text-yellow-500 cursor-default">
            Join Us in Making a Difference
          </h1>
          <p>
            Join us in our mission to support local restaurants, reduce food
            waste, and make food delivery more sustainable. Together, we can
            make a positive impact on our communities and enjoy great food along
            the way.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
