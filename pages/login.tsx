const Login = () => {



    return ( 
        <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Login</h2>

        <form>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
            //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

         
          <div className="mb-6">
            <label className="block text-gray-700 mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
            //   onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-blue-800 transition"
          >
            Login
          </button>
        </form>

    
        <div className="text-center mt-4">
          <a href="/forgotpass" className="text-sm text-blue-500 hover:underline font-medium">
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-2">
          <span className="text-sm text-gray-600">Don’t have an account? </span>
          <a
            href="/signup"
            className="text-sm text-green-600 hover:underline font-medium"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
     );
}
 
export default Login;