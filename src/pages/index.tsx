import { GetStaticProps } from "next";
import { api } from "../services/api";


type Episode = {
  id: string;
  title: string;
  members: string;
}

type HomeProps = {
  episodes: Array<Episode>
}

export default function Home(props: HomeProps) {
  return (
    <h1>index.tsx function Home()
      {JSON.stringify(props.episodes)}</h1>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

/*
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}*/