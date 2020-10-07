<template>
  <div>
    <Menu></Menu>
    <AlertMessage></AlertMessage>
    <CheckoutStep :paid="order.is_paid"></CheckoutStep>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="my-4 row d-flex justify-content-center">
        <form class="col-md-8">
          <table class="table">
            <thead>
              <th>品名</th>
              <th width="25%">數量</th>
              <th width="15%">小計</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currencyFilter }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th>Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀況</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">確認付款</span>
                </td>
              </tr>
              <tr v-if="order.is_paid">
                <th>訂單編號</th>
                <td>
                  <input type="text" id="demoInput" v-model="orderId" />
                  <button id="btn" class="btn btn-outline-primary btn-sm ml-2" type="button" @click="copylink">點選複製</button>
                  <router-link to="/check_orders" class="btn btn-outline-primary btn-sm ml-2">查看訂單</router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-danger" type="button" @click="pay" data-toggle="modal" data-target="#exampleModal">確認付款去</button>
          </div>
          <div v-if="order.is_paid">
              <router-link to="/customer_orders" class="btn btn-deep mr-2 btn-block">繼續選購商品</router-link>
            </div>
        </form>
        <!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-deep">
        <h5 class="modal-title text-primary font-weight-bolder" id="exampleModalLabel">付款成功</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body ">
        <div>
             <h5>訂單編號:</h5>
            <input type="text" id="demoInput" v-model="orderId" class="form-control"/>
            <button id="btn" class="btn btn-primary btn-sm mt-3" type="button" @click="copylink">點選複製</button>
          </div>
          <p v-if="copy" class="text-danger">複製訂單編號成功</p>
      </div>
      <div class="modal-footer">
        <router-link to="/check_orders" class="btn btn-sm btn-outline-primary mr-2">查看訂單</router-link>
        <router-link to="/customer_orders" class="btn btn-sm btn-outline-primary mr-2">繼續購物</router-link>
      </div>
    </div>
  </div>
</div> -->
        <!-- <div v-else>
          <h2 class="text-primary text-center">付款成功</h2>
          <h5>訂單編號:</h5>
          <div>
            <input type="text" id="demoInput" v-model="orderId" />
            <button id="btn" class="btn btn-primary btn-sm ml-2 mr-2" type="button" @click="copylink">點選複製</button>
            <button class="btn btn-warning btn-sm mr-2" type="button" @click="checkorder">查看訂單</button>
          </div>
          <p v-if="copy" class="text-danger">複製訂單編號成功</p>
        </div> -->
      </div>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import CheckoutStep from '../../components/CheckoutStep.vue';
import Footer from '../../components/Footer.vue';
import AlertMessage from '../../components/AlertMessage.vue';

export default {
  components: {
    Menu,
    CheckoutStep,
    Footer,
    AlertMessage,
  },
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
      copy: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.axios.get(url).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    pay() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.axios.post(api).then(() => {
        vm.getOrder();
        vm.isLoading = false;
      });
    },
    copylink() {
      const vm = this;
      const btn = document.querySelector('#btn');
      btn.addEventListener('click', () => {
        const input = document.querySelector('#demoInput');
        input.select();
        if (document.execCommand('copy')) {
          document.execCommand('copy');
          vm.copy = true;
          vm.$bus.$emit('message:push', '複製成功', 'warning');
        }
      });
    },
    checkorder() {
      const vm = this;
      vm.$router.push('/check_orders');
    },
    gotoShopping() {
      const vm = this;
      vm.$router.push('/customer_orders');
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

<style scoped>
.step {
  width: 50px;
  height: 50px;
}

</style>
