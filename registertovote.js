//modified off of the Rock the Vote's Website https://register.rockthevote.com/assets/rtv-iframe.js//
//Open Source access: https://www.rockthevote.org/programs-and-partner-resources/tech-for-civic-engagement/online-voter-registration-platform///

!function(w) {
  w.RtvIframe = w.RtvIframe || {
    id: "rtv-iframe",
    init: function(params) {
      params = params || {};
      var queryString = "";
      if (typeof(params)==="object") {
        var keys = Object.keys(params);
        for(var i=0,ii=keys.length;i<ii;i++) {
          var key = keys[i];
          var value = params[key];
          if (queryString != "") {
            queryString = queryString + "&";
          }
          queryString = queryString + key + "=" + value;
        }
      }
      var baseUrl = "https://register.rockthevote.com";
      var url = baseUrl;
      if (queryString != "") {
        url = url + "?" + queryString;
      }
      document.write("<iframe id=\""+this.id+"\"src=\""+url+"\" width=\"100%\" scrolling=\"no\" height=\"700\" frameborder=\"0\"></iframe>")

      var script = w.document.createElement('script');
      script.onload = this.onScriptLoad.bind(this);
      var scriptUrl = "//s3.amazonaws.com/rocky-assets/assets/iframeResizer.min-ce97b888b19f31ac300ddea612953fa47c786ad20eb5194df2db64df3536c2ed.js";
      script.src = scriptUrl //baseUrl + "/assets/iframeResizer.min.js";
      w.document.head.appendChild(script);
    },
    onScriptLoad: function() {
      iFrameResize({ log: false, checkOrigin: false }, "#" + this.id)
    },

  }
}(window || {})
;
