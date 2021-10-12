import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { Markdown } from "../components/Markdown";
import { PostData, loadBlogPosts, loadMarkdownFile } from "../loader";
import { PostCard } from "../components/PostCard";

const Home = (props: {
  introduction: string;
  features: string;
  obombe: string;
  chegoyahochu: string;
  chtoyaumeyu: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>Портфолио Д.С ШАХОВ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <h1>Привет! Это мое портфолио, тут вы можете со мной познакомиться</h1>
        <br />
        <hr />
      </div>

      <div className="section">
        <h2>Обо мне</h2>
        <div className="medium-wide">
          <Markdown source={props.obombe} />
        </div>
      </div>
      <div className="section">
        <h2>Что я хочу</h2>
        <div className="medium-wide">
          <Markdown source={props.chegoyahochu} />
        </div>
      </div>
      <div className="section">
        <h2>Что я умею</h2>
        <div className="medium-wide">
          <Markdown source={props.chtoyaumeyu} />
        </div>
      </div>

      <div className="section">
        <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{" "}
          <code>props.posts</code> array. These blog post "cards" are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p>
        <div className="post-card-container">
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>

      <div className="section">
        <h2>Время фактов</h2>
        <blockquote>
          <p>
            <em>
              Этот сайт написан на{" "}
              <a href="https://nextjs.org/" className="siniy">
                Next js
              </a>{" "}
              +{" "}
              <a href="https://github.com/colinhacks/devii" className="siniy">
                Devii
              </a>
            </em>
          </p>
        </blockquote>
      </div>

      {/* <div className="section">
        <h2>README.md</h2>
        <p>
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. You can also read the README on
          GitHub at{' '}
          <a href="https://github.com/colinhacks/devii">
            https://github.com/colinhacks/devii
          </a>
          .
        </p>
      </div> */}

      {/* <div className="section alternate">
        <div className="narrow">
          <Markdown source={props.readme} />
        </div>
      </div> */}

      <div className="section alternate">
        <h2 className="centered">Get started</h2>
        <a href="https://github.com/colinhacks/devii">
          <button className="fork-button">Go to README</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile("introduction.md");
  const features = await loadMarkdownFile("features.md");
  const chtoyaumeyu = await loadMarkdownFile("chtoyaumeyu.md");
  const obombe = await loadMarkdownFile("obombe.md");
  const chegoyahochu = await loadMarkdownFile("chegoyahochu.md");
  const readmeFile = await import(`../${"README.md"}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    features: features.contents,
    obombe: obombe.contents,
    chegoyahochu: chegoyahochu.contents,
    readme: readme,
    chtoyaumeyu: chtoyaumeyu.contents,
    posts,
  };

  return { props };
};
