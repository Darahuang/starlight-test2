<template>
  <div>

     <Menu></Menu>
    <Header></Header>
    <AlertMessage></AlertMessage>
    <section class="text-secondary">
      <div class="container bg-light py-5 my-5">
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-birthday-cake fa-3x"></i>
            </div>
            <h3>嚴選的品項</h3>
            <p>為您把關品質</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-coffee fa-3x"></i>
            </div>
            <h3>多樣化的選擇</h3>
            <p>滿足顧客不同的需求</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-truck-moving fa-3x"></i>
            </div>
            <h3>快速送達</h3>
            <p>讓您即時收到商品</p>
          </div>
        </div>
      </div>
    </section>
    <Swiper></Swiper>
    <section class="container mt-5">
      <div class="info">
        <h4 class="text-center text-primary mr-2 mb-3 h4">
          <i class="fab fa-pagelines mr-2"></i>最新消息
        </h4>
        <router-link to="/news" class="d-block text-right text-decoration-none h6"
          >More info<i class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"></i
          ><i class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"></i
        ></router-link>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-5">
            <div
              style="
                background-image: url(https://images.pexels.com/photos/2679968/pexels-photo-2679968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
              "
              class="bg-cover card-image card-height"
            ></div>
            <div class="card-body">
              <span class="badge badge-warning float-right ml-2">期間限定</span>
              <h5 class="card-title text-accent font-weight-bolder">
                萬聖節限定
              </h5>
              <div>
                <p class="text-secondary card-text">
                  <i class="fas fa-clock mr-2"></i>9月28,2020
                </p>
                <p class="h6 text-heavy card-text">
                  南瓜限定特製餐點
                  <i class="fas fa-heart ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-5">
            <div
              style="
                background-image: url(https://images.unsplash.com/photo-1572928899385-6dc3b05531ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
              "
              class="bg-cover card-image card-height"
            ></div>
            <div class="card-body">
              <span class="badge badge-warning float-right ml-2">期間限定</span>
              <h5 class="card-title text-accent font-weight-bolder">
                中秋節限定
              </h5>
              <div>
                <p class="text-secondary card-text">
                  <i class="fas fa-clock mr-2"></i>8月18,2020
                </p>
                <p class="h6 text-heavy card-text">
                  中秋限定禮盒
                  <i class="fas fa-heart ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-5">
            <div
              style="
                background-image: url(https://images.pexels.com/photos/2312124/pexels-photo-2312124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
              "
              class="bg-cover card-image card-height"
            ></div>
            <div class="card-body">
              <span class="badge badge-warning float-right ml-2">期間限定</span>
              <h5 class="card-title text-accent font-weight-bolder">
                歡慶父親節
              </h5>
              <div>
                <p class="text-secondary card-text">
                  <i class="fas fa-clock mr-2"></i>7月18,2020
                </p>
                <p class="h6 text-heavy card-text">
                  與爸爸一起享用甜點打88折
                  <i class="fas fa-heart ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-slight py-5">
      <div class="container">
        <div class="info">
        <h4 class="text-center text-primary mr-2 mb-3 h4">
          <i class="fab fa-pagelines mr-2"></i>精選商品
        </h4>
        <router-link
          to="/customer_orders"
          class="d-block text-right text-decoration-none h6"
          >More items<i
            class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"
          ></i
          ><i class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"></i
        ></router-link>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-6 mb-3"
          v-for="item in products"
          :key="item.id"
        >
          <div class="card border-0">
            <div
              class="card-image cursor bg-cover"
              @click="getOneProduct(item.id)"
              style="height: 200px"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body" style="height: 150px">
              <a
                class="card-title text-decoration-none"
                href="#"
                @click.prevent="getOneProduct(item.id)"
              >
                <h6 class="text-accent font-weight-bold">{{ item.title }}</h6>
              </a>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h5" v-if="!item.price">2,800 元</div>
                <del class="h6 text-secondary" v-if="item.price"
                  >原價{{ item.origin_price }}元</del
                >
                <div class="h6 text-danger" v-if="item.price">
                  特價{{ item.price }}元
                </div>
              </div>
              <div class="cart mt-3">
                <button
                  type="button"
                  class="btn btn-primary btn-sm ml-auto"
                  @click="addtoCart(item.id)"
                >
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
    <section class="container mt-5">
      <div class="mb-5">
        <h4 class="text-center text-primary mr-2 mb-3 h4">
          <i class="fab fa-pagelines mr-2"></i>訂製蛋糕
        </h4>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div
            class="bg-cover bg-height"
            style="
              background-image: url(https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
            "
          ></div>
        </div>
        <div class="col-md-5">
          <div class="ml-3">
            <h5 class="text-primary">來訂製專屬您的蛋糕</h5>
            <p>把平日不敢表達的感謝或是愛意,透過訂製蛋糕來表示吧!</p>
            <div class="mt-4">
              <h6 class="mb-3 text-accent">
                <i class="fas fa-chevron-right mr-2"></i>Step1
                提供想製作的圖片及報價
              </h6>
              <h6 class="mb-3 text-accent">
                <i class="fas fa-chevron-right mr-2"></i>Step2
                確認製作蛋糕時間並付款
              </h6>
              <h6 class="text-accent">
                <i class="fas fa-chevron-right mr-2"></i>Step3
                領取的您客製化造型蛋糕
              </h6>
              <div class="info">
                <router-link
                  to="/customize"
                  class="d-block text-right mt-3 text-decoration-none h6"
                  >More info<i
                    class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"
                  ></i
                  ><i
                    class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"
                  ></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="container py-3 mt-md-5">
      <div class="row bg-relative">
        <div
          class="col-md-7 bg-cover mt-md-4 bg-height"
          style="background-image:url(https://images.unsplash.com/photo-1553367075-c4ab6e63a37f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        ></div>
        <div class="col-md-6 bg-lovely bg-block-right">
          <div class="p-md-5">
            <h2 class="font-weight-bolder text-accent mb-md-3 d-none d-md-block">一起享受甜點的美味吧!</h2>
            <h4 class="font-weight-bolder text-accent mb-2 d-md-none">一起享受甜點的美味吧!</h4>
            <p class="mt-md-4 mt-2 text-primary">當你需要休息的時候，可以挑選自己喜歡的甜點或是咖啡，給自己一點糖分來恢復元氣吧~</p>
            <div class="text-right">
              <a href="/customer_orders" class="btn-outline-info btn">去逛逛</a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section class="container py-3 mt-md-5">
      <div class="row bg-relative justify-content-md-end">
        <div class="col-md-6 bg-deep bg-block-left">
          <div class="p-md-5">
            <h2 class="font-weight-bolder text-primary d-md-block d-none mb-3">來訂做專屬您的蛋糕吧!</h2>
            <h4 class="font-weight-bolder text-primary mb-2 d-md-none">來訂做專屬您的蛋糕吧!</h4>
            <p class="mt-md-4 mt-2 text-accent">把平日不敢表達的感謝或是愛意,透過訂做蛋糕來表示吧!</p>
            <div class="text-left">
              <a href="/customize" class="btn-outline-info btn">去訂做</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-7 bg-cover mt-md-4 bg-height"
          style=" ;background-image:url(https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
        ></div>
      </div>
    </section> -->
    <section class="container mt-5">
      <div class="mb-5">
        <h4 class="text-center text-primary mr-2 mb-3 h4">
          <i class="fab fa-pagelines mr-2"></i>接收各種優惠
        </h4>
      </div>
      <div class="row">
        <div class="col">
          <div
            class="bg-cover bg-fixed"
            style="
              background-image: url(https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
            "
          >
            <div class="p-md-5 p-3">
              <div class="p-3 text-center w-md-50 mx-auto z-index bg-red">
                <!-- <p
                  class="text-primary h5 mb-3 font-weight-bolder d-md-block d-none"
                >
                  接收各種優惠資訊
                </p>
                <p class="text-primary h6 mb-3 font-weight-bolder d-md-none">
                  接收各種優惠資訊
                </p> -->
                <div class="email d-flex">
                  <label
                    for="email"
                    class="material-icons email-icon text-white"
                    >email</label
                  >
                  <input
                    type="email"
                    class="bg-transparent text-white email-input w-100"
                    name="email"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid': errors.has('email') }"
                    v-model="email"
                  />
                  <button
                    class="btn btn-warning rounded-0 d-flex align-items-center"
                    type="submit"
                    @click="subscribe"
                  >
                    <i class="material-icons">arrow_forward</i>
                  </button>
                </div>
                <p
                  class="text-danger mt-3 font-weight-bolder"
                  v-if="errors.has('email')"
                >
                  請輸入Email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/about">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1543685823-10e976e165d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">關於我們</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/customer_orders">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1587918899471-ab5a546c54a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">餐點介紹</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/check_orders">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1586810165616-94c631fc2f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">訂單查詢</h6>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <!-- <section class="container mt-5">
      <div class="row">
        <div
          class="col-md-6 mt-md-5 mt-2 bg-cover"
          style="background-image:url(https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        >
          <div class="row">
            <div class="col-md-9 p-5 text-white">
              <h3>取得優惠</h3>
              <p>與您一起歡慶周年慶,按下下方按鈕即可取得優惠</p>
              <a href="/news" class="btn btn-warning">索取優惠</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 bg-cover mt-md-5 mt-3"
          style="background-image:url(https://images.unsplash.com/photo-1573050435329-27ff3181380c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)"
        >
          <div class="row">
            <div class="col-md-9 p-5 text-accent">
              <h3>挑選甜點</h3>
              <p>今天您想來點甚麼?</p>
              <a href="/customer_orders" class="btn btn-warning">去看看</a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Menu from '../../components/Menu.vue';
import Swiper from '../../components/Swiper.vue';
import Footer from '../../components/Footer.vue';
import AlertMessage from '../../components/AlertMessage.vue';

export default {
  components: {
    Header,
    Menu,
    Swiper,
    Footer,
    AlertMessage,
  },
  data() {
    return {
      email: '',
      products: [],
      category: '所有餐點',
      localStorageData: JSON.parse(localStorage.getItem('favItems')) || [],
    };
  },
  methods: {
    subscribe() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.$bus.$emit('message:push', '訂閱成功', 'warning');
        } else {
          this.$bus.$emit('message:push', '訂閱失敗', 'danger');
        }
      });
    },
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
    addtoCart(id, qty = 1) {
      const vm = this;
      const target = vm.cart.carts.filter((items) => items.product_id === id); // 過濾是否有相同產品重覆加入購物車
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originCartId = sameCartItem.id; // 購物車id
        const orginQty = sameCartItem.qty;
        const newQty = orginQty + qty;
        const originProductId = sameCartItem.product.id; // 產品id
        const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`;
        const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        const changeCart = {
          product_id: originProductId,
          qty: newQty,
        };
        vm.isLoading = true;
        vm.axios // 首先移除加入購物車的單筆商品,並將重覆加入的商品合併數量後再傳送到加入購物車的API,再重新取得購物車列表
          .all([vm.axios.delete(delAPI), vm.axios.post(addAPI, { data: changeCart })])
          .then(vm.axios.spread(() => {
            vm.getCart();
            vm.isLoading = false;
            vm.$bus.$emit('message:push', '已加入購物車', 'warning');
          }));
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        vm.isLoading = true;
        const cart = {
          product_id: id,
          qty,
        };
        vm.axios.post(api, { data: cart }).then((response) => {
          vm.isLoading = false;
          vm.getCart();
          vm.$bus.$emit('message:push', response.data.message, 'warning');
        });
      }
    },
    getProducts(page = 3) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.products.forEach((el) => {
          vm.$set(el, 'favItem', false);
        });
      });
    },
    getOneProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.axios.get(api).then((response) => {
        vm.oneProduct = response.data.product;
        vm.$router.push(`/customer_orders/${id}`);
      });
    },
  },
  created() {
    this.getCart();
    this.getProducts();
  },
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center center;
}

.email {
  position: relative;
  padding-left: 40px;
}

.email-icon {
  position: absolute;
  top: 5px;
  left: 40px;
}
.email-input {
  border: none;
  outline: none;
  border-bottom: 3px solid #fff;
  background: none;
  padding-left: 40px;
}
@media (max-width: 767.98px) {
  .email {
    padding-left: 0px;
  }
  .email-icon {
    position: absolute;
    top: 5px;
    left: 10px;
  }
}
.bg-height {
  height: 300px;
  z-index: 1;
}
@media (max-width: 767.98px) {
  .bg-height {
    height: 200px;
  }
}
.bg-fixed {
  background-attachment: fixed;
}

@media (min-width: 767.98px) {
  .margin-md-nt {
    margin-top: -30px;
    margin-bottom: -30px;
  }
  .w-md-50 {
    width: 60%;
  }
}
.notfull {
  display: inline;
}
.full {
  display: none;
}
.info a:hover i.full {
  display: inline;
}
.info a:hover i.notfull {
  display: none;
}
.cursor {
  cursor: pointer;
}
.cart {
  display: none;
  transition: all 1s;
}
.card:hover .cart {
  display: block;
  text-align: center;
}
.card {
  transition: all 1s;
  overflow: hidden;
}
.card-image {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.card-image:hover {
  transform: scale(1.15, 1.15);
}
.card-info {
  opacity: 0;
  position: absolute;
  background-color: rgba(88, 85, 85, 0.5);
  top: 0;
  bottom: 0;
  width: 100%;
  transition: all 0.5s;
}
.card-info:hover {
  opacity: 1;
}
.card-height {
  height: 250px;
}
@media (max-width: 767.98px) {
  .card-height {
    height: 150px;
  }
}

</style>
