interface IProps {
  bannerURL: string;
  txt?: string;
}

const Banner = ({ bannerURL, txt }: IProps) => {
  return (
    <section
      className="flex min-h-90 w-full flex-col justify-end
      bg-cover bg-center px-6 py-16 text-white pb-2"
      style={{
        backgroundImage: `url(${bannerURL})`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          {txt ? <p className="mt-4 text-lg text-indigo-100">{txt}</p> : null}
        </div>
      </div>
    </section>
  );
};

export default Banner;
