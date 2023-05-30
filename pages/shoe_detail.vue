<template>
  <!-- <form @submit.prevent="handleEditFormSubmit">
  <template v-for="contact in product" :key="contact._id">
              <template v-if="editContactId === contact._id">
                <shoe_edit :editFormData="editFormData" :handleEditFormChange="handleEditFormChange"
                  :handleCancelClick="handleCancelClick" />
              </template>
              <template v-else>
                <shoe_read :contact="contact" :handleEditClick="handleEditClick"
                  :handleDeleteClick="handleDeleteClick" />
              </template>
            </template>
            </form> -->

            <section v-for="item in product" :key="item._id" class="text-gray-700 body-font overflow-hidden bg-white">
    <div class=" px-5 py-2 mx-auto">
      <div class="lg:w-4/5 mx-auto ">
        <div class="grid grid-cols-12 w-11/12 mx-auto text-white">
          <div class="md:col-span-4 col-span-12 mt-5">
        <img alt="ecommerce" class="md:object-contain sm:object-contain w-full rounded-t-lg h-cover md:h-cover md:w-11/12  md:rounded-lg sm:w-12/12 " src="https://imagescdn.planetfashion.in/img/app/product/7/743463-8359484.jpg?auto=format">
          </div>
          <div class="md:col-span-8 col-span-12 mt-5">
        
          
          <h1 class="text-5xl font-bold tracking-tight text-gray-900 ">Brown Leather Shoes</h1>
          <div>
          <p class="text-3xl mt-8 mb-8 font-bold tracking-tight text-gray-700 dark:text-white">Bata  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        H&M
        </p> 
        <div class="md:grid md:grid-cols-2">
        <p class="mt-6 mb-8 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">Batch Number: 123456</p>
        <p class="mt-6 mb-8 text-3xl item-center font-bold tracking-tight text-gray-700 dark:text-white">Status: 
          <select name="status" v-model="upstatus"  class="mr-2 inline bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500  max-w-lg p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Update status</option>
        <option value="order Accepted">order Accepted</option>
        <option value="Production">Production</option>
        <option value="Packaing">Packaing</option>
        <option value="Transit">Transit</option>
        <option value="Dilevered">Dilevered</option>
      </select>
   </p>
        <p class="mt-6 mb-8 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">ETA: 5 May,2023</p>
        <p class="mt-6 mb-8 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">Last Updated: 
            <span class="ml-1 bg-blue-100 text-blue-800 text-md font-bold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                2 days ago
              </span>
        </p>
        </div>
        <p class="mt-6 mb-8 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">Quantity Status:</p>
        <div class="mt-6 mb-8  w-full bg-gray-300 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 50%"> 50%</div>
          </div>
          <p class=" mt-8 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">500/1000</p>
          </div>

          <div class="flex ml-3 items-center justify-center">
            <button type="button" @click="update(item._id)" class="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
          
        </div>


          <div class=" bg-white rounded-lg dark:bg-gray-800" >
            <p class="mt-9 text-5xl font-bold tracking-tight text-gray-700 dark:text-white">Order Timeline</p>
 <ol class="relative text-3xl mt-9 ml-9 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
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
 </div>

 
 </div>
    </div>
</div>
          </div>
          
  </section>
</template>

<script setup>
import {
initDropdowns,
initFlowbite,
initModals,
initPopovers,
initDrawers,
} from "flowbite";


// initialize components based on data attribute selectors
onMounted(() => {
initDropdowns();
initFlowbite();
initModals();
initPopovers();
initDrawers();
});

const { app } = useMyRealmApp();

const mongo = app.currentUser?.mongoClient("mongodb-atlas");
const collection = mongo?.db("shoe").collection("production");

const mongo1 = app.currentUser?.mongoClient("mongodb-atlas");
const collection1 = mongo1?.db("shoe").collection("users");


const logout = () => {
  app.currentUser.logOut();
  navigateTo("/");
};

const product = ref([]);

const users = ref([]);

var upstatus;


const update=(id)=>{
  collection
  .updateOne({ "_id":id},
				{ $set: { status:upstatus } })
  .then((data) => {
      console.log(data);
consoleData();
navigateTo('/main_page_shoe');
  })
  .catch((err) => {
      console.log(err);
  });
}
// const editFormData = ref({
// status: "",

// })
// const editContactId = ref(null)
// const handleEditFormChange = (event) => {
// event.preventDefault();
// const fieldName = event.target.getAttribute("name");
// const fieldValue = event.target.value;
// const newFormData = { ...editFormData._rawValue };
// newFormData[fieldName] = fieldValue;
// editFormData.value = newFormData
// };
// const handleAddFormSubmit = (event) => {
//   event.preventDefault();
//   const newContact = {
//     title: "",
//     details: "some text",
//     user_id: app.currentUser.id,
//   };
//   collection
// 		.insertOne(newContact)
// 		.then((data) => {
// 			console.log(data);
//       consoleData();

// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});

//   // contacts.value = [ ...contacts.value ];
//   // const lastElement = contacts.value[contacts.value.length - 1]
//   // handleEditClick(newContact)
// };
// const handleEditFormSubmit = () => {
// // event.preventDefault();
// const editedContact = {
// status: editFormData.value.status,

// };
// console.log('omg',editContactId.value);

// collection
//   .updateOne({ _id: editContactId.value }, { $set: editedContact })
//   .then((data) => {
//       console.log(data);
// consoleData();
//   })
//   .catch((err) => {
//       console.log(err);
//   });

// // console.log(editedContact)
// // const newContacts = [...contacts.value];
// // const index = contacts.value.findIndex((contact) => contact._id === editContactId.value);
// // console.log('index', index)
// // newContacts[index] = editedContact;
// // console.log('newContacts', newContacts)
// // contacts.value = newContacts
// editContactId.value = null;
// };
// const handleEditClick = (contact) => {
// console.log('contact',contact)
// editContactId.value = contact._id;
// const formValues = {
// id:contact._id,
// status: contact.status,

// };
// editFormData.value = formValues;
// };
// const handleCancelClick = () => {
// // setEditContactId(null);
// editContactId.value = null
// };
// const handleDeleteClick = (id) => {
// // const index = contacts.findIndex(contact => contact._id === contactId)
// // const index = contacts.value.findIndex((contact) => contact._id === contactId);
// // contacts.value.splice(index, 1);

// console.log(id)
// collection
//   .deleteOne({
// _id:id,
// })
//   .then((data) => {
//       console.log(data);
// consoleData();
//   })
//   .catch((err) => {
//       console.log(err);
//   });
// };
const consoleData = () =>{
collection
  .find()
  .then((data) => {
      console.log(data);
      product.value=data;

  })
  .catch((err) => {
      console.log(err);
  });
}

consoleData();

collection
.find()
.then((data) => {
  product.value = data;
})
.catch((err) => {
  console.log(err);
});


collection1
.find()
.then((data) => {
  users.value=data;
  console.log(data);
})
.catch((err) => {
  console.log(err);
});

</script>

<style>

</style>