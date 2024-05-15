type Props = {
  result: any;
  setResult: Function;
  setIsGetResult: Function;
};

function Result({ result, setResult, setIsGetResult }: Props): JSX.Element {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>{result.message}</h1>
      <p></p>
      <button
        className="py-2 px-4 bg-black text-white"
        onClick={(): void => {
          setResult({});
          setIsGetResult(false);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Result;
