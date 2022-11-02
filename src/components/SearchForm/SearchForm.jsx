import { Form, Input, Button, Icon } from './SearchForm.styled';

export const SearchForm = ({ handlQuery }) => {
  return (
    <Form onSubmit={handlQuery}>
      <Input type="text" name="search" autoComplete="off" autoFocus />
      <Button type="submit">
        <Icon />
      </Button>
    </Form>
  );
};
