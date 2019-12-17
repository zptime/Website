<template>
  <div class="website" v-cloak v-if="show">
    <!-- 顶部导航 -->
    <div class="website-top" :class="topBgColor == true ? 'topBgWrap' :''">
      <div class="top-center content">
        <img :src="logo" alt class="website-logo">
        <ul class="top-menu">
          <li
            class="top-item"
            :class="{'active' : selectIndex === index}"
            v-for="(item, index) in topMenuData"
            :key="index"
            @click.stop="jump(index)"
          >{{item}}</li>
        </ul>
      </div>
    </div>

    <!-- 滚动区域 -->
    <div class="scroll-content">
      <div class="scroll-item item-1">
        <img src="/img/right-pic-withbg.png" alt class="bg-1">
        <div class="content">
          <div class="website-title">
            <img src="/img/dote.png" alt class="dote-img">
            <div class="title-common title-item-1">Sahabat Finansial Anda Sepanjang Masa</div>
            <!-- <div class="title-sub">Pinjaman online menjadi lebih</div> -->
            <!-- <div class="google-play">
              <img src="/img/GooglePlay.png">
            </div>-->
            <div
              class="title-sub-two"
            >Menggali uang telah tercatat dan diawasi oleh Otoritas Jasa Keuangan (OJK)berdasarkan nomor S-64/NB.213/2019</div>
          </div>
        </div>
      </div>

      <div class="scroll-item item-2">
        <img src="/img/bg-2.png" alt class="bg-2">
        <div class="content">
          <div
            class="title-common title-item-2"
          >{{appName}} Membantu Anda Mendapatkan Pinjaman Terbaik</div>
          <div
            class="title-sub-2"
          >Platform informasi produk keuangan terlengkap dan terakurat yang mempermudah Anda dalam menentukan dan mendapatkan pinjaman yang sesuai dengan kebutuhan.</div>
          <div class="data-product">
            <img src="/img/product-1.png" alt class="data-img">
            <img src="/img/product-2.png" alt class="data-img">
            <img src="/img/product-3.png" alt class="data-img">
          </div>
        </div>
      </div>

      <div class="scroll-item item-3">
        <img src="/img/bg-3.png" alt class="bg-3">
        <div class="content">
          <div class="title-common title-item-3">Cara menjadi pemberi pinjaman di {{appName}}</div>
          <div class="data-prose">
            <img src="/img/proses-new.png" alt class="prose-img">
            <ul class="data-menu">
              <li class="data-item">
                <img src="/img/step-1.png" alt class="data-img">
                <span>Download aplikasi {{appName}} di Google Play</span>
              </li>
              <li class="data-item">
                <img src="/img/step-2.png" alt class="data-img">
                <span>Proses review</span>
              </li>
              <li class="data-item">
                <img src="/img/step-3.png" alt class="data-img">
                <span>Isi data pribadi pemberi pinjaman (hanya butuh 5 menit)</span>
              </li>
              <li class="data-item">
                <img src="/img/step-4.png" alt class="data-img">
                <span>Mendanai peminjam melalui aplikasi</span>
              </li>
              <li class="data-item">
                <img src="/img/step-5.png" alt class="data-img">
                <span>Menerima penghasilan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="scroll-item item-4">
        <img src="/img/bg-4.png" alt class="bg-4">
        <div class="content">
          <div class="title-common title-item-4">Keunggulan Kami</div>
          <div class="data-advantage">
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-1.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Pinjaman Cepat</h3>
                <div class="content-txt">15 menit untuk mengajukan, 2 – 48 jam untuk disetujui</div>
              </div>
            </div>
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-2.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Semua pengajuan dari ponsel</h3>
                <div
                  class="content-txt"
                >Semua pengajuan dari ponsel, anda tidak perlu untuk mempersiapkan dokumen dalam bentuk kertas</div>
              </div>
            </div>
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-3.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Tanpa jaminan</h3>
                <div
                  class="content-txt"
                >Anda tidak perlu mempersiapkan jaminan seperti rumah, motor, atau gadget anda</div>
              </div>
            </div>
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-4.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Mudah untuk membayar</h3>
                <div
                  class="content-txt"
                >Anda dapat melakukan pembayaran dengan mudah melalui ATM, Internet Banking, Mobile Banking atau Minimarket. Santai dan nikmati kenyamanan finansial Anda</div>
              </div>
            </div>
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-5.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Privasi anda terjaga dengan aman</h3>
                <div
                  class="content-txt"
                >Seluruh informasi yang anda isi hanya akan digunakan untuk verifikasi pinjaman, kami tidak akan memberikan informasi anda pada pihak ketiga</div>
              </div>
            </div>
            <div class="about-content">
              <div class="content-img">
                <img src="/img/advange-6.png" alt>
              </div>
              <div class="content-left">
                <h3 class="content-title">Bunga pinjaman rendah dan transparan</h3>
                <div class="content-txt">Bunga pinjaman rendah dan transparan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 尾部区域 -->
    <div class="back-top">
      <img src="/img/back-top.png" @click="backTop()">
    </div>
    <div class="website-bottom">
      <div class="contact">
        <div class="contact-item">
          <div class="contact-title">Alamat Kantor</div>
          <div
            class="contact-content"
          >Gandaria 8 Office Tower Lantai 23 Jl. Sultan Iskandar Muda No.10, RT.10/RW.6, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240</div>
        </div>
        <div class="contact-item">
          <div class="contact-title">Contact US</div>
          <div class="contact-content">Telepon：+62 - 81385308824</div>
          <div class="contact-content">Email：oliverharvey5543@gmail.com</div>
        </div>
      </div>
      <div class="copyright">Copyright © 2019 {{appName}} Developer Team | All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: "Menggali uang"
    };
  },
  data() {
    return {
      logo: "/img/logoOld.png", //logo图标
      topMenuData: ["Beranda", "Produk", "Proses", "Keungggulan Kami"], //导航栏数据
      selectIndex: 0, //导航栏index
      topBgColor: false, //导航栏变色标志位
      appName: "Menggali uang", //Ayo Pinjam
      show: false
    };
  },
  mounted() {
    // 事件监听滚动条
    this.$nextTick(() => {
      window.addEventListener("scroll", this.watchScroll, true);
    });
    document.addEventListener("scroll", e => {}, false);
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  },
  methods: {
    //滚动事件
    watchScroll(index) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //当滚动超过 50 时，实现顶部效果
      if (scrollTop > 50) {
        this.topBgColor = true;
      } else {
        this.topBgColor = false;
      }

      //滚动触发导航高亮
      let scrollItems = document.querySelectorAll(".scroll-item");
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge = scrollTop >= scrollItems[i].offsetTop;
        if (judge) {
          this.selectIndex = i;
          break;
        }
      }
    },

    //点击跳转
    jump(index) {
      let scrollItems = document.querySelectorAll(".scroll-item");
      let total = scrollItems[index].offsetTop;
      this.$nextTick(() => {
        window.scrollTo({
          behavior: "smooth",
          top: total
        });
        //this.selectIndex = index;
      });
    },

    //回到顶部
    backTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.watchScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
