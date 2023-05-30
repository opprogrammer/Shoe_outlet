<template>  
<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
           </button>
          <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                </button>
              </div>
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    Neil Sims
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>
  
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
     <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                 <span class="ml-3">Dashboard</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                 <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                 <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                 <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
           </li>
        </ul>
     </div>
  </aside>
  

  
  
      <div class="p-4 sm:ml-60 ">
        <div class="grid grid-flow-col auto-cols-max mt-2">
<div class="ml-9 justify-center mt-9"  >
  <p class="mt-2.5 mb-4 p-1 bg-gray-100 text-2xl flex justify-center  border-t-4 rounded-md border-green-500 ">Production </p>
    <div v-for=" item in shoe_production" :key="item._id" class="mb-6 flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img referrerpolicy="no-referrer" class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" :src="item.image_url" alt="" >
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">{{ item.supplier }}  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            {{ item.consumer }}
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: {{ item.batch_no }}</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ item.status }}</span>
            </p>
          
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: {{ item.eta }}</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    {{ item.last_update }}
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> {{ item.quantity_per }}</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">{{ item.quantity }}</p>
        </div>
    </div>

    <!--side drawwe-->
    <!-- <div id="drawer-right" class="mt-11 fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition duration-700 translate-x-full bg-white w-80 md:w-[900px] " tabindex="-1" aria-labelledby="drawer-right-label">
      <button type="button" data-drawer-hide="drawer-right-example-s1-1" aria-controls="drawer-right-example-s1-1" class="p-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm  absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
      <div>
      <div class="flex flex-col gap-2">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-11">
          <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select tab</label>
              <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Details</option>
                  <option>Order Pipeline</option>
                  <option>FAQ</option>
              </select>
          </div>
          <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
              <li class="w-full">
                  <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Details</button>
              </li>
              <li class="w-full">
                  <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Order Pipeline</button>
              </li>
              <li class="w-full">
                  <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
              </li>
          </ul>
          <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
              <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                <div class="flex justify-between items-center p-2 border-t-2 border-x-2">
                  <p class="text-lg font-bold">Supplier Information</p>
                    </div>
                    <div class="grid grid-cols-12 p-2 border-2">
                      <div class="col-span-12 md:col-span-6 text-lg">
                        <p class="text-gray-700">Name:</p>
                        <h3 class="font-bold mb-2">Bata</h3>
                        <p class="text-gray-700">Shoe to be deliverd:</p>
                        <h3 class="font-bold mb-2">Brown Leather shoes</h3>
                        <p class="text-gray-700">Quantity:</p>
                        <h3 class="font-bold mb-2">10</h3>
                        <p class="text-gray-700">Expected Delivery:</p>
                        <h3 class="font-bold mb-2">5 May,2023</h3>
                        </div>
                        <div class="col-span-12 md:col-span-6 text-lg">
                          <p class="text-gray-700">Amount:</p>
                          <h3 class="font-bold mb-2">10000 USD</h3>
                          <p class="text-gray-700">Margin:</p>
                          <h3 class="font-bold mb-2">30%</h3>
                          <p class="text-gray-700">Total Amount:</p>
                          <h3 class="font-bold mb-2">7000 USD</h3>
                          </div>
                          </div>
                          <div class="flex justify-between items-center p-2 border-t-2 border-x-2 mt-5">
                            <p class="text-lg font-bold">Consumer Details</p>
                            </div>
                            <div class="grid grid-cols-12 p-2 border-2">
                              <div class="col-span-12 md:col-span-6 text-lg">
                                <p class="text-gray-700">Name:</p>
                                <h3 class="font-bold mb-2">H&M</h3>
                                <p class="text-gray-700">Showed Ordered:</p>
                                <h3 class="font-bold mb-2">Brown Leather Shoes</h3>
                                <p class="text-gray-700">Quantity ordered:</p>
                                <h3 class="font-bold mb-2">10</h3>
                                </div>
                                <div class="col-span-12 md:col-span-6 text-lg">
                                  <p class="text-gray-700">Amount to be Paid:</p>
                                  <h3 class="font-bold mb-2">7000 USD</h3>
                                  <p class="text-gray-700">Profit Percentage:</p>
                                  <h3 class="font-bold mb-2">30%</h3>
                                  <p class="text-gray-700">Profit</p>
                                  <h3 class="font-bold mb-2">3000 USD</h3>
                                    </div>
                                    </div>
              </div>
              <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                   <p class="mt-2.5 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">Order Timeline</p>
        <ol class="relative text-2xl mt-9 ml-9 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
          <li class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </span>
              <h3 class="font-medium leading-tight">Order Received</h3>
          </li>
          <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </span>
              <h3 class="font-medium leading-tight">Order Accepted</h3>
          </li>
          <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
              </span>
              <h3 class="font-medium leading-tight">Order Proceessed</h3>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 class="font-medium leading-tight">Production</h3>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
          </span>
          <h3 class="font-medium leading-tight">Quality Assurance</h3>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
          </span>
          <h3 class="font-medium leading-tight">Packaging</h3>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
          </span>
          <h3 class="font-medium leading-tight">Shipment</h3>
        </li>
        
        </ol>
        
        <p class="p-2 border-x-2 border-t-2 text-lg font-bold">Comments</p>
        <div class="border-2 p-2 mb-9"><div class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Add Notes</div><div class="flex justify-between items-center my-2"><div class="flex items-center"><img class="w-12 h-12 rounded-full mr-1" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Rounded avatar"><div><p>Bogus Fakri</p><p class="text-xs texr-gray-600">13 May 2021 . 4:23 PM</p><p class="text-sm font-semibold">This one is very Good!!</p></div></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></div><hr><div class="flex justify-between items-center mt-2"><div class="flex items-center"><img class="w-12 h-12 rounded-full mr-1" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Rounded avatar"><div><p>Vlamidir jlanski</p><p class="text-xs texr-gray-600">13 May 2021 . 4:23 PM</p><p class="text-sm font-semibold">Wow!!!!!!! very Good!!</p></div></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></div></div>
              </div>
              <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                  <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                      <h2 id="accordion-flush-heading-1">
                          <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                          <span>What is Flowbite?</span>
                          <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                      </h2>
                      <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                          </div>
                      </div>
                      <h2 id="accordion-flush-heading-2">
                          <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                          <span>Is there a Figma file available?</span>
                          <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                      </h2>
                      <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                          <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                          <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                          </div>
                      </div>
                      <h2 id="accordion-flush-heading-3">
                          <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                          <span>What are the differences between Flowbite and Tailwind UI?</span>
                          <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                      </h2>
                      <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                          <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                          <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                              <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                              <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                          </ul>
                          </div>
                      </div>
                      </div>
              </div>
          </div>
        </div>
        </div>
        </div>
        </div> -->
    </div>

    <div class="ml-9 justify-center mt-9">
      <p class="mt-2.5 mb-4 p-1 bg-gray-100 text-2xl flex justify-center border-t-4 rounded-md border-yellow-500">Transit </p>
      <div v-for=" item in shoe_production" :key="item._id" @click="detail()" class="mb-6 flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img referrerpolicy="no-referrer" class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" :src="item.image_url" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">{{ item.supplier }}  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            {{ item.consumer }}
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: {{ item.batch_no }}</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ item.status }} 
            </span></p>
            
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: {{ item.eta }}</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    {{ item.last_update }}
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> {{ item.quantity_per }}</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">{{ item.quantity }}</p>
        </div>
    </div>
        </div>


       

        <div class="ml-9 justify-center mt-9">
          <p class="mt-2.5 mb-4 p-1 bg-gray-100 text-2xl flex justify-center  border-t-4 rounded-md border-red-500">Warehouse </p>
          <div v-for=" item in shoe_production" :key="item._id" class="mb-6 flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img referrerpolicy="no-referrer" class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" :src="item.image_url" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">{{ item.supplier }}  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            {{ item.consumer }}
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: {{ item.batch_no }}</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ item.status }}</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: {{ item.eta }}</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    {{ item.last_update }}
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> {{ item.quantity_per }}</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">{{ item.quantity }}</p>
        </div>
    </div>
          </div>

          <div class="ml-9 justify-center mt-9">
            <p class="mt-2.5 mb-4 p-1 bg-gray-100 text-2xl flex justify-center  border-t-4 rounded-md border-blue-500">Customer </p>
            <div v-for=" item in shoe_production" :key="item._id" class="mb-6 flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img referrerpolicy="no-referrer" class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" :src="item.image_url" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">{{ item.supplier }}  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            {{ item.consumer }}
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: {{ item.batch_no }}</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{{ item.status }}</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: {{ item.eta }}</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    {{ item.last_update }}
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> {{ item.quantity_per }}</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">{{ item.quantity }}</p>
        </div>
    </div>
            </div>

    
      </div> 
