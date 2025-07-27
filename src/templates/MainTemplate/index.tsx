import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
 <div className="main-layout">
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <div className="main-content">{children}</div>

      <Container>
        <Footer />
      </Container>
    </div>
  );
}
