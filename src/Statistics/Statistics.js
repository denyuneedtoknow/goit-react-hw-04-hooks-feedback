import s from "./Statistics.module.css"
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentsApproving,
}) {
  return (
    <>
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Satisfied Customers</p>
        <p className={s.grades}>{good}</p>
      </div>
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Indifferent Customers</p>
        <p className={s.grades}>{neutral}</p>
      </div >
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Unsatisfied Customers</p>
        <p className={s.grades}>{bad}</p>
      </div >
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Total Reviews</p>
        <p className={s.grades}>{total}</p>
      </div >
      <div className={s.gradeThumb}><p className={s.resume}>{percentsApproving}%</p><p className={s.resumeDescription} >of our customers liked us!</p></div >
    </>
  );
}
