<template>
<div id="app">
  <div class="all">
     
        <span class="logined" v-if="isLoggedIn">
          
          <div class="header">
            <div class="header_container">
              <div class="header_logo">
                <h1 class="logo">к. Грибоедова</h1>
              </div>
              <ul>
                
                <li class="header_menu_item">
                  <span class="li_item">
                    <a type="text">
                        <font-awesome-icon class="header_menu_item_icon" :icon="['fas', 'bell']"/>
                    </a>
                    <div class="red_circle_notifaction"></div>
                  </span>
                </li>
  
                <li class="header_menu_item">
                    <span class="li_item">
                      <div class="avatar_user_item">
                        <figure class="avatar">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />
                          <div class="circle_online"></div>
                        </figure>
                      </div>
                    </span>
                </li>
                <li class="header_menu_item">
                    <span class="li_item">
                      <a @click="logout" type="text">
                          <font-awesome-icon class="header_menu_item_icon" :icon="['fas', 'sign-out-alt']"/>
                      </a>
                    </span>
                </li>
              </ul> 
            </div>
          </div>
          
        </span>
      
        <div class="meta_content"> 
          <span class="logined" v-if="isLoggedIn">
            
            <div class="right_menu">
              <ul class="right_menu_container">
                
                <li class="right_menu_item">
                    <a @click="navigate('/vademecum')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'book']"/>
                      </div>
                      <div class="text_wrapper">
                        вадемекум
                      </div>
                    </a>
                </li>
                
                <li class="right_menu_item">
                    <a @click="navigate('/team')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'user-friends']"/>
                      </div>
                      <div class="text_wrapper">
                        команда
                      </div>
                    </a>
                </li>
                
                <li class="right_menu_item">
                    <a @click="navigate('/')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'user']"/>
                      </div>
                      <div class="text_wrapper">
                        мой аккаунт
                      </div>
                    </a>
                </li>
                <li class="right_menu_item">
                    <a @click="navigate('/team')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'newspaper']"/>
                      </div>
                      <div class="text_wrapper">
                        публикации
                      </div>
                    </a>
                </li>
                <li class="right_menu_item">
                    <a @click="navigate('/settings')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'sliders-h']"/>
                      </div>
                      <div class="text_wrapper">
                        настройки
                      </div>
                    </a>
                </li>
                <li class="right_menu_item">
                    <a @click="navigate('/social')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'share-alt-square']" />
                      </div>
                      <div class="text_wrapper">
                        социальные сети
                      </div>
                    </a>
                </li>
                <li class="right_menu_item">
                    <a @click="navigate('/poll')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'poll']"/>
                      </div>
                      <div class="text_wrapper">
                        опросы
                      </div>
                    </a>
                </li>
                <li class="right_menu_item">
                    <a @click="navigate('/tasks')">
                      <div class="icon_wrapper">
                        <font-awesome-icon :icon="['fas', 'share-alt-square']" />
                      </div>
                      <div class="text_wrapper">
                        задачи
                      </div>
                    </a>
                </li>
              </ul>
            </div>
          
          </span>

          <div class="content">
            <router-view/>
          </div>
      
        </div>
  
  </div>
</div>
</template>

<script>

  export default {

    data() {
      return {
        isCollapse: true
      };
    },
    
    computed : {
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        }
    },
    
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/login')
            })
        },
        navigate: function(path) {
            if (path){
                this.$router.push(path)
                return true
            } else {
                return false
            }
        },
    },

    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
            
            return new Promise(function (resolve, reject) {
                
                console.log(resolve, reject)
                
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                          this.store.refresh_token()
                }
                
                throw err;
            });
        
      });
    
    },
  }
</script>


