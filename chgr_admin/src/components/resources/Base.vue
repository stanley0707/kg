<template>
  <div class="sub_page">
  

    <div class="sub_page_content">
        <div class="self_user_info">
          <div class="radius_card self_page_avatar">
              <figure class="avatar">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />
              </figure>
          </div> 
          
          <div class="user_info_blok">
        
            <div class="radius_card user_info_title_name">
                <h3 class="text_content user_name inline_item">Стас Шилов</h3>
                <h4 class="text_content h_is_online inline_item">online</h4>
                <br/>
                <div class="text_content user_info_position inline_item">
                    <h4>главный редактор</h4>
                </div>
            </div>
          
            <ul class="radius_card self_user_info_text">
                <li class="text_content self_user_info_text_item">
                    <h5>должность: редактор</h5>
                </li>
                <li class="text_content self_user_info_text_item">
                    <h5>день рождения: 07 05 1989</h5>
                </li>
                <li class="text_content self_user_info_text_item">
                    <h5>телефон: +7 981 953 43 40</h5>
                </li>
                <li class="text_content self_user_info_text_item">
                    <h5>email: shilowstanislaw@gmail.com</h5>
                </li>
                <li class="text_content self_user_info_text_item">
                    <h5>публикаций: 780 </h5>
                </li>
                <li class="text_content self_user_info_text_item">
                    <h5>в команде 1 год</h5>
                </li>
                <li class="auth_info">
                  <a>редактировать <font-awesome-icon class="header_menu_item_icon" :icon="['fas', 'pen']"/></a>
                </li>
            </ul>
        </div>
      </div>
      
      <div class="sub_page_menu_stiky">
        <ul class="sub_page_menu_stiky_items">
          <li class="sub_page_menu_stiky_item_add_publ">
            <a>новая публикация</a>
          </li>
          <li class="sub_page_menu_stiky_item">
            <a>черновики</a>
          </li>
          <li class="sub_page_menu_stiky_item">
            <a>публикации</a>
          </li>
        </ul>
        <div class="search_form">
          <form method="get"  id="autocomplete" action="/api/v1/social_networks/" class="autocomplete-me-net_public">
              <input type="text" id="q_net_public" name="q">
              <i><font-awesome-icon :icon="['fas', 'search']"/></i>

          </form>
        </div>
      </div>    
      <div class="sub_page_content_item">
          <blog-card></blog-card>
      </div>
      <div class="sub_page_content_item">
          <blog-card></blog-card>
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>
      
      <div class="sub_page_content_item">
      </div>

    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    },
  };

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg{
  transition: 0.1s;
}
.sub_page_menu_stiky {
  width: 100%;
  height: 50px;
  background: #fff;
  position: sticky;
  top: 50px;
  -webkit-box-shadow: 0px 20px 37px -12px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 20px 37px -12px rgba(0,0,0,0.35);
  box-shadow: 0px 5px 15px -8px rgb(193, 193, 193);
  z-index: 10;

}

.sub_page_content {
    width: 100%;
    height: 100%;
    margin-top: 14px;
}

.sub_page_content_item{
    width: 100%;
    height: 200px;
    background: #fff;
    margin: 13px 0px 0px 0px;
}

.self_page_avatar{
    width: 350px;
    height: 300px;
    background: #fff;
    padding: 10px;
    margin: 0px 0px 13px 0px;
}
.self_page_avatar figure {
    display: block;
    margin: 0 auto;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
}
.self_page_avatar figure img {
    min-height: 300px;
    object-fit: cover !important;
}
.self_user_info{
  display: flex;
}
.user_info_blok{
    width: 100%;
    margin: 0px 0px 13px 13px;
    display: block
}
.user_info_title_name {
    max-width: 100%;
    background: #fff;
    padding: 10px;
    display: block;
    height: 45px;
}

.self_user_info_text{
    max-width: 100%;
    display: block;
    padding: 10px 18px 14px 18px;
    background: #fff;
    margin: 13px 0px 0px 0px;
}
.inline_item{
  display: inline;
}
.user_info_title_name .user_name{
    font-size: 1em;
    color: #505e71;
    font-weight: 500;
}

