!function(t){var o={};function e(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)e.d(n,a,function(o){return t[o]}.bind(null,a));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=248)}({21:function(t,o){t.exports=window.jQuery},248:function(t,o,e){"use strict";e.r(o);var n=e(21),a=e.n(n);!function(t){function o(t,o,e){const n=new FormData,s={action:"wpseo_set_ignore",option:t,_wpnonce:e};for(const[t,o]of Object.entries(s))n.append(t,o);return fetch(ajaxurl,{method:"POST",body:n}).then(e=>(e&&(a()("#"+o).hide(),a()("#hidden_ignore_"+t).val("ignore")),e))}function e(){t("#wp-admin-bar-root-default > li").off("mouseenter.yoastalertpopup mouseleave.yoastalertpopup"),t(".yoast-issue-added").fadeOut(200)}function n(o,e){if(t(".yoast-notification-holder").off("click",".restore").off("click",".dismiss"),void 0!==e.html){e.html&&(o.closest(".yoast-container").html(e.html),s());var n=t("#wp-admin-bar-wpseo-menu"),a=n.find(".yoast-issue-counter");a.length||(n.find("> a:first-child").append('<div class="yoast-issue-counter"/>'),a=n.find(".yoast-issue-counter")),a.html(e.total),0===e.total?a.hide():a.show(),t("#toplevel_page_wpseo_dashboard .update-plugins").removeClass().addClass("update-plugins count-"+e.total),t("#toplevel_page_wpseo_dashboard .plugin-count").html(e.total)}}function s(){var o=t(".yoast-notification-holder");o.on("click",".dismiss",(function(){var o=t(this),e=o.closest(".yoast-notification-holder");o.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),t.post(ajaxurl,{action:"yoast_dismiss_notification",notification:e.attr("id"),nonce:e.data("nonce"),data:o.data("json")||e.data("json")},n.bind(this,e),"json")})),o.on("click",".restore",(function(){var o=t(this),e=o.closest(".yoast-notification-holder");o.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),t.post(ajaxurl,{action:"yoast_restore_notification",notification:e.attr("id"),nonce:e.data("nonce"),data:e.data("json")},n.bind(this,e),"json")}))}function i(t){t.is(":hidden")||(t.outerWidth()>t.parent().outerWidth()?(t.data("scrollHint").addClass("yoast-has-scroll"),t.data("scrollContainer").addClass("yoast-has-scroll")):(t.data("scrollHint").removeClass("yoast-has-scroll"),t.data("scrollContainer").removeClass("yoast-has-scroll")))}function r(){window.wpseoScrollableTables=t(".yoast-table-scrollable"),window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each((function(){var o=t(this);if(!o.data("scrollContainer")){var e=t("<div />",{class:"yoast-table-scrollable__hintwrapper",html:"<span class='yoast-table-scrollable__hint' aria-hidden='true' />"}).insertBefore(o),n=t("<div />",{class:"yoast-table-scrollable__container",html:"<div class='yoast-table-scrollable__inner' />"}).insertBefore(o);e.find(".yoast-table-scrollable__hint").text(wpseoAdminGlobalL10n.scrollable_table_hint),o.data("scrollContainer",n),o.data("scrollHint",e),o.appendTo(n.find(".yoast-table-scrollable__inner")),i(o)}}))}a()(document).ready((function(){a()(".yoast-dismissible").on("click",".yoast-notice-dismiss",(function(){var t=a()(this).parent();return a.a.post(ajaxurl,{action:t.attr("id").replace(/-/g,"_"),_wpnonce:t.data("nonce"),data:t.data("json")}),a.a.post(ajaxurl,{action:"yoast_dismiss_notification",notification:t.attr("id"),nonce:t.data("nonce"),data:t.data("json")}),t.fadeTo(100,0,(function(){t.slideUp(100,(function(){t.remove()}))})),!1})),a()(".yoast-help-button").on("click",(function(){var t=a()(this),o=a()("#"+t.attr("aria-controls")),e=o.is(":visible");a()(o).slideToggle(200,(function(){t.attr("aria-expanded",!e)}))})),a()("button#robotsmessage-dismiss-button").on("click",(function(){o("search_engines_discouraged_notice","robotsmessage",a()(this).data("nonce")).then(()=>{window.location.href.includes("page=wpseo_dashboard")&&window.location.reload()})}))})),window.wpseoSetIgnore=o,window.wpseoDismissLink=function(t){return a()('<a href="'+t+'" type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></a>')},t(window).on("wp-window-resized orientationchange",(function(){window.wpseoScrollableTables&&window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each((function(){i(t(this))}))})),t(window).on({"Yoast:YoastTabsMounted":function(){setTimeout((function(){r()}),100)},"Yoast:YoastTabsSelected":function(){setTimeout((function(){r()}),100)}}),t(document).ready((function(){t(".yoast-issue-added").on("mouseenter mouseleave",(function(t){t.stopPropagation(),e()})).fadeIn(),t("#wp-admin-bar-root-default > li").on("mouseenter.yoastalertpopup mouseleave.yoastalertpopup",e),setTimeout(e,3e3),s(),function(){const t=a()(".wpseo-js-premium-indicator"),o=t.find("svg");if(t.hasClass("wpseo-premium-indicator--no")){const e=o.find("path"),n=t.css("backgroundColor");e.css("fill",n)}o.css("display","block"),t.css({backgroundColor:"transparent",width:"20px",height:"20px"})}(),r(),function(){const t=a()(".yoast-issue-counter .yoast-issues-count").first(),o=a()("#toplevel_page_wpseo_dashboard .plugin-count");if(t.text()===o.first().text())return;const e=a()("#toplevel_page_wpseo_dashboard .update-plugins"),n=a()(".yoast-issue-counter .screen-reader-text").first(),s=a()("#toplevel_page_wpseo_dashboard .update-plugins .screen-reader-text");if(t.length)return o.text(t.text()),e.removeClass().addClass("update-plugins count-"+t.text()),void s.text(n.text());o.text("0"),e.removeClass().addClass("update-plugins count-0"),s.remove()}()}))}(a.a)}});