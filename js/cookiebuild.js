window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#2799d1",
          "text": "#3e4141"
        },
        "button": {
          "background": "#df061c",
          "text": "#ffffff"
        }
      },
      "theme": "classic",
      "position": "top",
      "content": {
        "message": "{{ lang.cookie_message }}",
        "dismiss": "{{ lang.cookie_dismiss }}",
        "link": "{{ lang.cookie_link }}",
        "href": "{{ lang.cookie_href }}"
      }
    })});