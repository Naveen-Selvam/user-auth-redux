import React from "react";
import NotesForm from "./NotesForm";
import styled from "styled-components";
import NotesList from "./NotesList";

const Wrapper = styled.div`
  display: grid;
  grid-template: 1fr/1fr 0.3fr;
`;
const FormWrapper = styled.div`
  padding-left: 1.5rem;
`;
 
const MyNotes = (props) => {
  return (
    <Wrapper>
      <div>
        <FormWrapper>
          <NotesList />
        </FormWrapper>
      </div>
      <div>
        <NotesForm />
      </div>
    </Wrapper>
  );
};

export default MyNotes;