.user_info_title_name .h_is_online{
    font-size: 0.7em;
    font-weight: 600;
    padding: 6px;
    color: #c9ced6;
    letter-spacing: 1px;
}
.user_info_title_name .user_info_position h4{
    font-size: 0.8em;
    font-weight: 400;
    padding: 0px;
    margin: 10px 10px 0px 0px;
    letter-spacing: 0.06em;
    color: #787d84;
}

.self_user_info_text_item{
    max-width: 100%;
    background: #fff;
    color: #56606d;
    font-weight: 500;
    letter-spacing: 0.055em;
    font-size: 0.83em;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  
}
.self_user_info_text_item h5{
    display: block;
    font-size: 0.83em;
    margin-block-start: 0.67em;
    margin-block-end:01.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
}
.self_user_info_text_item h5{
    font-weight: 500;
    letter-spacing: 0.055em;
}
.text_content{
  
}

br {
  display: block;
  width: 6em;
  height: 6em;
  background: orange;
  line-height: calc(6em + 100%);
  outline: 1px solid red;
  border: 1px solid green;
}

.auth_info{
    width: 100%;
    margin: 0 auto;
    height: 22px;
    border-top: 0.6px #ebeff4 solid;
}
.auth_info a  {
    float: right;
    padding: 8px 0px 0px 0px;
}

.auth_info a svg  {
    float: right;
    font-size: 0.8em;
    color: #afb6bd;
    padding: 3px 2px 5px 6px;

}

.search_form {
    height: 100%;
    width: 250px;
    float: right
}

.search_form form{
    height: 100%;
    width: 100%;
    display: flex;
}
.search_form input{
    height: 50%;
    width: 90%;
    margin: 13px 13px 13px 13px;
    border-radius: 13px;
    border: 1px #cbd2da solid;
    padding: 0px 0px 0px 0px;
    background: #f1f4f7;
    outline: none;
}

.search_form i{
    position: absolute;
    right: 22px;
    top: 18px;
    color: #b0bccc;
}


.sub_page_menu_stiky_items {
    max-width: 500px;
    height: 40px;
    min-width: 300px;
    display: inline-block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
}

.sub_page_menu_stiky_item_add_publ{
    display: inline-block;
    margin: 10px 10px 10px 0px;
    width: 213px;
    height: 30px;
}

.sub_page_menu_stiky_item{
    display: inline-block;
    margin: 10px 10px 10px 0px;
    width: 113px;
    height: 30px;
}


.sub_page_menu_stiky_item_add_publ a{
    text-align: -webkit-right;
    background: #5b77a0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0c7d2;
    border-radius: 3px;
    box-shadow: 0px 2px 16px -4px rgb(91, 119, 160);
    height: 100%;
    transition: 0.1s;
}

.sub_page_menu_stiky_item_add_publ a:hover{
    text-align: -webkit-right;
    background: #5b77a0;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #d7dfea;
    border-radius: 3px;
    -webkit-box-shadow: 0px 2px 16px -2px rgb(91, 119, 160);
    box-shadow: 0px 2px 16px -2px rgb(91, 119, 160);
    height: 100%;
}

.sub_page_menu_stiky_item a{
text-align: -webkit-right;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #838d9c;
    border: 1px #dcdcdc solid;
    border-radius: 3px;
    height: 100%;
    -webkit-transition: 0.1s;
    transition: 0.1s;
}

.sub_page_menu_stiky_item a:hover{
    text-align: -webkit-right;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0c7d2;
    border: 1px #d7dfe8 solid;
    border-radius: 3px;
    height: 100%;
}

.search_form input,
.search_form textarea {
    font-size: 0.8em;
    padding: 0px 0px 0px 10px;
    color: #646a6f;
    text-shadow: 0px 0px 0px #a0a8b1;
    -webkit-text-fill-color: transparent;
}

.search_form input::-webkit-input-placeholder,
.search_form textarea::-webkit-input-placeholder {
    color: #ccc;
    text-shadow: none;
    -webkit-text-fill-color: initial;
}

</style>