import Link from 'next/link';

export default function Characters({ characters }) {
  return (
    <>
      <h1>Welcome!</h1>
      <ul>
        {characters.map((character, idx) => (
          <li key={idx}>
            <Link href={`/characters/${idx + 1}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/people');
  const { results: characters } = await res.json();
  console.log(characters);
  return {
    props: {
      characters,
    },
  };
}