</div>

<!--<div class="p-4 sm:ml-60 ">
  <div class="grid grid-flow-col auto-cols-max mt-2">
<div class="ml-9 justify-center mt-1">
<div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format" alt="">
  <div class="ml-2.5 flex flex-col item-center">
      <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
      <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      H&M
      </p> 
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
      <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
      </p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
          <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
              2 days ago
            </span>
      </p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
      <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
          <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
        </div>
        <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
  </div>
</div>
</div>

<div class="ml-9 justify-center mt-1">
  <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg border border-gray-400 h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16877500/2022/1/31/e5ef3a1b-e75e-4aee-abda-41cecae060311643603238802-Louis-Philippe-Men-Black-Leather-Solid-Formal-Oxfords-344164-1.jpg" alt="">
      <div class="ml-2.5 flex flex-col item-center">
          <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
          <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          H&M
          </p> 
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
          <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
          </p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
              <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                  2 days ago
                </span>
          </p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
          <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
            </div>
            <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
      </div>
  </div>
  </div>

  <div class="ml-9 justify-center mt-1">
    <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 border border-gray-300 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://media.gettyimages.com/id/172730246/photo/step-in-to-a-new-career-shoes.jpg?s=612x612&w=gi&k=20&c=D6e0dAUnJSNEHuU5iEDqCMJO4g6GnHewAQu8zFfZwwU=" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            H&M
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    2 days ago
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
        </div>
    </div>
    </div>

    <div class="ml-9 justify-center mt-1">
      <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 border border-gray-300 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://handcmediastorage.blob.core.windows.net/productimages/OE/OEPLN101-A01-152344-1400px-1820px.jpg" alt="">
          <div class="ml-2.5 flex flex-col item-center">
              <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
              <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              H&M
              </p> 
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
              <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
              </p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                  <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                      <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                      2 days ago
                    </span>
              </p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
              <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
                </div>
                <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
          </div>
      </div>
      </div>


