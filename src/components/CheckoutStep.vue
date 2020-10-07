<template>
  <div>
    <div class="container my-4">
      <div class="row justify-content-center">
            <div class="col-md">
              <span class="badge badge-pill step py-3" :class="{'bg-yellow': total}" >1.填寫訂購資料</span>
            </div>
            <div class="col-md">
              <span class="badge badge-pill step py-3" :class="{'bg-yellow': paid === false}" >2.金流付款</span>
            </div>
            <div class="col-md">
              <span class="badge badge-pill step py-3" :class="{'bg-yellow': paid === true}">3.完成！</span>
            </div>
          </div>
      <!-- <div class="row mt-4 justify-content-center">
        <div class="col-md-4">
          <div class="row">
            <div class="col ml-3">
              <span
                class="rounded-circle bg-blue step d-flex align-items-center justify-content-center"
                :class="{'bg-yellow':total}"
              >1</span>
              <p class="mt-3">輸入資料</p>
            </div>
            <div class="col">
              <span
                class="d-flex align-items-center justify-content-center rounded-circle bg-blue step"
                :class="{'bg-yellow':paid===false}"
              >2</span>
              <p class="mt-3">金流付款</p>
            </div>
            <div class="col">
              <span
                class="d-flex align-items-center justify-content-center rounded-circle bg-blue step"
                :class="{'bg-yellow':paid ===true}"
              >3</span>
              <p class="mt-3">訂單完成</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['total', 'paid'],
};
</script>
<style scoped>
.step {
  width: 250px;
  background-color: #8bac9aa6;
}
.bg-yellow {
  background-color: rgb(246, 229, 96);
  font-weight: bold;
}

</style>
