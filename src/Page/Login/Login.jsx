const Login = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mt-6">Welcome Back</h1>
      <p className="text-gray-500 mb-8">Login with Profast to continue</p>

      <div className="card bg-base-100 w-full max-w-sm shadow-md border border-gray-100 rounded-xl">
        <div className="card-body">
          <fieldset className="fieldset space-y-4">
            <div>
              <label className="label text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="input w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="label text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="input w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94A3B8] focus:border-[#94A3B8] focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 px-3 py-2"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <a className="link link-hover text-[#94A3B8]">Forgot password?</a>
            </div>

            <button className="btn bg-[#CAEB66] text-gray-800 font-semibold border-none mt-4 px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-300 w-full">
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
