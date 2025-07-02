import './App.css';
import TimeTable, {TimetableEvent} from './TimeTable'
import Description from './Description'


function App() {
  const events:TimetableEvent[] = [
    {day: "Wed", period: 2, title: "情報システム設計"},
    {day: "Wed", period: 3, title: "ITビジネスのフロンティア"}
  ];

  const username = '中央太郎'
  return (
    <>
      <header>
        <h1 className="h-7">Study Planner Pro</h1>
      </header>
      <Description username = {username}/>
      <TimeTable events={events}></TimeTable>
    </>
  );
}

export default App;
