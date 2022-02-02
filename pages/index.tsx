import type { NextPage } from 'next';
import { Button, Htag, P, Tag } from '../src/components';

const Home: NextPage = (): JSX.Element => {

  return (
    <>
      <Htag tag='h3'>dude</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Button appearance='ghost'>Button</Button>
      <P size='l'>Large</P>
      <P size='m'>Medium</P>
      <P size='s'>Small</P>
      <Tag size='s'>Small Tag</Tag>
      <Tag size='m' color='ghost'>Some text</Tag>
      <Tag size='m' color='red'>Some text</Tag>
      <Tag size='m' color='grey'>Some text</Tag>
      <Tag size='m' color='green'>Some text</Tag>
      <Tag size='m' color='primary'>Some text</Tag>
    </>
  );
};

export default Home;
