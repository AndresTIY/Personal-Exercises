// Variation code goes here
const ch_cartUrl = "https://www.vitamix.com/us/en_us/Shop/Shopping-Cart";
$.ajax({
  type: "GET",
  url: ch_cartUrl,
  dataType: "html"
}).then(function(data, status) {
  var $ch_cartHtml = $(data);
  var $ch_cartItems = $ch_cartHtml.find(".cart__item");
  var $ch_cartAmount = $ch_cartItems.length;
  var $ch_randomCartItem = $ch_cartItems[ch_getRandomNum()];
  var $ch_randomCartItemImg = $($ch_randomCartItem)
    .find(".cart__item__image")
    .html();
  var $ch_randomCartItemName = $($ch_randomCartItem)
    .find(".cart__item__name")
    .html();
  var $ch_randomCartItemColor = $($ch_randomCartItem)
    .find(".swatch__radio-label")
    .html();
  var $ch_randomCartItemQty = ch_getCartQty();
  var $ch_pdpUrl = $($ch_randomCartItem).find("a").attr("href");
  var ch_cartUrl = "https://www.vitamix.com/us/en_us/Shop/Shopping-Cart";

  function ch_getCartQty() {
    var $qty = $($ch_randomCartItem).find(".cart__item__count").html();
    if (Number($qty) >= 2) {
      return $qty;
    } else {
      return " 1";
    }
  }

  function ch_messageOver2() {
    if ($ch_cartAmount >= 2) {
      return (
        "<div class='ch_over-2'><span class='ch_over-2-span'>Showing 1 of " +
        $ch_cartAmount +
        "</span></div>"
      );
    }
    return "<span></span>";
  }

  function ch_getRandomNum(min, max) {
    min = 0;
    max = $ch_cartAmount - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if ($ch_cartAmount > 0) {
    setTimeout(ch_modalElement, 3000);
  }

  function ch_modalElement() {
    var $ch_container = $("#container");
    var ch_modalX = "<span class='ch_x-close'>X</span>";
    var ch_welcome =
      "<div class='ch_welcome'><h3 class='ch_title'>Welcome back!</h3></div><div class='ch_message'><p class='ch_message-cart'>You left something in your cart.</p><p class='ch_message-cart'>Check out today!</p></div>";
    var ch_productImg =
      "<div class='ch_img-cont'>" + $ch_randomCartItemImg + "</div>";
    var ch_productInfo =
      "<div class='ch_product-cont'>" +
      ch_productImg +
      "<div class='ch_product-info'><span class='ch_p-info ch_model-num'>" +
      $ch_randomCartItemName +
      "</span><span class='ch_p-info ch_product-detail'>Qty:" +
      $ch_randomCartItemQty +
      "</span><span class='ch_p-info ch_product-detail'>" +
      $ch_randomCartItemColor +
      "</span></div></div>";
    var ch_ctaBtn =
      "<div class='ch_cta-button'><p class='ch_view-cart'>View Cart</p></div>";
    var $ch_modalHtml = $(
      "<div class='ch_modal ch_to-hide'>" +
        ch_modalX +
        ch_welcome +
        ch_productInfo +
        ch_messageOver2() +
        ch_ctaBtn +
        "</div>"
    );

    var $ch_modalOverlay = $("<div class='ch_modal-overlay ch_to-hide'></div>");

    $ch_container.prepend($ch_modalHtml);
    $("body").prepend($ch_modalOverlay);

    $(function() {
      $(".ch_modal-overlay").click(function() {
        $(".ch_to-hide").hide();
      });
      $(".ch_x-close").click(function() {
        $(".ch_to-hide").hide();
      });
      $(".ch_img-cont").click(function() {
        window.location = $pdpUrl;
      });
      $(".ch_cta-button").click(function() {
        window.location = cartUrl;
      });
    });

    $(function() {
      $(".ch_x-close").css({
        float: "right",
        "margin-top": "8px",
        "margin-right": "11px",
        cursor: "pointer"
      });
      $(".ch_modal").css({
        height: "425px",
        width: "425px",
        margin: "0 auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#FAFAFA",
        "z-index": "1010",
        "text-align": "center"
      });
      $(".ch_welcome").css({
        "margin-top": "33px"
      });
      $(".ch_title").css({
        "font-family": "Sentinel A Reg",
        "font-size": "36pt",
        color: "#476887",
        "letter-space": "1px"
      });
      $(".ch_message").css({});
      $(".ch_message-cart").css({
        "font-family": "Gotham Narrow Reg",
        "font-size": "13.6pt",
        "line-height": "15pt",
        color: "#666666",
        margin: "3px",
        "letter-spacing": "1px"
      });
      $(".ch_product-cont").css({
        "margin-top": "43px",
        display: "block",
        clear: "both",
        content: "''",
        overflow: "auto"
      });
      $(".ch_img-cont").css({
        float: "left",
        width: "110px",
        height: "110px",
        "margin-left": "115px"
      });
      $(".ch_img-cont").hover(
        function() {
          $(this).css("cursor", "pointer");
        },
        function() {
          $(this).css("cursor", "auto");
        }
      );
      $(".ch_product-info").css({
        float: "left",
        "margin-top": "15px",
        "margin-left": "13px"
      });
      $(".ch_p-info").css({
        display: "block"
      });
      $(".ch_model-num").css({
        "font-family": "Gotham Narrow Med",
        "font-size": "12pt",
        color: "#476887",
        "margin-bottom": "5px",
        "text-decoration": "none"
      });
      $(".ch_model-num").children().hover(
        function() {
          $(this).css("color", "#509de5");
          $(this).css("text-decoration", "underline");
        },
        function() {
          $(this).css("color", "#476887");
          $(this).css("text-decoration", "none");
        }
      );
      $(".ch_product-detail").css({
        "font-family": "Gotham Narrow Reg",
        "font-size": "12pt",
        "line-height": "20pt",
        color: "#666666"
      });
      $(".ch_over-2").css({
        "margin-bottom": "-20px"
      });
      $(".ch_over-2-span").css({
        "font-size": "9pt"
      });
      $(".ch_cta-button").css({
        background: "#476887",
        "text-align": "center",
        width: "173px",
        height: "40px",
        margin: "52px auto 33px",
        cursor: "pointer"
      });
      $(".ch_cta-button").hover(
        function() {
          $(this).css("background-color", "#509de5");
        },
        function() {
          $(this).css("background-color", "#476887");
        }
      );
      $(".ch_view-cart").css({
        "font-family": "Sentinel A Reg",
        "font-size": "14pt",
        color: "#ffffff",
        "line-height": "40px"
      });
      $(".ch_modal-overlay").css({
        "z-index": "1000",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "black",
        opacity: "0.5"
      });
    });
  }
});