/* 顶部样式 */
.website-top {
  height: 0.8rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: transparent;
}
.top-center {
  position: relative;
}
.website-logo {
  width: 2.76rem;
  height: 0.6rem;
  left: 0;
  top: 0.1rem;
  position: absolute;
}
.top-menu {
  position: absolute;
  left: 3.6rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-start;
  z-index: 99;
}
.top-menu .top-item {
  font-size: 0.16rem;
  padding: 0.015rem 0;
  color: #999;
  cursor: pointer;
  margin-right: 0.44rem;
}
.top-menu .top-item.active {
  color: #24d29b;
  border-bottom: 0.02rem solid #24d29b;
}
.bg-1 {
  width: 10.32rem;
  height: 7.63rem;
  position: absolute;
  right: 0;
  z-index: -1;
}
.bg-2 {
  width: 12.38rem;
  height: 4.62rem;
  position: absolute;
  left: 0;
  z-index: -1;
}
.bg-3 {
  width: 2.53rem;
  height: 5.43rem;
  position: absolute;
  right: 0;
  top: 1.8rem;
  z-index: -1;
}
.bg-4 {
  width: 1.55rem;
  height: 4.52rem;
  position: absolute;
  left: 0;
  top: -1.6rem;
  z-index: -1;
}
.topBgWrap {
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 27px 0px rgba(18, 172, 123, 0.15);
}

