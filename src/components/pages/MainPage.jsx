import Nav from "../nav/Nav";
const MainPage = () => {
  return (
    <>
      <Nav />
      <div className="py-5">
        <div className="container flex flex-col gap-4">
          <div className="text-white text-5xl mt-8">Мое портфолио</div>
          <h1 className=" text-white text-6xl">Соляник Павел Владимирович</h1>
          <h2 className=" text-white text-3xl">Группа: 240520</h2>
          <div className=" text-white text-3xl">Курс: физика и информатика</div>
          <div className=" text-white text-3xl mt-6">Контакты:</div>
          <div className="flex gap-3">
            <SocialLink
              link="https://t.me/Pqvel"
              text="Телеграм"
              myClass="bg-blue-400 hover:bg-blue-500"
            />
            <SocialLink
              link="https://vk.com/sol_pasha"
              text="ВКонтакте"
              myClass="bg-green-400 hover:bg-green-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SocialLink = ({ text = "", link = "", myClass = "" }) => (
  <a
    className={`${myClass} transition text-white flex items-center justify-center h-10 px-5 rounded-3xl font-semibold`}
    href={link}
  >
    {text}
  </a>
);
export default MainPage;
