import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../SideBar/NavBar";
import { useNavigate } from "react-router";

const Home = () => {
  const IsLoggedin = useSelector((state) => state.Auth.IsLoggedin);
  const navigate = useNavigate();

  return (
    <>
      {!IsLoggedin && <NavBar />}
      <header class="w-75 h-75 m-auto">
        <div class=" ">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-4 col-xxl-4">
              <div class="my-5 text-center text-lg-start">
                <h1 class=" fw-bolder mb-2">
                  Professional Email is good for business and you!.
                </h1>
                <p class="lead fw-normal -50 mb-4">
                  Our intuitive webmail portal gives you customizable widgets
                  for news, weather, sports and more. Previews look perfect
                  across all devices — mobile or otherwise.
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  {IsLoggedin && (
                    <button
                      class="btn btn-primary btn-lg px-4 me-sm-3"
                      onClick={() => navigate("/mailediter")}
                    >
                      <>Compose</>
                    </button>
                  )}
                  {!IsLoggedin && (
                    <button
                      class="btn btn-primary btn-lg px-4 me-sm-3"
                      onClick={() => navigate("/login")}
                    >
                      <>Login</>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div class="col-xxl-8 -block text-center">
              <img
                class="img-fluid rounded-3 "
                src="https://wallpaperaccess.com/full/1478194.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
