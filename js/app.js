const app = Vue.createApp({
  data() {
    return {
      items: [
        { label: "鍵の施錠", key: "check_lock_door", checked: false },
        { label: "窓の施錠", key: "check_lock_window", checked: false },
        { label: "部屋の消灯", key: "check_lights_off", checked: false }
      ]
    };
  },
  mounted() {
    // ローカルストレージから読み込み
    this.items.forEach(item => {
      const saved = localStorage.getItem(item.key);
      if (saved === "true") {
        item.checked = true;
      }
    });
  },
  methods: {
    save(item) {
      localStorage.setItem(item.key, item.checked);
    },
    clearAll() {
      this.items.forEach(item => {
        item.checked = false;
        localStorage.setItem(item.key, false);
      });
    }
  }
});

app.mount("#app");
