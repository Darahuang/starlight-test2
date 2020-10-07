<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="bg-slight py-5 ">
      <h4 class="text-center text-primary mr-2 mb-5"><i class="fab fa-pagelines mr-2"></i>猜你喜歡</h4>
      <div class="swiper-container container ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in products" :key="item.id">
              <div class="row justify-content-center" >
              <div class="col mb-3" >
                <div class="bg-white">
                  <a href="#" @click.prevent="getOneProduct(item.id)">
                    <div
                      class="bg-cover position-relative" style="height:250px"
                      :style="{backgroundImage:`url(${ item.imageUrl })`}"
                    >
                    <div class="card-info card-body w-100 d-flex justify-content-center align-items-center">
                      <h6 class="nav-link p-0 mb-3 text-white">
                          {{ item.title }}
                        </h6>
                    </div>
                    </div>
                  </a>
                </div>

                <!-- <div class="row no-gutters">
                  <div class="col-6">
                    <div class="bg-white flex-md-row">
                      <div class="card-body d-flex flex-column align-items-start">
                        <span class="badge badge-pill badge-warning mb-2">{{ item.category }}</span>
                        <h3 class="nav-link text-dark p-0 mb-3">
                          {{ item.title }}
                        </h3>
                        <div class="d-flex align-items-end mb-4">
                          <del class="h6 mr-3" v-if="item.price">原價{{ item.origin_price }}元</del>
                          <div class="h5 text-danger" v-if="item.price">特價{{ item.price }}元</div>
                        </div>
                        <div class="d-flex align-items-end">
                          <button
                           class="btn btn-sm btn-outline-success cursor-pointer mr-2" type="button" @click="getOneProduct(item.id)"
                          ><i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                          商品細節</button>
                          <button class="btn btn-sm btn-outline-danger" type="button" @click="addtoCart(item.id)">
                               <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                              加到購物車</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div
                      class="h-100 bg-cover"
                      :style="{backgroundImage:`url(${ item.imageUrl })`}"
                    ></div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Swiper from '../../node_modules/swiper/swiper-bundle';

export default {
  data() {
    return {
      products: [],
      cart: {},
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  mounted() {
    this.initSwiper();
    this.getProducts();
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line no-new
      new Swiper('.swiper-container', {

        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });
    },
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      const cart = {
        product_id: id,
        qty,
      };
      vm.axios.post(api, { data: cart }).then(() => {
        vm.isLoading = false;
        vm.$bus.$emit('getCart');
      });
    },
    getOneProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      vm.axios.get(api).then((response) => {
        console.log(response);
        vm.oneProduct = response.data.product;
        vm.$router.push(`/customer_orders/${id}`);
        vm.status.loadingItem = '';
      });
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/swiper/swiper-bundle.css";

.bg-cover {
  background-size: cover;
  background-position: center center;
}
.card-info{
  opacity: 0;
  position: absolute;
  background-color: rgba(88, 85, 85, 0.3);
  top: 0;
  bottom: 0;
  transition: all 0.5s;
}
.card-info:hover{
opacity: 1;
}

</style>
