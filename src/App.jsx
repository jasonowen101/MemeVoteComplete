import './App.css'  // Importing the CSS file for styling
import Header from './Header'  // Importing the Header component
import VoteCollector from './VoteCollector'  // Importing the VoteCollector component
import ImageRow from './ImageRow'  // Importing the ImageRow component
import image1 from './assets/image1.jpg'  // Importing image 1
import image2 from './assets/image2.jpg'  // Importing image 2
import image3 from './assets/image3.jpg'  // Importing image 3

function App() {
  // Array of images with source and alt text to pass to ImageRow
  const images = [
    { src: image1, alt: 'Image 1' },  // Image object for the first image
    { src: image2, alt: 'Image 2' },  // Image object for the second image
    { src: image3, alt: 'Image 3' }   // Image object for the third image
  ];

  // JSX to render the application
  return (
    <>
      <h1>React VITE Example Meme Voter</h1>  {/* Main heading for the app */}
      
      {/* Rendering the Header component */}
      <Header />
      
      {/* Rendering the ImageRow component and passing the images array as a prop */}
      <ImageRow images={images} />
      
      {/* Rendering the VoteCollector component */}
      <VoteCollector />
    </>
  );
}

export default App;  // Exporting the App component so it can be used elsewhere
