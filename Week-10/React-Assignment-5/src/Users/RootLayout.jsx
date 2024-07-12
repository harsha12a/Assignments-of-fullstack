import { useForm } from "react-hook-form";
import { useState } from "react";
function RootLayout() {
  const { register, handleSubmit } = useForm();
  const [user, setuser] = useState([]);
  function handleform(obj) {
    setuser([...user, obj]);
  }
  return (
    <div>
      <h1 className="text-center text-primary bg-dark p-5">Register</h1>
      <div className="container">
        <form className="w-75 mx-auto mt-5" onSubmit={handleSubmit(handleform)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              required
              type="text"
              {...register("username")}
              className="form-control p-3"
              id="username"
              minLength={4}
              maxLength={8}
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              required
              type="date"
              {...register("dob")}
              className="form-control p-3"
              id="dob"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              required
              type="text"
              {...register("city")}
              className="form-control p-3 mb-5"
              id="city"
              placeholder="City"
            />
          </div>
          <button type="submit" className="btn btn-success mb-5 w-100">
            Submit
          </button>
        </form>
      </div>
      {user.length > 0 && (
        <div>
          <h2 className="text-center text-primary p-5 bg-dark my-5">
            List of Registered Users
          </h2>
          <table className="table table-bordered m-5 w-75 mx-auto text-center align-items-center">
            <thead className="p-2">
              <tr>
                <th>Username</th>
                <th>Date of birth</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {user.map((a) => {
                return (
                  <tr key={a.username}>
                    <td>{a.username}</td>
                    <td>{a.dob}</td>
                    <td>{a.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default RootLayout;
