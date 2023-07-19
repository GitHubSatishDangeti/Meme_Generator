import {Component} from 'react'
import {
  FormContainer,
  ImageContainer,
  MainHeading,
  Label,
  ImageInput,
  Container,
  Break,
  Select,
  Option,
  GenerateButton,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    isDisplayed: false,
  }

  onGenerate = () => {
    this.setState({isDisplayed: true})
  }

  onImageUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontChange = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isDisplayed} = this.state
    return (
      <>
        <FormContainer>
          <MainHeading>Meme Generator</MainHeading>
          <Container>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Break />
            <ImageInput
              onChange={this.onImageUrlChange}
              id="imageUrl"
              type="text"
              value={imageUrl}
            />
          </Container>
          <Container>
            <Label htmlFor="topText">Top Text</Label>
            <Break />
            <ImageInput
              onChange={this.onTopTextChange}
              id="topText"
              type="text"
              value={topText}
            />
          </Container>
          <Container>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Break />
            <ImageInput
              onChange={this.onBottomTextChange}
              id="bottomText"
              type="text"
              value={bottomText}
            />
          </Container>
          <Container>
            <Label htmlFor="select">Font Size</Label>
            <Break />
            <Select onChange={this.onFontChange} id="select">
              {fontSizesOptionsList.map(i => (
                <Option value={i.optionId} key={i.optionId}>
                  {i.displayText}
                </Option>
              ))}
            </Select>
          </Container>
          <GenerateButton onClick={this.onGenerate} type="button">
            Generate
          </GenerateButton>
        </FormContainer>

        {isDisplayed ? (
          <ImageContainer data-testid="meme" bgImage={imageUrl}>
            <TopText size={fontSize}>{topText}</TopText>
            <BottomText size={fontSize}>{bottomText}</BottomText>
          </ImageContainer>
        ) : null}
      </>
    )
  }
}
export default MemeGenerator