</div> 
</div>


<div class="p-4 sm:ml-60 ">
  <div class="grid grid-flow-col auto-cols-max mt-2">
<div class="ml-9 justify-center mt-1">
<div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full rounded-t-lg h-96 border border-gray-400 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format" alt="">
  <div class="ml-2.5 flex flex-col item-center">
      <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
      <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      H&M
      </p> 
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
      <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
      </p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
          <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
              2 days ago
            </span>
      </p>
      <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
      <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
          <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
        </div>
        <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
  </div>
</div>
</div>

<div class="ml-9 justify-center mt-1">
  <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg border border-gray-400 h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16877500/2022/1/31/e5ef3a1b-e75e-4aee-abda-41cecae060311643603238802-Louis-Philippe-Men-Black-Leather-Solid-Formal-Oxfords-344164-1.jpg" alt="">
      <div class="ml-2.5 flex flex-col item-center">
          <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
          <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          H&M
          </p> 
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
          <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
          </p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
              <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                  2 days ago
                </span>
          </p>
          <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
          <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
            </div>
            <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
      </div>
  </div>
  </div>

  <div class="ml-9 justify-center mt-1">
    <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 border border-gray-300 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://media.gettyimages.com/id/172730246/photo/step-in-to-a-new-career-shoes.jpg?s=612x612&w=gi&k=20&c=D6e0dAUnJSNEHuU5iEDqCMJO4g6GnHewAQu8zFfZwwU=" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            H&M
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    2 days ago
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
        </div>
    </div>
    </div>

    <div class="ml-9 justify-center mt-1">
      <div class="flex flex-col md:items-center  bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 border border-gray-300 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://handcmediastorage.blob.core.windows.net/productimages/OE/OEPLN101-A01-152344-1400px-1820px.jpg" alt="">
          <div class="ml-2.5 flex flex-col item-center">
              <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
              <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              H&M
              </p> 
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
              <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
              </p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                  <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                      <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                      2 days ago
                    </span>
              </p>
              <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
              <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
                </div>
                <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
          </div>
      </div>
      </div>


