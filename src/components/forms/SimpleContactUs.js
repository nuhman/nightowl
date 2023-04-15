import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import EmailIllustrationSrc from "../../images/email-illustration.svg";


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col-reverse sm:flex-row justify-between `;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const ImageColumn = tw(Column)`sm:w-full flex-shrink-0 h-80 sm:h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default ({ id = ""}) => {
  return (
    <Container id={id}>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Feel free to <span tw="text-secondary-500">get in touch</span><wbr/> with us.</h2>
            <form action="https://formspree.io/f/mknaperp" method="POST">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. John Doe"
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Email where I can reach you</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. john@mail.com"
                      required
                    />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Project details</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. I want a python console app that.."
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                  </ImageColumn>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
