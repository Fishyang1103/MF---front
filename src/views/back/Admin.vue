<template lang="pug">
#top
  #wrapper
    #sidebar-wrapper.shadow
      ul.sidebar-nav
        li.sidebar-brand.h-100.text-center.mt-5
          img(src='~@/assets/image/logo.jpg' style="height: 200px;width:200;")
        li.mt-5
          b-btn.mx-3(pill to='/back/admin/adminproducts' variant="outline-danger")
            .p-2.wordColor 商品管理
        li.mt-5.text-center
          b-btn.mx-3(pill to='/back/admin/adminorders' variant="outline-danger")
            .p-2.wordColor 訂單管理
        li.mt-5.text-center
          b-btn.mx-3(pill to='/back/admin/adminsendmessage' variant="outline-danger")
            .p-2.wordColor 小卡製作
    div.text-right
        b-btn.mr-2.mt-3(to='/' variant="outline-danger") 首頁

  router-view
</template>
<style scope>
h4{
margin:0;
}

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #FFF;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li :hover {
    text-decoration: none;
    color: #fff;
    /* background: rgba(255,255,255,0.2); */
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

/* .sidebar-nav > .sidebar-brand a {
    color: #999999;
} */

/* .sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
} */

@media(min-width:992px) {
    .hide {
        display:block;
    }
    #wrapper {
        padding-left: 250px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}
</style>
