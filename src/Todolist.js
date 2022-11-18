import Cardlist from "./components/Cardlist";

function Todolist() {
  return (
    <div className={`w-screen min-h-screen bg-slate-100`}>
      <h2 className=" pt-[41px] font-bold text-3xl text-center">
        Mengodong Todo List
      </h2>
      <div
        className={`lg:mx-[30px] flex space-x-[35px] mt-[36px] sm:mx-[10px]`}
      >
        <Cardlist header="List Task" logo="FcSurvey" />
      </div>
    </div>
  );
}

export default Todolist;
