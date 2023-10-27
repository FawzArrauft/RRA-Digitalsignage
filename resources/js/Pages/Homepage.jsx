import React, { useState, useEffect } from "react";

import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    // Close the popup and remove the blur when clicking outside the popup
    const closePopupOnOutsideClick = (e) => {
        if (isPopupOpen) {
            if (!document.getElementById("popupMenu").contains(e.target)) {
                setPopupOpen(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", closePopupOnOutsideClick);
        return () => {
            window.removeEventListener("mousedown", closePopupOnOutsideClick);
        };
    }, [isPopupOpen]);

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <Head title={props.title} />
            <div className="relative">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-1200px-Burger_King_-_Angus_XT_Burger.tiff.png"
                    alt="burger"
                    className="block mx-auto"
                />
                <div className="grid grid-row-3 gap-[35px] sm:gap-[50px] sm:transform -translate-y-14 md:gap-[110px] md:-translate-y-24 xl:gap-[110px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 z-10">
                    <button
                        className="rounded-full bg-gray-100 border-4 border-black w-5 h-5 flex items-center justify-center cursor-pointer"
                        onClick={togglePopup}
                    ></button>
                    <button
                        className="rounded-full bg-gray-100 border-4 border-black w-5 h-5 flex items-center justify-center cursor-pointer"
                        onClick={togglePopup}
                    ></button>
                    <button
                        className="rounded-full bg-gray-100 border-4 border-black w-5 h-5 flex items-center justify-center cursor-pointer"
                        onClick={togglePopup}
                    ></button>
                </div>

                {isPopupOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-lg z-20">
                        <div
                            id="popupMenu"
                            className="relative bg-white p-4 shadow-md rounded-md"
                        >
                            <div className="w-[500px] mx-auto">
                                <img
                                    src="https://georgiagrown.com/wp-content/uploads/2020/01/alternating_fruitsveg-lettuce-1.jpg"
                                    alt="popup-image"
                                    className=""
                                />
                            </div>
                            <h1 className="text-black text-lg font-bold mt-4">TITLE</h1>
                            <p className="text-black text-md font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, placeat!</p>
                            <button
                                className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
                                onClick={togglePopup}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

