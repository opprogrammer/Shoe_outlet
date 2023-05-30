<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <!-- Start coding here -->
          <h1 class="text-5xl text-center p-3"> People who can edit the data has access of this page</h1>
          <div class="flex justify-center mt-9">
          <button @click="logout()" type="button" class="rounded bg-gray-700 text-white p-2 font-bold">
			Logout
		</button>
        </div>
          <div class="bg-white mt-9 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden rounded">
              <div class="overflow-x-auto">
                <form @submit.prevent="handleEditFormSubmit">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-sm text-center font-bold text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-4 py-3 border-r border-gray-800">Product name</th>
                              <th scope="col" class="px-4 py-3 border-r border-gray-800">Category</th>
                              <th scope="col" class="px-4 py-3 border-r border-gray-800">Brand</th>
                              <th scope="col" class="px-4 py-3 border-r border-gray-800">Description</th>
                              <th scope="col" class="px-4 py-3 border-r border-gray-800">Price</th>
                              <th scope="col" class="px-4 py-3">
                                  Actions
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        <template v-for="contact in product" :key="contact._id">
              <template v-if="editContactId === contact._id">
                <EditableRow :editFormData="editFormData" :handleEditFormChange="handleEditFormChange"
                  :handleCancelClick="handleCancelClick" />
              </template>
              <template v-else>
                <ReadOnlyRow :contact="contact" :handleEditClick="handleEditClick"
                  :handleDeleteClick="handleDeleteClick" />
              </template>
            </template>
                      </tbody>
                  </table>
                </form>
              </div>
          </div>


          <!-- <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">user_id</th>
                            <th scope="col" class="px-4 py-3">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" item in users" :key="item._id" class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{item.user_id}}</th>
                            <td class="px-4 py-3">{{item.email}}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </div> -->
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
   const collection = mongo?.db("shoe").collection("product_details");

   const mongo1 = app.currentUser?.mongoClient("mongodb-atlas");
   const collection1 = mongo1?.db("shoe").collection("users");
  

   const logout = () => {
		app.currentUser.logOut();
		navigateTo("/");
	};
    
   const product = ref([]);

   const users = ref([]);



   const editFormData = ref({
  pro_name: "",
  cat: "",
  brand:"",
  des:"",
  price:"",
})
const editContactId = ref(null)
const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;
  const newFormData = { ...editFormData._rawValue };
  newFormData[fieldName] = fieldValue;
  editFormData.value = newFormData
};
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
const handleEditFormSubmit = () => {
  // event.preventDefault();
  const editedContact = {
    product_name: editFormData.value.pro_name,
    category: editFormData.value.cat,
    brand: editFormData.value.brand,
    description: editFormData.value.des,
    price: editFormData.value.price,
  };
  console.log('omg',editContactId.value);
  
  collection
		.updateOne({ _id: editContactId.value }, { $set: editedContact })
		.then((data) => {
			console.log(data);
      consoleData();
		})
		.catch((err) => {
			console.log(err);
		});
  
  // console.log(editedContact)
  // const newContacts = [...contacts.value];
  // const index = contacts.value.findIndex((contact) => contact._id === editContactId.value);
  // console.log('index', index)
  // newContacts[index] = editedContact;
  // console.log('newContacts', newContacts)
  // contacts.value = newContacts
  editContactId.value = null;
};
const handleEditClick = (contact) => {
  console.log('contact',contact)
  editContactId.value = contact._id;
  const formValues = {
    id:contact._id,
    pro_name: contact.product_name,
    cat: contact.category,
    brand: contact.brand,
    des: contact.description,
    price: contact.price,
  };
  editFormData.value = formValues;
};
const handleCancelClick = () => {
  // setEditContactId(null);
  editContactId.value = null
};
const handleDeleteClick = (id) => {
  // const index = contacts.findIndex(contact => contact._id === contactId)
  // const index = contacts.value.findIndex((contact) => contact._id === contactId);
  // contacts.value.splice(index, 1);
 
console.log(id)
  collection
		.deleteOne({
      _id:id,
    })
		.then((data) => {
			console.log(data);
      consoleData();
		})
		.catch((err) => {
			console.log(err);
		});
};
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