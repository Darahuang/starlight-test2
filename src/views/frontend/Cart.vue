<template>
  <div>
    <Menu></Menu>
    <AlertMessage></AlertMessage>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="my-5 row justify-content-center">
        <div class="col-md-8" v-if="cart.total!==0">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <th></th>
                <th>商品名稱</th>
                <th>數量</th>
                <th>單價</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    <img :src="item.product.imageUrl" width="60px" height="60px" alt srcset />
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">已套用折扣碼</div>
                  </td>
                  <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currencyFilter }}</td>
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
                  <td class="h5 text-danger border-top-0">{{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="text-info my-3">
            <i class="fa fa-star mr-2" aria-hidden="true"></i>
            <span>
              輸入折扣碼「
              <span class="text-danger">anniversary</span>」， 一起慶祝周年慶吧！
            </span>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入折扣碼"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="coupon_code"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="addCouponCode"
              >使用折扣碼</button>
            </div>

          </div>
          <div class="text-center">
             <button type="button" class="btn btn-primary" @click="toCheckout">前往結帳</button>
          </div>
        </div>
        <div class="col-md-8" v-else>
           <div class="goShopping text-center">
            <h5 class="text-primary">您的購物車目前是空的</h5>
            <p>您可以前往產品介紹 ，以選購您想要的商品。</p>
            <button
              type="button"
              class="btn btn-heavy"
              @click="toCustomerOrders"
              v-if="cart.total===0"
            >繼續逛逛</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Footer class="fixed-bottom"></Footer>
    </footer>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import AlertMessage from '../../components/AlertMessage.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: {
    Menu,
    AlertMessage,
    Footer,
  },
  data() {
    return {
      cart: {},
      isLoading: false,
      coupon_code: '',
      cartNumber: '',
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.cartNumber = response.data.data.carts.length;
        vm.isLoading = false;
        vm.$bus.$emit('cart', vm.cartNumber);
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
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = { code: vm.coupon_code };
      vm.axios.post(api, { data: coupon }).then((response) => {
        vm.coupon_code = '';
        vm.getCart();
        vm.$bus.$emit('message:push', response.data.message, 'warning');
      });
    },
    toCheckout() {
      const vm = this;
      vm.$router.push('/checkout');
    },
    toCustomerOrders() {
      const vm = this;
      vm.$router.push('/customer_orders');
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('getCart', () => {
      vm.getCart();
    });
    vm.getCart();
  },
};
</script>
