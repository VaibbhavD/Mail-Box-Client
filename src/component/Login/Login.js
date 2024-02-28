import React, { useRef } from "react";
import { AuthActions } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    const Email = EmailRef.current.value;
    const Password = PasswordRef.current.value;

    const user = {
      email: Email,
      password: Password,
      returnSecureToken: true,
    };
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );
    if (res.ok) {
      const data = await res.json();
      dispatch(AuthActions.Login(data));
      alert("Login SuccessFull !");
      navigate("/");
    } else {
      const data = await res.json();
      alert(data.error.message);
    }
  };

  return (
    <section class="h-screen">
      <div class="container pt-5">
        <div class=" row d-flex justify-content-center align-items-center">
          <div class="  col-lg-10 col-xl-8 mt-5">
            <div class="  card text-black">
              <div class="card-body ">
                <div class="row justify-content-center ">
                  <div class="col-md-12 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form onSubmit={SignUpHandler} class="mx-1">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
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
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
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
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Login
                        </button>
                      </div>
                      <p className="text-center">
                        You Don't Have An Account?{" "}
                        <Link class="text-black" to={"/signup"}>
                          Sign Up
                        </Link>
                      </p>
                    </form>
                  </div>
                  <div class="col-md-8 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1708834373~exp=1708834973~hmac=a37cd460b40a3811b5e7b7ca6e9232e98e3ab9aeda7a22e36bb27ee5a64cd129"
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
  );
};
export default Login;
