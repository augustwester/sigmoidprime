article_containers = document.getElementsByClassName("front-page-article-container");
usragent_regex = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry");

for (x in article_containers) {
  if (x % 2) {
    article_containers[x].style = "background-color:rgba(244,248,249,1);";
  }

  if (x != 0 && !usragent_regex.test(navigator.userAgent)) {
    article = article_containers[x].getElementsByTagName("article")[0];
    reading_time = article.getElementsByClassName("reading-time")[0];

    reading_time_y = reading_time.offsetTop + reading_time.clientHeight;
    container_height = article_containers[x].clientHeight;

    article_containers[x].style.paddingTop = (container_height - reading_time_y) + "px";
  }
}
