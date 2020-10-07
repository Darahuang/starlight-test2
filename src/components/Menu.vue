<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand box-shadow bg-transparent" to="/"
          >Starlight</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav align-items-center w-100">
            <li class="nav-item active">
              <router-link class="nav-link" to="/about">
                關於我們
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">最新消息</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customer_orders"
                >餐點介紹</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customize"
                >訂製蛋糕</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/check_orders"
                >查看訂單</router-link
              >
            </li>
            <li class="nav-item ml-lg-auto">
              <router-link to="/login" class="nav-link text-secondary h5">
                <i class="fas fa-cog"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  class="nav-link text-secondary h5"
                  href="#"
                  role="button"
                  id="fav"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-heart"></i>
                  <span class="badge badge-danger" v-if="localList">{{ localList.length }}</span>
                <span class="badge badge-danger" v-else>0</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="fav">
               <div class="table-responsive p-3 font-size" v-if="localList">
                 <h6>收藏清單</h6>
            <table class="table table-hover width ">
              <tbody>
                <tr v-for ="(item, index) in localList" :key="index">
                  <td class="align-middle" width="20%">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="deleteFavItem(item,index)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">
                    {{ item.title }}
                  </td>
                  <td></td>
                  <td>
                     <a href="#" class="d-block" @click.prevent="addFavtoCart(item.id, qty=1)">
                        <i class="fas fa-shopping-cart fa-2x"></i>
                      </a>
                  </td>
                </tr>
              </tbody>
              <!-- <tfoot class="bg-light" v-if="item.price!==0">
                <tr>
                  <td colspan="4" class="text-right border-top-0">總計</td>
                  <td class="h6 text-danger border-top-0">{{ item.price | currencyFilter }}</td>
                </tr>
              </tfoot> -->
            </table>
          </div>
          <div v-else class="width p-3">
           <div class="text-center">
            <h6 class="text-primary">您的收藏清單目前是空的</h6>
            <router-link to="customer_orders" class="btn btn-heavy btn-sm">繼續逛逛</router-link>
            <!-- <button
              type="button"
              class="btn btn-heavy"
              @click="toCustomerOrders"
            >繼續逛逛</button> -->
          </div>
        </div>
            </div>
                </div>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  class="nav-link text-secondary h5"
                  href="#"
                  role="button"
                  id="cart"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-shopping-cart"></i>
                  <span class="badge badge-danger" v-if="number">{{ number }}</span>
                <span class="badge badge-danger" v-else>0</span>
                </a>
            <div class="dropdown-menu" aria-labelledby="cart">
               <div class="table-responsive p-3 font-size" v-if="cart.total!==0">
                 <h6>選購商品</h6>
            <table class="table table-hover width ">
              <!-- <thead>
                <th></th>
                <th>商品名稱</th>
                <th>數量</th>
                <th>單價</th>
                <th></th>
              </thead> -->
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">已套用折扣碼</div>
                  </td>
                  <td class="align-middle" width="20%" >{{ item.qty }}{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currencyFilter }}</td>
                  <td></td>
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="deleteCartItem(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-light" v-if="cart.total!==0">
                <tr>
                  <td colspan="4" class="text-right border-top-0">總計</td>
                  <td class="h6 text-danger border-top-0">{{ cart.final_total | currencyFilter }}</td>
                </tr>
              </tfoot>
            </table>
            <router-link to="checkout" class="btn btn-block btn-primary">結帳去</router-link>
          </div>
          <div v-else class="width p-3">
           <div class="text-center">
            <h6 class="text-primary">您的購物車目前是空的</h6>
            <router-link to="customer_orders" class="btn btn-heavy btn-sm">繼續逛逛</router-link>
            <!-- <button
              type="button"
              class="btn btn-heavy"
              @click="toCustomerOrders"
            >繼續逛逛</button> -->
          </div>
        </div>
            </div>
            </div>
            </li>

            <!-- <li class="nav-item">
              <router-link to="/cart" class="nav-link text-secondary h5 icon">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge badge-danger" v-if="number">{{ number }}</span>
                <span class="badge badge-danger" v-else>0</span>
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['localdata'],
  data() {
    return {
      number: '',
      cart: {},
      favList: [],
      favnumber: '',
      localList: [],
      localStorageData: JSON.parse(localStorage.getItem('favItems')) || [],
      products: [],
      saveItems: [],
    };
  },
  methods: {
    updateCart(number) {
      this.number = number;
    },
    updateFav(number) {
      this.favnumber = number;
    },
    updateFavList(item) {
      this.localList = item;
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.axios.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.number = response.data.data.carts.length;
      });
    },
    deleteCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.axios.delete(api).then((response) => {
        vm.getCart();
        vm.$bus.$emit('message:push', response.data.message, 'warning');
      });
    },
    deleteFavItem(item, index) {
      const vm = this;
      // eslint-disable-next-line no-param-reassign
      item.favItem = false;
      vm.localList.splice(index, 1);

      vm.$bus.$emit('deleteFav', this.localList);
    },
    addFavtoCart(id, qty) {
      const vm = this;
      console.log(id, qty);
      vm.$bus.$emit('addtoCart', id, qty);
    },
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.products = response.data.products;
        vm.products.forEach((el) => {
          vm.$set(el, 'favItem', false);
        });
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
        vm.localStorageData = JSON.parse(localStorage.getItem('favItems'));
        vm.localStorageData.forEach((item) => {
          vm.products.forEach((el) => {
            if (item.id === el.id) {
              // eslint-disable-next-line no-param-reassign
              el.favItem = true;
              vm.localList.push(el);
              vm.updateFav(vm.localList.length);
            }
          });
        });
      });
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('cart', (number) => {
      vm.updateCart(number);
      vm.getCart();
    });
    vm.$bus.$on('fav', (number) => {
      vm.updateFav(number);
    });
    vm.$bus.$on('favList', (item) => {
      vm.updateFavList(item);
      console.log(item);
    });
    vm.getCart();
    vm.getProducts();
  },
};
</script>
<style scoped>
.icon {
  position: relative;
}
.badge {
  position: absolute;
  right: -10px;
  top: -6px;
}
.box-shadow {
  box-shadow: none;
}
.nav-link:hover {
  color: #021a0da6;
  font-weight: bold;
}
.width{
  width:300px;
}
.font-size{
  font-size: 10px;
}
</style>
