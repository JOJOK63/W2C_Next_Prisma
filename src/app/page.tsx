"use client"
import { FaFacebookSquare, FaPhoneSquare, FaInstagramSquare,FaUserFriends,FaTruck  } from "react-icons/fa";
import { LiaCookieSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    function test(){
        alert("Hello World!");
    }
    return(
      <>
          <section className="pb-10">
              <div>
                  <Image  src="/products/cookies_fourres.jpg" alt="cookies" width={150} height={150} className="m-auto"/>
              </div>
              <div className="w-[80%] m-auto ">
                  <h2 className="uppercase font-bold text-center text-titleColor mt-6 mb-6">mon histoire</h2>
                  <p className="text-center mt-6 mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos
                      quae praesentium repellat officia maxime deleniti placeat libero, tenetur
                      omnis magni accusantium est consequatur? Ab corrupti repudiandae similique
                      atque ipsa.
                  </p>

                  <div className="flex justify-center mt-6 mb-6">
                      <button className="p-2 bg-buttonColor rounded-md text-sm ">
                          <Link href="/products">
                              COMMANDER
                          </Link>
                      </button>
                  </div>
              </div>
              <div className="home_div_image">
                  <Image src="/products/madeleines_brossard.jpg" alt="madeleines" width={150} height={150} className="m-auto"/>
              </div>
          </section>

          <section className="flex flex-col justify-center items-center space-y-10 bg-white pt-10 pb-10">
              <div>
                  <Image src="/products/sables_coeur.webp" alt="madeleines" width={150} height={150} className="m-auto"/>
              </div>

              <h2 className="uppercase font-bold text-center text-titleColor mt-6 mb-6">NOS RÉSEAUX</h2>

              {/* Icône Facebook */}
              <div className="flex flex-col justify-center items-center gap-y-1.5 hover:cursor-pointer">
                  <a href="https://www.facebook.com/search/top?q=white%20cat%20cookies" target="_blank"
                     rel="noopener noreferrer">
                      <FaFacebookSquare className="text-iconColor hover:text-textColor fa-4x m-auto" size={40}/>
                      <p>White Cat Cookies</p>
                  </a>
              </div>

              {/* Icône Téléphone */}
              <div className="flex flex-col justify-center items-center gap-y-1.5 ">
                  <FaPhoneSquare className="text-iconColor fa-4x" size={40}/>
                  <p>06.20.62.07.69</p>
              </div>

              {/* Icône Instagram */}
              <div className="flex flex-col justify-center items-center gap-y-1.5 hover:cursor-pointer">
                  <a href="https://www.instagram.com/white_cat_cookies/" target="_blank" rel="noopener noreferrer">
                      <FaInstagramSquare className="text-iconColor hover:text-textColor fa-4x m-auto" size={40}/>
                      <p>white_cat_cookies</p>
                  </a>
              </div>
              <div className="home_div_image">
                  <Image src="/products/minis_cookies.jpg" alt="madeleines" width={150} height={150} className="m-auto"/>
              </div>
          </section>

          <section className="pt-10 pb-10">
              <div className="w-[90%] m-auto">
                  <div className="text-center mb-6">
                      <FaTruck className="m-auto mb-2"size={60}/>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur.
                      </p>
                  </div>
                  <div className="mb-6">
                      <LiaCookieSolid className="m-auto mb-2" size={60}/>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur.
                      </p>
                  </div>
                  <div className="mb-6">
                      <FaUserFriends className="m-auto mb-2" size={60}/>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                          dignissimos quae praesentium repellat officia maxime deleniti placeat
                          libero, tenetur.
                      </p>
                  </div>
                  <div className="mb-6 text-center">
                      <button className="p-2 bg-buttonColor rounded-md text-sm">
                          <Link href="/products">
                              CONTACTER
                          </Link>
                      </button>
                  </div>
              </div>
          </section>
      </>
    )
}