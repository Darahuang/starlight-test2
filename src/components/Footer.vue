<template>
  <div>
    <div class="bg-white mt-5 footer-height">
      <div class="text-center text-secondary ">
        <img
          src="../assets/imgs/logo.svg"
          class="img-fluid"
          alt
          srcset
          style="width:150px;height:150px"
        />
        <p>© 2020 Starlight* All Rights Reserved</p>
        <div>
          <ul class="list-unstyled d-flex justify-content-center">
            <li class="mr-2">
              <a href="# " class="text-accent">
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li class="mr-2">
              <a href="#" class="text-accent">
                <i class="fab fa-instagram instagram fa-2x"></i>
              </a>
            </li>
            <li class="mr-2">
              <a href="#" class="text-success">
                <i class="fab fa-line fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-slight mt-3 py-4">
      <div class="text-center">
        <span>資料、圖片來源皆來自網路，僅用來做為學習用途。</span>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
.footer-height{
   height: 270px;
 }
 .instagram{
  color: transparent;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background-clip: text;
  -webkit-background-clip: text;
  }
</style>
