const Loader = (loading) =>
  loading && (
    <div
      style={{ borderTopColor: "#c2e7e2" }}
      class="w-24 h-24 my-12 border-2 border-top-2 animate-spin loader ease-linear rounded-full border-green-600 mx-auto"
    ></div>
  );

export default Loader;
