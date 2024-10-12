import AuthOperations from "@/services/auth";
import { login } from "@/store/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AquaInput from "../input";

export default function AquaAuthSignin() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSumbit = () => {
    event?.preventDefault();
    AuthOperations.adminLogin(data)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="AquaKart"
            src="https://res.cloudinary.com/aquakartproducts/image/upload/v1695408027/android-chrome-384x384_ijvo24.png"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSumbit} className="space-y-6">
            <AquaInput
              label="email"
              id="aqua-email"
              type="text"
              name="email"
              value={data.email}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />

            <AquaInput
              label="password"
              id="aqua-password"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
