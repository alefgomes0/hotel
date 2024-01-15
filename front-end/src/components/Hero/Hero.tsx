type HeroProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <section className="relative bg-[url(/images/lp-1.jpg)] h-[calc(100svh-90px)] bg-center bg-cover">
      {children}
    </section>
  );
};
