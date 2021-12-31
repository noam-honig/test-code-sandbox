export const Result = ({ result }) => (
  <>
    <h4>Result</h4>
    <div>
      {Object.entries(result).map(([key, value], index) => (
        <p key={index}>
          {key}: {value}
        </p>
      ))}
    </div>
  </>
);
