import s from "./FeedbackOptions.module.css"

function FeedbackOptions({ options, click }) {
  return (
    <div className={s.btnThumb}>
      {options.map((option, index) => (
        <button className={s.btn} key={index} type="button" name={option} onClick={click}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
