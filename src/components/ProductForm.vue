<template>
  <section id="formulario-persona">
    <form @submit.prevent="sendForm">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-4">
            <div class="form-group">
              <label>Nombre</label>
              <input
                v-model="product.name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': error && invalidName }"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Descripción</label>
              <input
                v-model="product.description"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': error && invalidDescription }"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Precio</label>
              <input
                v-model="product.price"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': error && invalidPrice }"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div v-if="error" class="alert alert-danger" role="alert">
              ¡Debes rellenar todos los campos!
            </div>
            <div v-if="sent" class="alert alert-success" role="alert">
              El producto ha sido agregada correctamente!
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-12">
            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                Añadir Producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "formulario-persona",
  data() {
    return {
      sent: false,
      error: false,
      product: {
        name: "",
        description: "",
        price: 100,
      },
    };
  },
  computed: {
    invalidName() {
      return this.product.name.length < 1;
    },
    invalidDescription() {
      return this.product.description.length < 1;
    },
    invalidPrice() {
      return this.product.price.length < 1;
    },
  },
methods: {
  sendForm() {
    // Comprobamos la presencia de errores
    if (this.invalidName || this.invalidDescription || this.invalidPrice) {
      this.error = true;
      this.sent = false;
      return;
    }

    this.error = false;
    this.sent = true;
    this.$emit("add-product", this.product);
    this.resetForm();
  },
  resetForm() {
    this.product = {
      name: "",
      description: "",
      price: 100,
    };
  },
},
};
</script>