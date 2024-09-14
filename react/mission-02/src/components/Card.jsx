export const Card = ({ title, job, date, view }) => {
  const getDate = (date) => {
    const newDate = new Date(date);
    return newDate.getMonth();
  };
  return (
    <article>
      <h2>{title}</h2>
      <p>
        {job} {getDate(date)}개월전 조회수{view / 10000}만회
      </p>
      <div>
        <span aria-label="프론트엔드스쿨 기수">4기</span>
        <span aria-label="카테고리">인터렉티브디자인</span>
      </div>
    </article>
  );
};
