export default function Stats({ stats }) {
  return (
    <section className='stats'>
      <Stat label='Words' number={stats.textWordssAmount} />
      <Stat label='Characters' number={stats.textCharactersAmount} />
      <Stat label='Instagram' number={stats.instagramCharactersLeft} />
      <Stat label='Facebook' number={stats.facebookCharactersLeft} />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <div className='stat'>
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className='second-heading'>{label}</h2>
    </div>
  );
}
