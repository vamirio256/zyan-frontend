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
  FileInput,
  FileField,
} from "react-admin";
import MyUrlField from "../components/MyUrlField";

const songFilter = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="artistId" label="Artist" reference="artists" />,
  <ReferenceInput source="albumId" label="Album" reference="albums" />,
  <ReferenceInput source="genreId" label="Genre" reference="genres" />,
];

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
          <FileField source="file.src" />
          <ImageField source="image.src" label="Image" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const SongEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="artistId" reference="artists" />
      <ReferenceInput source="albumId" reference="albums" />
      <ReferenceInput source="genreId" reference="genres" />
      <TextInput source="name" />
      <FileInput source="file" label="Song File">
        <FileField source="src" title="title" />
      </FileInput>
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
      <FileInput source="file" label="Song File">
        <FileField source="src" title="title" />
      </FileInput>
      <ImageInput source="image" label="Song Picture" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
