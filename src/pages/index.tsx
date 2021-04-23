export default function Home(props) {
  return (
    <h1>index.tsx function Home()
      {JSON.stringify(props.episodes)}</h1>
  );

}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }
  }
}