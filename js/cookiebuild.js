<script src="{{ site.url }}/js/cookieconsent.min.js" data-cfasync="false"></script>
<script>
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
      "position": "bottom-left",
      "type": "opt-out",
      "content": {
        "message": "{{ lang.cookie_message }}",
        "dismiss": "{{ lang.cookie_dismiss }}",
        "deny": "{{ lang.cookie_deny }}",
        "link": "{{ lang.cookie_link }}",
        "href": "{{ lang.cookie_href }}"
      }
});
</script>
