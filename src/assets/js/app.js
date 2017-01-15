// initialize foundation
$(document).foundation();



var s,
fetch_data = {
  settings: {
    // useful if we were going to append some data somewhere.
    //dom_element: $( '#js-dom-element' ),
  },

  init: function() {
    s = this.settings;
    this.fetch_data();
  },

  fetch_data: function() {
    fetch('//taviti-by-hightops.surge.sh/assets/json/fake-api.json')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
       })
       .then(data => {
         for (let key in data){
           console.log(key, data[key])
         }
      });
  }

};
fetch_data.init();
