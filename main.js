//カルーセル
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
    });
});
//カルーセルここまで
//products.html 画像切り替え

// タブがクリックされたらコンテンツを表示
  $(".tabs__menu a").click(function() {
    var tabName = $(this).attr("href");
    //console.log(this);
    //console.log(tabName);
    if (tabName[0] === "#") {
      // hrefの先頭の#を除いたものをshowTab()関数に渡す
      showTab(tabName.substring(1)); //substring(1)で、tabNameの文字列の1番目を抽出できる
   $(".product_name").text("商品名"+ tabName.substring(1) + "が入ります");
   $(".product_number").text("fa0001-91"+ tabName.substring(1));
      // hrefにページ遷移しない
      return false;
    }
  });

$(window).load(function() { //
  // 初期状態として1番目のタブを表示
  showTab("img_01");
});

function showTab(tabName) {
  console.log(tabName);
  // すでに表示されている場合は何もせずに終了
  if ($("#" + tabName).is(":visible")) {
    return;
  }

  var tabsContainer = $("a[href='#" + tabName + "']").closest(".tabs");

  // .tabs__menu liのうちtabNameに該当するものにだけactiveクラスを付ける
  tabsContainer.find(".tabs__menu li").removeClass("active");
  tabsContainer.find(".tabs__menu a[href='#" + tabName + "']").parent("li").addClass("active");

  // .tabs__contentの直下の要素をすべて非表示
  tabsContainer.find(".tabs__content > *").css({ display: "none" });
  // #<tabName>と.tabs__content .<tabName>を表示
  tabsContainer.find("#" + tabName + ", .tabs__content ." + tabName).css({
    display: "block",
    opacity: 0.7,
  }).animate({
    opacity: 1,
  }, 400);
}

//トップページに戻るボタン
$(".back-to-top").click(function() {
  // 600ミリ秒かけてトップに戻る
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  // ボタンのhrefに遷移しない
  return false;
});

//スマホサイズ ハンバーガーメニュー
$(".humberger_trigger").click(function(){
  $(".sp_navi_humberger").slideToggle();
});

//アコーディオン
$('.title').click(function() {
  var $answer = $(this).closest('.categories').find('.categories_name');
 // console.log($answer);
  $('.title').removeClass('under');
  $('.title').addClass('right'); 
 
  if($answer.hasClass('open')) { 
    $answer.removeClass('open');
    $answer.slideUp();
    
  } else {
    $answer.addClass('open'); 
    $answer.slideDown();
    
    $('.title').addClass('under');
    $('.title').removeClass('right'); 
    
  }
  
});

$(function() {
 // $(".top_items_column_div").eq(0).css("margin-right", "2px");
  //$(".top_items_column_div").eq(1).css("margin-right", "2px");
});

$(".open").click(function() {
  window.location.href = '#';
});