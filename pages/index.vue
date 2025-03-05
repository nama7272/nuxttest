<script setup>
import { H3Error } from "h3"; // 追加
const plants = ref(null);
const plant = ref(null);
const error = ref(null); // 追加

// Get plants
async function getPlants() {
  return await $fetch("/api/plants");
}
plants.value = await getPlants();

// Add plants
async function addPlant(plant) { //追加

  let addedPlant = null;
  if (plant)
    addedPlant = await $fetch("/api/plants", {
      method: "POST",
      body: {
        name: plant,
      },
    });

  if (addedPlant) plants.value = await getPlants();
}

// Delete plant
async function deletePlant(id) { // 追加
  let deletePlantOrError = null;
  if (id)
    deletePlantOrError = await $fetch("/api/plants", {
      method: "DELETE",
      body: {
        id: id,
      },
    });

  if (deletePlantOrError instanceof H3Error) {
    error.value = deletePlantOrError;
    return;
  }

  plants.value = await getPlants();
}

// 追加
const editedPlant = ref({
  id: null,
  name: null,
});

// Edit plant 追加
async function editPlant(editedPlant) {
  let plant = null;

  if (editedPlant.id && editedPlant.name)
    plant = await $fetch("/api/plants", {
      method: "PUT",
      body: {
        id: editedPlant.id,
        name: editedPlant.name,
      },
    });

  if (plant) plants.value = await getPlants();
}

useHead({
  title: "Green Care",
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    type: "text/css",
  },
  script: {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  },
});
</script>
<template>
  <div class="container">
    <h1>Top Page</h1>




    <!-- PlantsModal 追加 -->
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Plant</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
                v-model="editedPlant.name"
                type="text"
                class="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
            />
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="editPlant(editedPlant)"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>





    <!-- アラート追加 -->
    <div
        v-if="error"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
    >
      <strong>Error:</strong> Delete Error
      <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="error = null"
      ></button>
    </div>


    <!-- form追加 -->
    <form>
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Name</label>
        <input
            v-model="plant"
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
        />
      </div>
      <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="addPlant(plant)"
      >
        Add Name
      </button>
    </form>


    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(plant, index) in plants">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ plant.name }}</td>
        <td>
          <button
              type="button"
              class="btn btn-warning btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="
                {
                  editedPlant.id = plant.id;
                  editedPlant.name = plant.name;
                }
              "
          >
            Edit
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" @click="deletePlant(plant.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

