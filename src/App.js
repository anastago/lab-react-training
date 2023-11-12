import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import Carousel from './components/Carousel';
import SignUp from './components/SignUp';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        firstName={'Joe'}
        lastName={'Doe'}
        gender={'male'}
        height={1.78}
        birth={'Tue Jul 14 1992'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      ></IdCard>

      <IdCard
        firstName={'Obrien'}
        lastName={'Delores'}
        gender={'female'}
        height={1.782}
        birth={'Tue May 11 1993'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></IdCard>
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreaditCard</h1>
      <div style={{ display: 'flex' }}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Revolut"
          owner="Anastasiia Go"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />

      <h1>ClickablePicture</h1>
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      <h1>Dice</h1>
      <Dice></Dice>

      <h1>Carousel</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h1>NumbersTable</h1>
      <NumbersTable limit={15} />
      <h1>Facebook</h1>
      <Facebook></Facebook>
      <h1>Sign Up</h1>
      <SignUp></SignUp>
      <h1>RGBColorPicker</h1>
      <RGBColorPicker></RGBColorPicker>
    </div>
  );
}

export default App;
