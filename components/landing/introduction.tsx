interface IntroductionProps {
  name: string;
  job: string;
  children: string;
}

export const Introduction = ({
  name,
  job,
  children
}: IntroductionProps) => {
  return (
    <section className="w-full m-auto">
      <h2 className="mb-4 text-5xl font-semibold max-lg:text-center">Hi, I'm {name}.</h2>
      <h3 className="text-purple-300 text-2xl font-semibold mb-8 max-lg:text-center">
        {job}
      </h3>
      <p className=" font-light max-lg:text-center">
        {children}
      </p>
    </section>
  );
};
