module.exports = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  async redirects() {
    return [
      {
        source: "/slack",
        destination:
          "https://join.slack.com/t/learnwithganning/shared_invite/zt-1d6kvchab-9I0f85XB2uymRoNZuKkkTQ",
        permanent: false,
      },
    ];
  },
};
