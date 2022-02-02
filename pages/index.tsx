import type { NextPage } from 'next';
import { Button, Htag } from '../src/components';

const Home: NextPage = (): JSX.Element => {

  return (
    <>
      <Htag tag='h3'>dude</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
    </>
  );
};

export default Home;