/* 滚动区域公共样式 */
.scroll-content {
  height: 100%;
}
.scroll-item {
  width: 100%;
  margin: 0 0 20px 0;
  position: relative;
}
.item-1 {
  height: 7.63rem;
}
.item-3 {
  margin-top: 1.54rem;
}
.item-4 {
  padding-top: 2rem;
  min-height: 8rem;
}
.content {
  width: 62.5%;
  margin: 0 auto;
  border: 1px solid transparent;
  height:100%;
}

/* 标题样式 */
.website-title {
  margin-top: 2.98rem;
  position: relative;
}
.title-common {
  color: #21332d;
  font-weight: bold;
  word-wrap: break-word;
}
.title-item-1 {
  font-size: 0.44rem;
  width: 5.37rem;
  line-height:0.48rem;
}
.title-item-2 {
  color: #fff;
  font-size: 0.36rem;
  width: 6rem;
  margin-top: 1.06rem;
}
.title-item-3,
.title-item-4 {
  font-size: 0.36rem;
  width: 100%;
  text-align: center;
}
.title-sub {
  color: #999;
  font-size: 24px;
  margin-top: 0.34rem;
}
.title-sub-2 {
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.3rem;
  width: 8.32rem;
  word-wrap: break-word;
  margin-top: 0.2rem;
}
.title-sub-two {
  font-size: 0.24rem;
  color: #333;
  line-height: 0.3rem;
  width: 5.5rem;
  word-wrap: break-word;
  margin-top: 0.2rem;
}

/* 内容布局样式 */
.google-play img {
  width: 3.22rem;
  height: 1.32rem;
  margin-top: 0.16rem;
  position: relative;
  left: -0.25rem;
}
.data-product {
  position: relative;
  left: -0.25rem;
  margin-top: 0.1rem;
  display: flex;
}
.data-product .data-img {
  width: 4.12rem;
  height: 4.74rem;
}
.data-prose {
  overflow: hidden;
  margin-top: 0.9rem;
}
.data-prose .prose-img {
  float: left;
  width: 4.51rem;
  height: 3.56rem;
  margin-right: 1.9rem;
}
.data-menu {
  float: left;
  margin-top: 0.2rem;
}
.data-menu .data-item {
  display: flex;
  margin-bottom: 0.3rem;
}
.data-menu .data-img {
  width: 0.78rem;
  height: 0.28rem;
  margin-right: 0.25rem;
}
.data-menu span {
  font-size: 0.18rem;
  color: #333;
  font-weight: bold;
  width: 3.5rem;
}
.data-advantage {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}
.about-content {
  width: 33.3%;
  display: flex;
  margin-bottom: 0.5rem;
}
.about-content .content-title {
  font-size: 0.16rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.1rem;
}
.about-content .content-txt {
  font-size: 0.14rem;
  font-weight: 400;
  color: #999;
}
.about-content .content-img img {
  width: 0.78rem;
  height: 0.78rem;
}
.about-content .content-left {
  flex: 1;
  margin: 0 0.2rem 0 0.2rem;
}
.dote-img{
  position:absolute;
  width:2rem;
  height:1.96rem;
  left:-1.56rem;
  top:-0.6rem;
  z-index: -1;
}

/* 底部样式 */
.website-bottom {
  background: rgba(36, 210, 155, 0.1);
  color: #24d29b;
  font-size: 0.14rem;
  font-weight: 400;
}
.website-bottom .copyright {
  /* height: 0.98rem;
  line-height: 0.98rem; */
  padding-bottom: 0.2rem;
  text-align: center;
}
.contact {
  width: 8rem;
  margin: 0 auto;
  display: flex;
}
.contact-item {
  flex: 1;
  padding-left: 0.6rem;
}
.contact-title {
  font-weight: bold;
  line-height: 0.5rem;
}
.contact-content {
  /* line-height: 0.26rem; */
  margin-bottom: 0.1rem;
}

/* 回到顶部样式 */
.back-top {
  height: 0.45rem;
  text-align: right;
  margin-bottom: 0.25rem;
  margin-top: 0.3rem;
}
.back-top img {
  width: 0.44rem;
  height: 0.45rem;
  cursor: pointer;
}
</style>
