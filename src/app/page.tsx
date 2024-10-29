"use client"
import Image from "next/image";
export default function Home() {

    function test(){
        alert("Hello World!");
    }
    return(
      <>
          <section className="home_history">
              <div className="home_div_image">
                  <Image  src="/logos/logo-W2C.png" alt="une image" width={10} height={10}/>
              </div>
              <div>
                  <h2>mon histoire</h2>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos
                      quae praesentium repellat officia maxime deleniti placeat libero, tenetur
                      omnis magni accusantium est consequatur? Ab corrupti repudiandae similique
                      atque ipsa.
                  </p>

                  <button onClick={test}>COMMANDER</button>
              </div>
              <div className="home_div_image">
                  <Image  src="/logos/logo-W2C.png" alt="une image" width={10} height={10}/>
              </div>
          </section>

          <section className="home_social_media">
              <div className="home_div_image">
                  <Image  src="/logos/logo-W2C.png" alt="une image" width={10} height={10}/>
              </div>
              <div>
                  <a href="" target="_blank">
                      <i className="fa-brands fa-square-facebook fa-4x"></i
                      ></a>
                  <p>White Cat Cookies</p>
              </div>
              <div>
                  <i className="fa-solid fa-square-phone fa-4x"></i>
                  <p>06.20.62.07.69</p>
              </div>
              <div>
                  <i className="fa-brands fa-square-instagram fa-4x"></i>
                  <p>white_cat_cookies</p>
              </div>
              <div className="home_div_image">
                  <Image  src="/logos/logo-W2C.png" alt="une image" width={10} height={10}/>
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