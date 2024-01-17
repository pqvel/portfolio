import Nav from "../nav/Nav";
const HistoryPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-5">
        <div className="container flex flex-col gap-4">
          <h1 className=" text-white text-4xl">Привет, я Павел Соляник!</h1>
          <p className=" text-white text-xl">
            Мне 21 год, и я студент четвертого курса в БГПУ имени Максима Танка
            по специальности "Физика информатика". Также, я работаю frontend
            разработчиком в компании apteka.by уже год.
          </p>

          <p className="text-white text-xl">
            В течение обучения в университете дважды проходил педагогическую
            практику в гимназии номер 20, что подчеркнуло мою заинтересованность
            в педагогической деятельности и обмене знаний с учащимися.
          </p>

          <p className="text-white text-xl">
            Вне учебы и работы я страстно увлекаюсь катанием на велосипеде,
            наслаждаюсь свободой и вдохновением в каждой педальной оборотной.
            Кроме того, я обожаю читать книги – от научной фантастики до
            классики, в поисках новых знаний и захватывающих приключений.
          </p>

          <p className="text-white text-xl">
            Буду рад новым знакомствам и обмену идеями. Если у вас есть общие
            интересы или просто хотите поделиться своим опытом, не стесняйтесь
            связаться со мной. Давайте вместе создадим что-то удивительное и
            вдохновляющее!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