</div> 
</div> 













<div class="p-4 sm:ml-64">
    
<div class="ml-9 justify-center mt-9">
<div class="flex flex-col md:items-center sm:w-6/12 bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format" alt="">
    <div class="ml-2.5 flex flex-col item-center">
        <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
        <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        H&M
        </p> 
        <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
        <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
        </p>
        <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
        <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
            <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                2 days ago
              </span>
        </p>
        <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
        <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
          </div>
          <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
    </div>
</div>
</div>

<div class="ml-9 justify-center mt-9">
    <div class="flex flex-col md:items-center sm:w-6/12 bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            H&M
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    2 days ago
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
        </div>
    </div>
    </div>

<div class="ml-9 justify-center mt-9">
    <div class="flex flex-col md:items-center sm:w-6/12 bg-gray-50 border border-gray-300 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg sm:w-12/12" src="https://theleatherlaundry.com/blog/wp-content/uploads/2017/09/brown-leather-shoes-xpakqxw-.jpg" alt="">
        <div class="ml-2.5 flex flex-col item-center">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            H&M
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    2 days ago
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-300 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
        </div>
    </div>
    </div>
  </div> 



     <a href="#" class=" flex flex-col md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-cover md:w-5/12 md:rounded-none md:rounded-l-lg" src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h4 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brown Leather Shoes</h4>
            <p class="text-lg mt-3 font-bold tracking-tight text-gray-900 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            H&M
            </p> 
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Batch Number: 123456</p>
            <p class="mt-2.5 text-lg item-center font-bold tracking-tight text-gray-900 dark:text-white">Status: <span class="ml-1 inline bg-green-100 text-green-800 text-md font-bold max-w-sm px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Order Accepted</span> 
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-900 dark:text-white">ETA: 5 May,2023</p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Last Updated: 
                <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    2 days ago
                  </span>
            </p>
            <p class="mt-2.5 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Quantity Status:</p>
            <div class="mt-2 w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
              </div>
              <p class=" mt-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">500/1000</p>
        </div>
    </a> -->


<!-- drawer init and toggle -->
<div class="text-center">
   <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   Show right drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Right drawer</h5>
   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Close menu</span>
   </button>
   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
   <div class="grid grid-cols-2 gap-4">
      <a href="#" class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
      <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
   </div>
</div>

</template>

<script setup>
import {
  initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips
} from "flowbite";


// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
});


var upstatus;

const { app } = useMyRealmApp();

const mongo = app.currentUser?.mongoClient("mongodb-atlas");
 const collection = mongo?.db("shoe").collection("production");

 const shoe_production = ref([]);

 collection
    .find()
    .then((data) => {
      shoe_production.value = data;
    })
    .catch((err) => {
      console.log(err);
    });

    const updateData = (id) => {
		collection
			.updateOne(
				{ "_id":id},
				{ $set: { status: upstatus, } }
			)
			.then((data) => {
				console.log(data);
				readData();
			})
			.catch((err) => {
				console.log(err);
			});
	};


  const readData = () => {
		collection
			.find()
			.then((data) => {
				console.log(data);
				shoe_production.value=data;
			})
			.catch((err) => {
				console.log(err);
			});
	};

  const detail=()=>{
   navigateTo('/shoe_detail')
  }

</script>

<style>

</style>