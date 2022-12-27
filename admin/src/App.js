import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { SongCreate, SongEdit, SongList } from "./resource/Song";
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import { authProvider } from "./components/authProvider";

const dataProvider = jsonServerProvider("http://localhost:80");

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="songs"
      list={SongList}
      recordRepresentation="name"
      edit={SongEdit}
      create={SongCreate}
      icon={MusicNoteRoundedIcon}
    />
    <Resource
      name="artists"
      list={ListGuesser}
      recordRepresentation="name"
      edit={EditGuesser}
      icon={SupervisedUserCircleRoundedIcon}
    />
    <Resource
      name="albums"
      list={ListGuesser}
      recordRepresentation="name"
      edit={EditGuesser}
      icon={AlbumRoundedIcon}
    />
    <Resource
      name="playlists"
      list={ListGuesser}
      recordRepresentation="name"
      edit={EditGuesser}
      icon={QueueMusicRoundedIcon}
    />
    <Resource
      name="genres"
      list={ListGuesser}
      recordRepresentation="name"
      edit={EditGuesser}
      icon={AcUnitRoundedIcon}
    />
  </Admin>
);

export default App;