<style>
  ul{
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0
  }
  h1, h2, h3, h4, h5, p{
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  a{
    color: #738294;
    font-size: 0.72em;
    letter-spacing: 0.7px;
  }
  a:hover{
      color: #9395ad;
      cursor: pointer;
  }
  body{
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #ebeff4;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    margin: 0;
  }
  
  #app {
    font-family: 'Roboto Condensed', sans-serif;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0;
  }
  .all{
    width: 100%;
    height: 100%;
  }
  .header{
      width: 100%;
      height: 50px;
      display: block;
      position: fixed;
      z-index: 9999999;
      background: #5c77a0;
  }
  .header_container {
    display: flex;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    height: 50px;
    position: relative;
    font-size: 1.4em;
  }

  .header_container ul{
    display: flex;
    float: right;
    margin-left: 75%;
    height: 50px;
    margin: 0px 0px 0px 0px;
    float: right;
    position: absolute;
    right: 1px;
  }
  .header_menu_item{
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 40px;
  }

  .meta_content{
    width: 80%;
    max-width: 1000px;
    padding-top: 50px !important;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
 .right_menu{
    width: 180px;
    position: fixed;
    height: auto;
    float: left;
    margin: 10px 0px 0px 0px;
  }
  
  .right_menu_item{
    font-size: 1em !important;
    font-weight: 400 !important;
    letter-spacing: 0.8px !important;
    font-style: initial !important;
  }
  
  .right_menu_item a {
      color: #6d7681;
      height: 35px !important;
      display: block;
      vertical-align: middle;
  }
  
  .right_menu_item .icon_wrapper{
      width: 23px;
      display: inline-grid;
  }

  a .icon_wrapper svg {
      margin-top: 50%;
      color: #afbaca;
  }

  
  a .icon_wrapper svg:hover {
      colof: #6d7681 !important;
  }

  .right_menu_item a:hover {
    color: #9aa5b7;
  }

.right_menu_item .text_wrapper {
    display: inline-block;
    position: absolute;
    padding: 10px 10px 10px 10px;
}

.content{
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto
  }

.sub_page {
    height: 100%;
    width: 100%;
    margin-left: 180px;
  }

.avatar_user_item{
    height: 40px;
    width: 40px;
    height: 30px;
    width: 30px;
}  
.avatar_user_item .avatar {
    border-radius: 30px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    overflow: hidden;
    border: 2px solid rgb(149, 162, 181);
    display: block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: auto;
}

.header_menu_item .avatar_user_item .avatar {
    overflow: hidden;
    margin: 0 !important;
    padding: 0;

    
}
    
img {
      width: 100%;
      height: auto;
}
  
a .header_menu_item_icon {
      color: #405a79;
      font-size: 1.24em;
}
  
  a .header_menu_item_icon:hover {
        color: #95a7c1;
    }

.red_circle_notifaction {
    margin: -18px 0px 0px 10px;
    height: 5px;
    width: 5px;
    border-radius: 8px;
    background: #ef967b;
    position: absolute;
    display: block;
    z-index: 9999;
    box-shadow: 0px 0px 15px 1px rgb(255, 47, 0);
}

.circle_online {
    margin: -18px 0px 0px 10px;
    height: 5px;
    width: 5px;
    width: ;
    border-radius: 8px;
    background: #ef967b;
    position: absolute;
    display: block;
    z-index: 9999;
    box-shadow: 0px 0px 15px 1px rgb(255, 47, 0);
}

.circle_online {
    margin: -16px 0px 0px 27px;
    height: 5px;
    width: 5px;
    width: ;
    border-radius: 8px;
    background: #a3ff8c;
    position: absolute;
    display: block;
    z-index: 9999;
    box-shadow: 0px 0px 15px 0px rgb(0, 255, 8);
}

.radius_card{
  border-redius:4px;
}

.post_image_container .post-image{
    min-height: 250px !important;
    -o-object-fit: cover !important;
    object-fit: cover !important;
    height: 200px;
    filter: blur(2px);
    transform: scale(2) translateY(30px);
}

.post_image_container {
    position: absolute;
    z-index: 1;
    height: 200px;
    overflow: hidden;
    background-image: linear-gradient(#fff)
}
.blog-card .article-details{
    z-index: 1;
    position: relative;
    height: 200px;
    width: 64%;
    float: right;
    background: #fff;
    display: inline-flex;
}

.blog-card .article-details .card-link{

}
.article-details h4, .article-details h3, .article-details p{
    padding: 10px;
    margin: 10px 10px 10px 10px;
    height: 10px;
    color: #767d88;
}
.article-details .avatar_user_item{
  
}

.logo{
    font-size: 0.81em!important;
    color: #ced5de !important;
    font-weight: 500;
    letter-spacing: 1px;
    font-style: initial;
}
.post_header{
    height: 50px;
    width: 100%;
    display: table-cell;
    position: absolute;
}

.post_avatar{
  padding: 10px;
  display: inline-block;
}

.post_header .post_header_item{
  position: absolute;
}
.post_header .post-author{
    font-size: 0.8em;
    font-weight: 600;
    padding: 1px 20px 1px 0px
}

.post_header .post-at-date{
  font-size: 0.7em;
  font-weight: 500;
  padding: 20px 0px 0px 0px;
}
.post_text{
    display: inline-block;
    padding: 40px 10px 10px 10px;
}

.post_text p{
  height: 45px;
}
.post_text .post_menu_btn{
    display: inline-block;
    position: relative;
    float: right;
}
.post_text .post_menu_btn a{
    padding: 7px;
    text-decoration: none;
}

</style>

