import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ItemContext } from '../ContextApi/ItemContext'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const { ItemData } = useContext(ItemContext)
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const [mealDetails, setMealDetails] = useState([{ strMealThumb: "", strInstructions: "", strIngredient1: "" }])



  const getMealDetail = async (e) => {

    let searchId = e.currentTarget.id;

    await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchId}`)
      .then(res => res.data)
      .then(data => setMealDetails(data.meals[0]))
    setOpen(!open)
  }

  return (
    <>
      <div className='mx-auto p-5 flex justify-between container'>
        <h1 className='font-bold text-sky-600 font-serif text-6xl px-16'>AR </h1>
        <div class="flex items-center border-b border-orange-500 py-2 ">
          <input onChange={(e) => setSearch(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" placeholder="search" />
        </div>
      </div>
      <div className='text-center font-bold  text-teal-500'>
        <h2>Food is symbolic of love when words are inadequate</h2>
        <h3 className='italic'>- Alan D. Wolfelt</h3>
      </div>
      <div className='container mx-auto py-16 '>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ' >
          {ItemData.slice(0, 10).filter(item => {
            if (search === "") {
              return item
            }
            else if (item.strMeal.toLowerCase().includes(search.toLowerCase())) {
              return item
            }

          })
            .map((item) =>
              <div className='shadow-lg rounded-lg w-64' key={item.idMeal}>
                <img className='rounded-t-lg object-cover h-48 w-64' src={item.strMealThumb} alt="" />
                <h3 className='text-xl font-bold text-slate-700 p-5 mb-3'>{item.strMeal}</h3>
                <div className='flex justify-center pb-2'>
                  <button
                    type="button"
                    className="inline-block rounded bg-orange-700 px-6 pt-2.5 pb-2 text-xs font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  "
                    data-te-toggle="modal"
                    data-te-target="#exampleModalCenteredScrollable"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    id={item.idMeal}
                    onClick={getMealDetail}
                  >
                    Get Meal
                  </button>
                </div>

              </div>
            )}
        </div>

        {open &&
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">

                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{mealDetails.strMeal}</h3>
                        <div class="mt-2">
                          <img className='object-cover h-48 w-full' src={mealDetails.strMealThumb} alt='' />
                          <h5 className='font-bold'>Main Ingrediants:
                            <span> {mealDetails.strIngredient1}
                            </span>
                          </h5>
                          <h5 className='font-bold'>Instructions: </h5>
                          <p class="text-sm text-gray-500 overflow-hidden h-32">{mealDetails.strInstructions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button"
                      onClick={() => navigate("/checkout")}
                      class="inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >Checkout</button>
                    <button type="button"
                      onClick={() => setOpen(false)}
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}


