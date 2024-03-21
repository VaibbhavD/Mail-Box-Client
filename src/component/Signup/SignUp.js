import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Store/AuthSlice";
import { Link } from "react-router-dom";
import NavBar from "../SideBar/NavBar";
import { SpinLoader } from "../UI/Loader";

const Signup = () => {
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const RePasswordRef = useRef();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);

  const SignUpHandler = async (e) => {
    e.preventDefault();
    setloader(true);
    const Email = EmailRef.current.value;
    const Password = PasswordRef.current.value;
    const RePassword = RePasswordRef.current.value;

    if (Password === RePassword) {
      const user = {
        email: Email,
        password: Password,
        returnSecureToken: true,
      };
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A",
        {
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setloader(false);
        dispatch(AuthActions.Login(data.idToken));
        alert("Sign Up SuccessFull !");
      } else {
        const data = await res.json();
        setloader(false);
        alert(data.error.message);
      }
    } else {
      alert("Password Doesn't Match !");
    }
  };

  return (
    <>
      <NavBar />
      <section class="h-screen">
        <div class="container pt-3">
          <div class=" row d-flex justify-content-center align-items-center">
            <div class="  col-lg-10 col-xl-8">
              <div class="  card text-black">
                <div class="card-body ">
                  <div class="row justify-content-center ">
                    <div class="col-md-12 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form onSubmit={SignUpHandler} class="mx-1 ">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              ref={EmailRef}
                              required
                            />
                            <label class="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              ref={PasswordRef}
                              required
                            />
                            <label class="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class=" d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              ref={RePasswordRef}
                              required
                            />
                            <label class="form-label" htmlFor="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            class="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            {loader && <>{SpinLoader}</>}
                            {!loader && <>Register</>}
                          </button>
                        </div>
                        <p className="text-center">
                          Already Have An Account?
                          <Link class="text-black" to={"/login"}>
                            {" "}
                            Login
                          </Link>
                        </p>
                      </form>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5280.jpg?w=740&t=st=1708834122~exp=1708834722~hmac=9c3136adc44b109ae4474002d1ddbe2ebc25e0c4fa973194af4e2bcb8ef30559"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
