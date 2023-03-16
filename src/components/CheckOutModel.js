import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CheckOutModel = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [Error, setError] = useState(false)
  const [inputs, setIputs] = useState({ full_name: "", email: "", phone: "", address: "", city: "", country: "", state: "", zipcode: "" })


  const handlesubmit = () => {

    if (inputs.address.length !== 0 && inputs.email.length !== 0 && inputs.city.length !== 0
      && inputs.country.length !== 0 && inputs.full_name.length !== 0 && inputs.phone.length !== 0
      && inputs.state.length !== 0 && inputs.zipcode.length !== 0) {
      setOpen(true)
    }
    else {
      setError(true)
    }

  }

  const handleChange = (e) => {
    e.preventDefault();
    setIputs({
      ...inputs,
      [e.target.name]: e.target.value.trim()
    });
  }



  return (
    <>

      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input value={inputs.fullname} onChange={handleChange} name="full_name" id="full_name" required class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input type="text" name="email" value={inputs.Email} onChange={handleChange} id="email" required class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Phone number</label>
                      <input type="number" name="phone" value={inputs.phone} onChange={handleChange} id="phone" required class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="1234567890" />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      <input type="text" name="address" value={inputs.Address} onChange={handleChange} id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" required />
                    </div>

                    <div class="md:col-span-2">
                      <label for="city">City</label>
                      <input type="text" name="city" value={inputs.city} onChange={handleChange} id="city" required class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="country">Country / region</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="country" id="country" value={inputs.country} onChange={handleChange} required placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="state" id="state" value={inputs.state} onChange={handleChange} required placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-1">
                      <label for="zipcode">Zipcode</label>
                      <input type="number" name="zipcode" value={inputs.zipcode} onChange={handleChange} id="zipcode" required class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>


                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-orange-700 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded" onClick={handlesubmit}>Place order</button>
                      </div>
                      {Error && <p className='text-red-500 font-medium'>!!! Please Fill the Inputs</p>}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open &&
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">


              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>

                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Order placed Succeessfully</h3>

                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={() => navigate("/")}
                    type="button" class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto">
                    Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

