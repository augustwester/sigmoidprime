article_containers = document.getElementsByClassName("front-page-article-container");
usragent_regex = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry");

if (!usragent_regex.test(navigator.userAgent)) {
  for (x in article_containers) {
    article = article_containers[x].getElementsByTagName("article")[0];
    flexbox = article.getElementsByTagName("div")[0];
    headline = article.getElementsByTagName("h1")[0];
    excerpt = article.getElementsByTagName("p")[0];

    alert(headline.clientHeight + excerpt.clientHeight);
    //flexbox.style.height = article.offsetHeight + "px";
    //thumbnail = article.getElementsByTagName("img")[0];
    //thumbnail.style.marginTop = (article.offsetHeight - thumbnail.offsetHeight) / 2 + "px";
  }
}
