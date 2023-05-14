import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Repos from './components/Repos';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import renderer from 'react-test-renderer';


test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Marian García/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact without crashing', () => {
  render(
    <BrowserRouter basename="/">
      <Contact />
    </BrowserRouter>
  );
});

test('renders AboutMe without crashing', () => {
  render(<AboutMe />);
});

test('renders Home without crashing', () => {
  render(<Home />);
});

test('renders Repos without crashing', () => {
  render(<Repos />);
});

test('renders Skills without crashing', () => {
  render(<Skills />);
});

test('renders NavBar without crashing', () => {
  render(<NavBar />);
});

test('renders Footer without crashing', () => {
  render(<Footer />);
});

test('renders a button', () => {
  const { getByText } = render(<button>Check out my work!</button>);
  const button = getByText('Check out my work!');
  expect(button).toBeInTheDocument();
});

describe('AboutMe', () => {
  it('renders the image correctly', () => {
    render(<AboutMe />);
    const imageElement = screen.getByAltText('Bootstrap Themes');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'fotoMarian.jpg');
  });
});

test('Home component matches snapshot', () => {
  const component = renderer.create(<Repos />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});



import { MemoryRouter } from 'react-router-dom';



//comprobar que se están haciendo bien las renderizaciones y las peticones de la API
describe('Repos', () => {
  it('comprobar que se reciben bien los datos de la API', async () => {
    const mockRepos = [
      {
        id: 1,
        name: 'Tanjiro', 
        description: 'Maquetación de página web con bootstrap', 
        image: 'https://i.postimg.cc/ZRqcLh1v/Captura-de-pantalla-2023-03-18-004207.png', 
        link: 'https://github.com/Marian4gc/proyectoweb',
      },
      {
        id: 2,
        name: 'Aplicación con React',
        description: 'Aplicación con React en entorno node.',
        image: 'https://i.postimg.cc/6qhZZvyr/Captura-de-pantalla-2023-03-17-141107.png',
        link: 'https://github.com/Marian4gc/formulario-js',
      },
      {
        id: 3,
        name: 'Validación de formulario JS',
        description: 'Validar la información de un formulario con JavaScript',
        image: 'https://i.postimg.cc/X7WQmKWg/Captura-de-pantalla-2023-03-17-135723.png',
        link: 'https://github.com/Marian4gc/vivero-react',
      },
      {
        id: 4,
        name: 'Formulario React',
        description: 'Formulario de React validado, utilizando Formik',
        image: 'https://i.postimg.cc/RhKn7sVn/Captura-de-pantalla-2023-03-18-002814.png',
        link: 'https://github.com/Marian4gc/formulario-react',
      },
      {
        id: 5,
        name: 'AnimApp',
        description: 'AnimApp es una aplicación web de comercio electrónico diseñada para ayudar a las personas a adoptar animales.',
        image: 'https://user-images.githubusercontent.com/115170876/221117608-73375859-b8f3-4489-ab3d-04ef7e3dae47.jpg',
        link: 'https://github.com/Marian4gc/hackathon-animApp',
      },
      {
        id: 6,
        name: 'Aplicación Navidad',
        description: 'Web dedicada a la recepción y a la realización de cartas para todos las niñas y niños del mundo.',
        image: 'https://i.postimg.cc/4NqTz6LG/aplicacion-Navidad.png',
        link: 'https://github.com/Marian4gc/proyectonavidad',
      },
    ];
      
    jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockRepos),
        });

      render(<Repos />);

      await waitFor(() => expect(global.fetch).toHaveBeenCalled());

      const repoElements = await screen.findAllByRole('link');

    expect(repoElements).toHaveLength(6);
    expect(repoElements[0]).toHaveAttribute('href', mockRepos[0].link);
    expect(repoElements[1]).toHaveAttribute('href', mockRepos[1].link);

    });
});






