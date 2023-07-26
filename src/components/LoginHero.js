import React from "react";

export default function LoginHero() {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-dark">
        <h1 className="fw-bold text-center text-warning">
          Unlock your world with a single click.
        </h1>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-warning mb-3">
              Gateway to Your Dreams: Step into a World of Wonders with Seamless
              Access!
            </h1>
            <p className="col-lg-10 fs-4 text-white">
              Unlock Your World: Access with Ease, Embrace the Adventure.
              Welcome Back to Your Hub of Possibilities!
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <div className="form-floating">
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  />
                  <datalist id="datalistOptions">
                    <option value="Avatar123"></option>
                    <option value="ThePsychoKid9"></option>
                    <option value="BladeFrame99"></option>
                    <option value="CaptainCliche200"></option>
                    <option value="RemedialRioter98"></option>
                  </datalist>
                  <label htmlFor="floatingInputGroup1">Username</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Log In
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
