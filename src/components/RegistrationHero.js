import React from "react";

export default function RegistrationHero() {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-dark">
        <h1 className="fw-bold text-center text-warning">
          Unlock deals, shop now, and save big!
        </h1>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-warning mb-3">
              Join the Fun: Unleash Your Potential Today!
            </h1>
            <p className="col-lg-10 fs-4 text-white">
              Join the excitement today! Sign up and unlock endless
              possibilities. Your journey starts here. Don't miss out - register
              now!
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="input-group">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    placeholder="Username"
                    id="floatingInputGroup2"
                  />
                  <label htmlFor="floatingInputGroup2">FirstName</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    placeholder="Username"
                    id="floatingInputGroup3"
                  />
                  <label htmlFor="floatingInputGroup3">LastName</label>
                </div>
              </div>
              <div className="row input-group mb-3">
                <div className="col-md-4">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="primary-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="primary-outlined"
                  >
                    Male
                  </label>
                </div>
                <div className="col-md-5">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="warning-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning"
                    htmlFor="warning-outlined"
                  >
                    Female
                  </label>
                </div>
                <div className="col-md-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="secondary-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="secondary-outlined"
                  >
                    Other
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">DOB</span>
                <input
                  type="date"
                  aria-label="Date of Birth"
                  className="form-control"
                />
              </div>
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
              <div className="input-group mb-3">
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingInputGroup4"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="floatingInputGroup4">Phone Number</label>
                </div>
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
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave your 1st address here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea">Address 1</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave your 2nd address here"
                  id="floatingTextarea1"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea1">Address 2</label>
              </div>
              <div className="row mb-3">
                <div class="form-floating col-md-6">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Bhubaneswar</option>
                    <option value="1">Cuttack</option>
                    <option value="2">Rourkela</option>
                    <option value="3">Puri</option>
                  </select>
                  <label for="floatingSelect">City</label>
                </div>
                <div class="form-floating col-md-6">
                  <select
                    class="form-select"
                    id="floatingSelect1"
                    aria-label="Floating label select example"
                  >
                    <option selected>Odisha</option>
                    <option value="1">Mumbai</option>
                    <option value="2">Chennai</option>
                    <option value="3">Kolkata</option>
                  </select>
                  <label for="floatingSelect1">State</label>
                </div>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
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
