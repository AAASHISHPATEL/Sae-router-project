import React from 'react'
import {Link} from 'react-router-dom'


function Signin() {
  return (
    <>
    {/* <div className='container '>
      <form className="row g-3 m-5 p-5">
        <div className="col-md-6">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder='Ashish Patel'/>
  </div>
  <div className="col-md-6">
    <label for="Username" className="form-label">Username</label>
    <input type="username" className="form-control" id="inputEmail4" placeholder='ashish#1234'/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign up</button>
  </div>
</form></div> */}

<section className='container'>
  <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <div className="mb-2 flex justify-center">
       <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0  text-dark text-decoration-none">
          <h1>Your logo</h1>
        </Link>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
      <p className="mt-2 text-center text-base text-gray-600">
        Already have an account?
        <Link to="login" className="font-medium text-black transition-all "> Sign In </Link>
      </p>
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
          <div>
            <label for="name" className="text-base font-medium text-gray-900"> Full Name </label>
            <div className="mt-2">
              <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Full Name" id="name" />
            </div>
          </div>
          <div>
            <label for="email" className="text-base font-medium text-gray-900"> Email address </label>
            <div className="mt-2">
              <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email" id="email" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="text-base font-medium text-gray-900"> Password </label>
            </div>
            <div className="mt-2">
              <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="password" placeholder="Password" id="password" />
            </div>
          </div>
          <div>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
              Create Account
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3 space-y-3">
        <button type="button" className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
          <span className="mr-2 inline-block">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </span>
          Sign up with Google
        </button>
        <button type="button" className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
          <span className="mr-2 inline-block">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
          </span>
          Sign up with Facebook
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Signin;
