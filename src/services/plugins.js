const plugins = [
  {
    href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
    target: "_blank",
    rel: "noopener",
    content: "babel",
  },
  {
    href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
    target: "_blank",
    rel: "noopener",
    content: "eslint",
  },
];

export default function getPlugins(){
  return plugins;
}