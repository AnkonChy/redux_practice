import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counters/countersSlice";

// const initialCounters = [
//   {
//     id: 1,
//     value: 0,
//   },
//   {
//     id: 2,
//     value: 0,
//   },
// ];

function App() {
  const counters = useSelector((state) => state.counters);
  // const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);
  const dispatch = useDispatch();
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
    // const updatedCounters = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value + 1,
    //     };
    //   }
    //   return counter;
    // });
    // // setCounters(updatedCounters);
  };
  const handleDecrement = (counterId) => {
    // const updatedCounters = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value - 1,
    //     };
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounters);
  };
  return (
    <div className="w-screen h-screen mx-auto border border-red-400 p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
      </div>
    </div>
  );
}

export default App;
