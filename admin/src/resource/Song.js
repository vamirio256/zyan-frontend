import { useMediaQuery } from "@mui/material";
import {
  Datagrid,
  List,
  NumberField,
  TextField,
  SimpleList,
  UrlField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  ImageInput,
  ImageField,
  Create,
  useRecordContext,
} from "react-admin";
import MyUrlField from "../components/MyUrlField";

const songFilter = [
 <TextInput source="q" label="Search" alwaysOn />,
 <ReferenceInput source="artistId" label="Artist" reference="artists" />
]

export const SongList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={songFilter}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.file}
          tertiaryText={(record) => record.image}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <ReferenceField source="artistId" reference="artists" />
          <ReferenceField source="albumId" reference="albums" />
          <ReferenceField source="genreId" reference="genres" />
          <MyUrlField source="file" />
          <MyUrlField source="image.src" />
          <NumberField source="weekView" />
          <NumberField source="totalView" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const SongTitle = () => {
  const record = useRecordContext();
  return <span>Song {record ? `"${record.name}"` : ""}</span>;
};

export const SongEdit = () => (
  <Edit>
    <Edit title={<SongTitle />} />  
    <SimpleForm>
    <TextInput source="id" disabled />
      <ReferenceInput source="artistId" reference="artists" />
      <ReferenceInput source="albumId" reference="albums" />
      <ReferenceInput source="genreId" reference="genres" />
      <TextInput source="name" />
      <TextInput source="file" />
      <ImageInput source="image" label="Song Picture" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const SongCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="artistId" reference="artists" />
      <ReferenceInput source="albumId" reference="albums" />
      <ReferenceInput source="genreId" reference="genres" />
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="file" />
      <ImageInput source="image" label="Song Picture" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
