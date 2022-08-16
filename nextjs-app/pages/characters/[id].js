import Link from 'next/link';

export default function Character({ character }) {
  return (
    <>
      <h1>{character.name}</h1>
      <Link href="/">Back</Link>
    </>
  );
}

export async function getStaticPaths() {
  const characterCount = Array.from({ length: 9 }, (v, i) =>
    (i + 1).toString()
  );
  const paths = characterCount.map((id) => ({
    params: { id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const character = await res.json();

  return {
    props: { character },
  };
}
