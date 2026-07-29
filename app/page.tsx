import AgeGateContent from './components/AgeGateContent';

export const metadata = {
  title: 'Cantina Virtual',
  description: 'Age verification required. You must be 18 or older to enter.',
};

export default function HomePage() {
  return <AgeGateContent />;
}
