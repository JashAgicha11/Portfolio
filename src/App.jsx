import { Hero, Projects, Connect, Services } from "./sections";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className="bg-light-gray h-full max-w-full">
      <Nav />
      <div className="container max-w-full min-h-full">
        <section className="min-h-screen">
          <Hero />
        </section>

        <section className="top-[100px] sm:top-[100px] relative">
          <Projects />
        </section>

        <section className="sm:h-screen h-[110rem] top-[100px] sm:top-[150px] relative z-40 bg-light-gray rounded-b-xl">
          <Services />
        </section>

        <section className="h-screen top-0 sm:top-[200px] relative bg-dark-gray">
          <Connect />
        </section>
      </div>
    </main>
  );
};

export default App;
