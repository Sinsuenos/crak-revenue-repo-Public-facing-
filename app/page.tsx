import AgeGateContent from './components/AgeGateContent';

export const metadata = {
  title: 'Cantina Virtuale',
  description: 'Age verification required. You must be 18 or older to enter.',
};

export default function HomePage() {
  return <AgeGateContent />;
}
