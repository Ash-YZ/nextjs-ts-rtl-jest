import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import StudioGrid from '@components/StudioGrid/StudioGrid';

const Home: NextPage = () => {
  const [studios, setStudios] = useState<string>();

  useEffect(() => {
    (async () => {
      const resp = await fetch('/api/studios');
      const data = await resp.json();
      setStudios(data.studios);
    })();
  }, []);

  return studios ? <StudioGrid studios={studios.split(',')} /> : null;
};

export default Home;
