import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function handleform(obj) {
    console.log(obj);
    alert("Registered successfully");
    reset();
  }
  return (
    <div className="cont">
      <h1 className="display-4">Registration Form</h1>
      <form
        action=""
        onSubmit={handleSubmit(handleform)}
        className="w-50 mx-auto"
      >
        <div className="d-flex">
          <div className="head">
            <label htmlFor="fir">First Name</label>
            <input
              type="text"
              {...register("fir", {
                required: true,
                minLength: 4,
                maxLength: 6,
              })}
              id="fir"
            />
            {errors.fir?.type === "required" && (
              <p className="text-danger">First Name is required</p>
            )}
            {errors.fir?.type === "minLength" && (
              <p className="text-danger">
                First Name should be atleast 4 characters
              </p>
            )}
            {errors.fir?.type === "maxLength" && (
              <p className="text-danger">
                First Name should be atmost 6 characters
              </p>
            )}
          </div>
          <div className="head">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              {...register("last", {
                required: true,
                minLength: 4,
                maxLength: 6,
              })}
              id="last"
            />
            {errors.last?.type === "required" && (
              <p className="text-danger">Last Name is required</p>
            )}
            {errors.last?.type === "minLength" && (
              <p className="text-danger">
                Last Name should be atleast 4 characters
              </p>
            )}
            {errors.last?.type === "maxLength" && (
              <p className="text-danger">
                Last Name should be atmost 6 characters
              </p>
            )}
          </div>
        </div>
        <div className="d-flex">
          <div className="head">
            <label htmlFor="birth">Birthday</label>
            <input
              type="date"
              {...register("birth", { required: true })}
              id="birth"
            />
            {errors.birth?.type === "required" && (
              <p className="text-danger">Birthday is required</p>
            )}
          </div>
          <div>
            <label htmlFor="gen">Gender</label>
            <div className="head1">
              <input
                type="radio"
                {...register("gen", { required: true })}
                id="gen"
              />
              <label htmlFor="gen">Male</label>
              <input
                type="radio"
                {...register("gen", { required: true })}
                id="gen"
              />
              <label htmlFor="gen">Female</label>
            </div>
            {errors.gen?.type === "required" && (
              <p className="text-danger">Gender is required</p>
            )}
          </div>
        </div>
        <div className="d-flex">
          <div className="head">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">Email is required</p>
            )}
          </div>
          <div className="head">
            <label htmlFor="num">Phone Number</label>
            <input
              type="number"
              {...register("num", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              id="num"
            />
            {errors.num?.type === "required" && (
              <p className="text-danger">Phone Number is required</p>
            )}
            {errors.num?.type === "minLength" && (
              <p className="text-danger">Phone Number should be 10 digits</p>
            )}
            {errors.num?.type === "maxLength" && (
              <p className="text-danger">Phone Number should be 10 digits</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="dropdown">Subject</label>
        </div>
        <select
          className="menu"
          {...register("dropdown", {
            required: true,
            validate: (value) => value !== "0",
          })}
          id="sub"
          aria-placeholder="Choose"
        >
          <option value="">Choose</option>
          <option value="1">Subject 1</option>
          <option value="2">Subject 2</option>
          <option value="3">Subject 3</option>
        </select>
        {errors.dropdown?.type === "required" && (
          <p className="text-danger">Subject is required</p>
        )}

        <input type="submit" name="submit" id="submit" />
      </form>
    </div>
  );
}

export default App;
