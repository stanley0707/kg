var Post = '<article class="blog-card">\
              <div class="post_image_container">\
                <img class="post-image" :src="image"/>\
              </div>\
            <div class="card_backgroud">\
              <div class="article-details">\
                <div class="post_header">\
                  <div class="avatar_user_item post_avatar">\
                      <figure class="avatar">\
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />\
                        <div class="circle_online"></div>\
                      </figure>\
                  </div>\
                  <span class="post_header_item">\
                      <h4 class="post-author">{{ author }}</h4>\
                  </span>\
                  <span class="post_header_item">\
                      <p class="post-at-date">{{ date }}</p>\
                  </span>\
                  <span class="post_header_item post_category_space">\
                      <p>{{ category }}</p>\
                  </span>\
                  <span class="post_header_item post_status" :style="status_style">\
                    <div class="post_icon">\
                      <font-awesome-icon :icon="['+"'fas'"+', '+"'lightbulb'"+']"/>\
                    </div>\
                  </span>\
                </div>\
              <div class="post_text">\
                <h3 class="post-title">{{ name }}</h3>\
                <p class="post-description">{{ desc }}</p>\
                <div class="post_menu_btn">\
                  <a class="card-link" href="#">изменить</a>\
                  <a class="card-link" href="#">удалить</a>\
                </div>\
              </div>\
            </div>\
            </div>\
          </article>'

export default Post
