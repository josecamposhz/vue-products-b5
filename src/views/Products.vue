<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <h1>Productos</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <product-form @add-product="addProduct" />
        <product-table
          :products="products"
          @delete-product="deleteProduct"
          @update-product="updateProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductTable from "@/components/ProductTable.vue";
import ProductForm from "@/components/ProductForm.vue";
import productService from "@/services/product.service.js";

export default {
  name: "product",
  components: {
    ProductTable,
    ProductForm,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    console.log(productService);
    this.getProducts();
  },
  methods: {
    getProducts() {
      productService.all().then((response) => {
        this.products = response.data;
      });
    },
    addProduct(product) {
      productService.save(product).then(({ data }) => {
        console.log(data);
        this.getProducts();
      });
    },
    deleteProduct(id) {
      productService.destroy(id).then(() => {
        this.products = this.products.filter((prod) => prod._id !== id);
      });
    },
    updateProduct(id, editProduct) {
      productService.update(id, editProduct).then(({ data }) => {
        console.log(data);
        this.getProducts();
      });
    },
  },
};
</script>

<style>
</style>
