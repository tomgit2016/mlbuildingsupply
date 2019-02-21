$("#lang_span").on("click", function(){
  if ($("#lang_span").text() === "English") {
    localStorage.setItem("lang", "中 文");
    $("#home_span").text("Home");
    $("#aluminum_span").text("Aluminum");
    $("#stainless_span").text("Casting & Fastener");
    $("#bending_span").text("Bending");
    $("#others_span").text("Others");
    $("#contact_span").text("Contact");
    $("#p_1").text("is an aluminum wholesale company selling a variety of high quality aluminum products and building materials for the commercial and residential constructional industry. Our company was established in October 2011.");
    $("#p_2").text("In this years, we have built a network of over 100 corporate clients in BC and across Canada by providing solutions in sourcing and custom fabrication of key building components for a range of complex projects and developments.");
    $("#p_3").text("Our professional staff and sales team work hard every day to assist our customers with precise recommendations, and delivery of key products and materials to locations all across Canada. We offer service in English, Mandarin, and Cantonese. Purchase orders are accepted by phone or email.");
  } else {
    localStorage.setItem("lang", "English");
    $("#home_span").text("主 页");
    $("#aluminum_span").text("铝 材");
    $("#stainless_span").text("建 材");
    $("#bending_span").text("弯 管");
    $("#others_span").text("其 他");
    $("#contact_span").text("联 系 我 们");
    $("#p_1").text("成立于2011年10月。我们为商业和住宅建筑行业提供各种优质铝材制品和建筑材料。");
    $("#p_2").text("公司成立至今，我们建立了一个超过100多家企业的客户网，范围覆盖不列颠哥伦比亚省及加拿大各地。为客户提供一系列建筑项目和开发的原材料采购和定制方案。为确保产品符合创新和设计的最高标准，我们与加拿大及中国的主要供销商建立了长期合作关系。我们提供各种外部和内部建筑项目所需的产品，如铝围栏铸件，螺钉和铝材弯工等。");
    $("#p_3").text("我们的专业销售团队将至诚为您服务。我们提供英语，普通话和粤语服务。");
  }
  $("#lang_span").text(localStorage.getItem("lang"));

})

  // set nav bar change language
  if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "中 文");
}


  $("#lang_span").text(localStorage.getItem("lang"));
  if (localStorage.getItem("lang") === "中 文") {
    $("#home_span").text("Home");
    $("#aluminum_span").text("Aluminum");
    $("#stainless_span").text("Casting & Fastener");
    $("#bending_span").text("Bending");
    $("#others_span").text("Others");
    $("#contact_span").text("Contact");
    $("#p_1").text("is an aluminum wholesale company selling a variety of high quality aluminum products and building materials for the commercial and residential constructional industry. Our company was established in October 2011.");
    $("#p_2").text("In this years, we have built a network of over 100 corporate clients in BC and across Canada by providing solutions in sourcing and custom fabrication of key building components for a range of complex projects and developments.");
    $("#p_3").text("Our professional staff and sales team work hard every day to assist our customers with precise recommendations, and delivery of key products and materials to locations all across Canada. We offer service in English, Mandarin, and Cantonese. Purchase orders are accepted by phone or email.");
  } else {
    $("#home_span").text("主 页");
    $("#aluminum_span").text("铝 材");
    $("#stainless_span").text("建 材");
    $("#bending_span").text("弯 管");
    $("#others_span").text("其 他");
    $("#contact_span").text("联 系 我 们");
    $("#p_1").text("成立于2011年10月。我们为商业和住宅建筑行业提供各种优质铝材制品和建筑材料。");
    $("#p_2").text("公司成立至今，我们建立了一个超过100多家企业的客户网，范围覆盖不列颠哥伦比亚省及加拿大各地。为客户提供一系列建筑项目和开发的原材料采购和定制方案。为确保产品符合创新和设计的最高标准，我们与加拿大及中国的主要供销商建立了长期合作关系。我们提供各种外部和内部建筑项目所需的产品，如铝围栏铸件，螺钉和铝材弯工等。");
    $("#p_3").text("我们的专业销售团队将至诚为您服务。我们提供英语，普通话和粤语服务。");
  }

  // MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
