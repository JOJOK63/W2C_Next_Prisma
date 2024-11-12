"use client"
import { FaFacebookSquare, FaPhoneSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
export default function Home() {

    function test(){
        alert("Hello World!");
    }
    return(
      <>
          <section className="">
              <div className="">
                  <Image  src="/products/cookies_fourres.jpg" alt="une image" width={200} height={100} className="m-auto"/>
              </div>
              <div className="w-[80%] m-auto">
                  <h2 className="uppercase text-center mt-2.5 mb-2.5">mon histoire</h2>
                  <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos
                      quae praesentium repellat officia maxime deleniti placeat libero, tenetur
                      omnis magni accusantium est consequatur? Ab corrupti repudiandae similique
                      atque ipsa.
                  </p>

                  <div className="flex justify-center mt-4">
                      <button onClick={test} className="p-2 bg-buttonColor rounded-md">
                          COMMANDER
                      </button>
                  </div>
              </div>
              <div className="home_div_image">
                  <Image src="/products/madeleines_brossard.jpg" alt="une image" width={50} height={50} className=""/>
              </div>
          </section>

          <section className="flex flex-col justify-center items-center space-y-5 ">
              <div className="home_div_image">
                  <Image src="/logos/logo-W2C.png" alt="une image" width={50} height={50}/>
              </div>
                  {/* Icône Facebook */}
                  <div className="flex flex-col justify-center items-center gap-y-1.5 hover:cursor-pointer">
                      <a href="https://www.facebook.com/search/top?q=white%20cat%20cookies" target="_blank" rel="noopener noreferrer">
                          <FaFacebookSquare className="text-iconColor hover:text-textColor fa-4x" size={40}/>
                      </a>
                      <p>White Cat Cookies</p>
                  </div>

                  {/* Icône Téléphone */}
                  <div className="flex flex-col justify-center items-center gap-y-1.5 hover:cursor-pointer">
                      <FaPhoneSquare className="text-iconColor hover:text-textColor fa-4x" size={40}/>
                      <p>06.20.62.07.69</p>
                  </div>

                  {/* Icône Instagram */}
                  <div className="flex flex-col justify-center items-center gap-y-1.5 hover:cursor-pointer">
                      <a href="https://www.instagram.com/white_cat_cookies/" target="_blank" rel="noopener noreferrer">
                          <FaInstagramSquare className="text-iconColor hover:text-textColor fa-4x" size={40}/>
                      </a>
                      <p>white_cat_cookies</p>
                  </div>
              <div className="home_div_image">
              <Image src="/logos/logo-W2C.png" alt="une image" width={50} height={50}/>
              </div>
          </section>

          <section className="home_informations">
              <div>
                  <div className="home_informations_details">
                      <i className="fa-solid fa-truck fa-6x"></i>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur
                      </p>
                  </div>
                  <div className="home_informations_details">
                      <i className="fa-solid fa-cookie-bite fa-6x"></i>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur
                      </p>
                  </div>
                  <div className="home_informations_details">
                  <i className="fa-solid fa-people-line fa-6x"></i>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur
                      </p>
                  </div>
              </div>
              <div>
                  <button>NOUS CONTACTER</button>
              </div>
          </section>
      </>
    )
}