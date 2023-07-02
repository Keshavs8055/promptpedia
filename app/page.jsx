import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Share your own AI prompts to feed to AI like Chat-gpt and get awesome
        results.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
